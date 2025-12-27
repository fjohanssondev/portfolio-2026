"use server";

import { formSchema } from "@/schema";
import { FormState } from "@/types";
import { Resend } from "resend";
import { z } from "zod";

export async function sendEmailAction(
  _prevState: FormState,
  formData: FormData
) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const values = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  const result = formSchema.safeParse(values);

  if (!result.success) {
    const flattened = z.flattenError(result.error);

    return {
      values,
      success: false,
      errors: flattened.fieldErrors,
    };
  }

  await resend.emails.send({
    from: values.email,
    subject: "Kontaktformulär Portfolio",
    to: ["hello@fjohansson.dev"],
    text: `Namn: ${values.name}</br>${values.message}`,
  });

  return {
    values: {
      name: "",
      email: "",
      message: "",
    },
    errors: null,
    success: true,
  };
}

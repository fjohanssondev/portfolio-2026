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

  const { error } = await resend.emails.send({
    from: "Portfolio <hello@fjohansson.dev>",
    replyTo: values.email,
    subject: "Kontaktformulär Portfolio",
    to: ["hello@fjohansson.dev"],
    text: `Namn: ${values.name}\nE-post: ${values.email}\n\n${values.message}`,
  });

  if (error) {
    console.error("Failed to send email", error);

    return {
      values,
      success: false,
      errors: {
        message: ["Something went wrong. Please try again or email me directly."],
      },
    };
  }

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

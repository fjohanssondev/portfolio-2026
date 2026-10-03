"use client";

import Form from "next/form";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { sendEmailAction } from "@/actions/send-email";
import { FormState } from "@/types";
import { Textarea } from "@/components/ui/textarea";
import { Spinner } from "@/components/ui/spinner";
import { Send } from "lucide-react";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    sendEmailAction,
    {
      values: {
        name: "",
        email: "",
        message: "",
      },
      errors: null,
      success: false,
    }
  );

  return (
    <Form action={formAction}>
      <FieldGroup className="grid sm:grid-cols-2">
        <Field data-invalid={!!state.errors?.name?.length}>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Input
            id="name"
            name="name"
            defaultValue={state.values.name}
            disabled={isPending}
            aria-invalid={!!state.errors?.name?.length}
            placeholder="John Doe"
          />
          {state.errors?.name && (
            <FieldError>{state.errors.name[0]}</FieldError>
          )}
        </Field>
        <Field data-invalid={!!state.errors?.email?.length}>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            name="email"
            defaultValue={state.values.email}
            disabled={isPending}
            aria-invalid={!!state.errors?.email?.length}
            type="email"
            placeholder="john.doe@gmail.com"
          />
          {state.errors?.email && (
            <FieldError>{state.errors.email[0]}</FieldError>
          )}
        </Field>
      </FieldGroup>
      <FieldGroup className="mt-6">
        <Field data-invalid={!!state.errors?.message?.length}>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea
            id="message"
            name="message"
            defaultValue={state.values.message}
            disabled={isPending}
            aria-invalid={!!state.errors?.message?.length}
            placeholder="Tell me a bit about what you have in mind..."
            className="min-h-40"
          />
          {state.errors?.message && (
            <FieldError>{state.errors.message[0]}</FieldError>
          )}
        </Field>
      </FieldGroup>
      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={isPending}>
        {isPending ? <Spinner /> : <Send />} Send message
      </Button>
      {state.success && (
        <p role="status" className="text-sm text-muted-foreground mt-4">
          Thanks for reaching out! I&apos;ll get back to you as soon as I can.
        </p>
      )}
    </Form>
  );
}

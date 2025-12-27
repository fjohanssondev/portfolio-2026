"use client";

import Form from "next/form";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { sendEmailAction } from "@/actions/send-email";
import { FormState } from "@/types";
import { Textarea } from "@/components/ui/textarea";
import { Spinner } from "@/components/ui/spinner";

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
    <Form action={formAction} className="max-w-xl">
      <FieldGroup className="grid grid-cols-2">
        <Field data-invalid={!!state.errors?.name?.length}>
          <FieldLabel htmlFor="title">Name</FieldLabel>
          <Input
            id="name"
            name="name"
            defaultValue={state.values.name}
            disabled={isPending}
            aria-invalid={!!state.errors?.name?.length}
            placeholder="John Doe"
          />
          <FieldDescription>Please provide me your full name</FieldDescription>
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
            placeholder="john.doe@gmail.com"
          />
          <FieldDescription>Provide your own e-mail</FieldDescription>
          {state.errors?.email && (
            <FieldError>{state.errors.email[0]}</FieldError>
          )}
        </Field>
      </FieldGroup>
      <FieldGroup className="mt-8">
        <Field data-invalid={!!state.errors?.message?.length}>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea
            id="message"
            name="message"
            defaultValue={state.values.message}
            disabled={isPending}
            aria-invalid={!!state.errors?.message?.length}
          />
          <FieldDescription>What could I do for you?</FieldDescription>
          {state.errors?.message && (
            <FieldError>{state.errors.message[0]}</FieldError>
          )}
        </Field>
      </FieldGroup>
      <Button type="submit" className="mt-4">
        {isPending && <Spinner />} Send mail
      </Button>
    </Form>
  );
}

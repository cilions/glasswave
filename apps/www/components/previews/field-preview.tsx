"use client";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  Input,
} from "glasswave";
import { ComponentPreview } from "@/components/component-preview";

export function FieldPreview() {
  return (
    <ComponentPreview label="Field">
      <FieldGroup className="w-full max-w-sm">
        <Field>
          <FieldLabel htmlFor="demo-email">Email</FieldLabel>
          <Input id="demo-email" type="email" placeholder="you@example.com" />
          <FieldDescription>We never share your email.</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="demo-error">With error</FieldLabel>
          <Input id="demo-error" aria-invalid defaultValue="bad" />
          <FieldError>This field is invalid.</FieldError>
        </Field>
      </FieldGroup>
    </ComponentPreview>
  );
}

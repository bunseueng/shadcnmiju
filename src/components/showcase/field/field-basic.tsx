"use client";

import { Input } from "@/components/ui/input";
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";

export default function FieldBasic() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-md space-y-6">
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="name@example.com" />
          <FieldDescription>
            We'll never share your email with anyone else.
          </FieldDescription>
        </Field>

        <Field>
          <FieldLabel htmlFor="username">Username</FieldLabel>
          <Input id="username" type="text" placeholder="johndoe" />
          <FieldDescription>
            Choose a unique username for your account.
          </FieldDescription>
        </Field>

        <Field>
          <FieldLabel htmlFor="bio">Bio</FieldLabel>
          <Input id="bio" type="text" placeholder="Tell us about yourself" />
        </Field>
      </div>
    </div>
  );
}

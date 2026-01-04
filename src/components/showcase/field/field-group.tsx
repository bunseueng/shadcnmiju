"use client";

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";

export default function FieldGroupExample() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-2xl">
        <FieldSet>
          <FieldLegend>Personal Information</FieldLegend>
          <FieldDescription>
            Update your personal details and contact information.
          </FieldDescription>

          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="firstName">First Name</FieldLabel>
              <Input id="firstName" type="text" placeholder="John" />
            </Field>

            <Field>
              <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
              <Input id="lastName" type="text" placeholder="Doe" />
            </Field>

            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input id="email" type="email" placeholder="john@example.com" />
            </Field>
          </FieldGroup>

          <FieldSeparator>Preferences</FieldSeparator>

          <FieldGroup>
            <Field orientation="horizontal">
              <FieldLabel htmlFor="newsletter" className="flex items-center gap-2">
                <Checkbox id="newsletter" />
                <div>
                  <div className="font-medium">Newsletter Subscription</div>
                  <FieldDescription>
                    Receive our weekly newsletter with updates and tips.
                  </FieldDescription>
                </div>
              </FieldLabel>
            </Field>

            <Field orientation="horizontal">
              <FieldLabel htmlFor="updates" className="flex items-center gap-2">
                <Checkbox id="updates" />
                <div>
                  <div className="font-medium">Product Updates</div>
                  <FieldDescription>
                    Get notified when we ship new features.
                  </FieldDescription>
                </div>
              </FieldLabel>
            </Field>
          </FieldGroup>
        </FieldSet>
      </div>
    </div>
  );
}

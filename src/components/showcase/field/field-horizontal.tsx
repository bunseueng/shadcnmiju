"use client";

import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";

export default function FieldHorizontal() {
  return (
    <div className="flex items-center justify-center p-4 sm:p-6 md:p-8 w-full">
      <div className="w-full max-w-2xl space-y-4 sm:space-y-6 px-2 sm:px-0">
        <Field
          orientation="horizontal"
          className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 items-center"
        >
          <FieldLabel
            htmlFor="name"
            className="text-sm sm:text-base sm:text-right"
          >
            Full Name
          </FieldLabel>
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            className="text-sm sm:text-base"
          />
        </Field>

        <Field
          orientation="horizontal"
          className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 items-center"
        >
          <FieldLabel
            htmlFor="email"
            className="text-sm sm:text-base sm:text-right"
          >
            Email Address
          </FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            className="text-sm sm:text-base"
          />
        </Field>

        <Field
          orientation="horizontal"
          className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 items-start"
        >
          <FieldLabel
            htmlFor="notifications"
            className="text-sm sm:text-base text-left sm:pt-1"
          >
            Email Notifications
          </FieldLabel>
          <div className="flex flex-col gap-2">
            <Switch id="notifications" />
            <FieldDescription className="text-xs sm:text-sm">
              Receive email updates about your account activity.
            </FieldDescription>
          </div>
        </Field>

        <Field
          orientation="horizontal"
          className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 items-start"
        >
          <FieldLabel
            htmlFor="marketing"
            className="text-sm sm:text-base text-left sm:pt-1"
          >
            Marketing Emails
          </FieldLabel>
          <div className="flex flex-col gap-2">
            <Switch id="marketing" />
            <FieldDescription className="text-xs sm:text-sm">
              Receive promotional emails and product updates.
            </FieldDescription>
          </div>
        </Field>
      </div>
    </div>
  );
}

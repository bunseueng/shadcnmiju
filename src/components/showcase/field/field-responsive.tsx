"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

export default function FieldResponsive() {
  return (
    <div className="flex items-center justify-center p-4 sm:p-6 md:p-8 w-full">
      <div className="w-full max-w-2xl px-2 sm:px-0">
        <FieldGroup className="space-y-3 sm:space-y-6">
          <Field
            orientation="responsive"
            className="flex flex-row flex-wrap md:grid md:grid-cols-[200px_1fr] gap-x-2 gap-y-0.5 md:gap-4 items-start"
          >
            <FieldLabel
              htmlFor="company"
              className="text-sm sm:text-base md:text-right md:pt-2 w-fit"
            >
              Company Name
            </FieldLabel>
            <div className="flex flex-col gap-1 flex-1">
              <Input
                id="company"
                type="text"
                placeholder="Acme Inc"
                className="text-sm sm:text-base"
              />
              <FieldDescription className="text-xs sm:text-sm">
                Your organization or business name.
              </FieldDescription>
            </div>
          </Field>

          <Field
            orientation="responsive"
            className="flex flex-row flex-wrap md:grid md:grid-cols-[200px_1fr] gap-x-2 gap-y-0.5 md:gap-4 items-start"
          >
            <FieldLabel
              htmlFor="website"
              className="text-sm sm:text-base md:text-right md:pt-2 w-fit"
            >
              Website
            </FieldLabel>
            <div className="flex flex-col gap-1 flex-1">
              <Input
                id="website"
                type="url"
                placeholder="https://example.com"
                className="text-sm sm:text-base"
              />
              <FieldDescription className="text-xs sm:text-sm">
                Your company or personal website URL.
              </FieldDescription>
            </div>
          </Field>

          <Field
            orientation="responsive"
            className="flex flex-row flex-wrap md:grid md:grid-cols-[200px_1fr] gap-x-2 gap-y-0.5 md:gap-4 items-start"
          >
            <FieldLabel
              htmlFor="employees"
              className="text-sm sm:text-base md:text-right md:pt-2 w-fit"
            >
              Company Size
            </FieldLabel>
            <div className="flex flex-col gap-1 flex-1">
              <NativeSelect id="employees" className="text-sm sm:text-base">
                <NativeSelectOption value="">Select size</NativeSelectOption>
                <NativeSelectOption value="1-10">
                  1-10 employees
                </NativeSelectOption>
                <NativeSelectOption value="11-50">
                  11-50 employees
                </NativeSelectOption>
                <NativeSelectOption value="51-200">
                  51-200 employees
                </NativeSelectOption>
                <NativeSelectOption value="201+">
                  201+ employees
                </NativeSelectOption>
              </NativeSelect>
              <FieldDescription className="text-xs sm:text-sm">
                Number of people in your organization.
              </FieldDescription>
            </div>
          </Field>

          <Field
            orientation="responsive"
            className="flex flex-row flex-wrap md:grid md:grid-cols-[200px_1fr] gap-x-2 gap-y-0.5 md:gap-4 items-start"
          >
            <FieldLabel
              htmlFor="description"
              className="text-sm sm:text-base md:text-right md:pt-2 w-fit"
            >
              Description
            </FieldLabel>
            <div className="flex flex-col gap-1 flex-1">
              <Textarea
                id="description"
                placeholder="Tell us about your company..."
                rows={4}
                className="text-sm sm:text-base resize-none whitespace-normal wrap-break-word"
              />
              <FieldDescription className="text-xs sm:text-sm">
                A brief description of what your company does.
              </FieldDescription>
            </div>
          </Field>

          <div className="flex justify-end md:col-start-2 pt-2">
            <Button className="text-sm sm:text-base w-full sm:w-auto">
              Save Changes
            </Button>
          </div>
        </FieldGroup>
      </div>
    </div>
  );
}

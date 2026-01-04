"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";

export default function NativeSelectValidation() {
  const [priority, setPriority] = useState("");
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!priority) {
      newErrors.priority = "Please select a priority level";
    }

    if (!category) {
      newErrors.category = "Please select a category";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Form submitted successfully
      setErrors({});
    }
  };

  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="priority" className="text-sm font-medium">
              Priority <span className="text-destructive">*</span>
            </label>
            <NativeSelect
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              aria-invalid={!!errors.priority}
            >
              <NativeSelectOption value="">Select priority</NativeSelectOption>
              <NativeSelectOption value="low">Low Priority</NativeSelectOption>
              <NativeSelectOption value="medium">Medium Priority</NativeSelectOption>
              <NativeSelectOption value="high">High Priority</NativeSelectOption>
              <NativeSelectOption value="urgent">Urgent</NativeSelectOption>
            </NativeSelect>
            {errors.priority ? (
              <div className="flex items-center gap-2 text-sm text-destructive">
                <AlertCircle className="h-4 w-4" />
                <span>{errors.priority}</span>
              </div>
            ) : priority ? (
              <div className="flex items-center gap-2 text-sm text-green-600">
                <CheckCircle2 className="h-4 w-4" />
                <span>Priority selected</span>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Choose the priority level for this task
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="category" className="text-sm font-medium">
              Category <span className="text-destructive">*</span>
            </label>
            <NativeSelect
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              aria-invalid={!!errors.category}
            >
              <NativeSelectOption value="">Select category</NativeSelectOption>
              <NativeSelectOption value="bug">Bug Fix</NativeSelectOption>
              <NativeSelectOption value="feature">Feature Request</NativeSelectOption>
              <NativeSelectOption value="documentation">Documentation</NativeSelectOption>
              <NativeSelectOption value="refactor">Refactoring</NativeSelectOption>
            </NativeSelect>
            {errors.category ? (
              <div className="flex items-center gap-2 text-sm text-destructive">
                <AlertCircle className="h-4 w-4" />
                <span>{errors.category}</span>
              </div>
            ) : category ? (
              <div className="flex items-center gap-2 text-sm text-green-600">
                <CheckCircle2 className="h-4 w-4" />
                <span>Category selected</span>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Choose the task category
              </p>
            )}
          </div>

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

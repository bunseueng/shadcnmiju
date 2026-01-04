"use client";

import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select";

export default function NativeSelectGrouped() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2">
          <label htmlFor="framework" className="text-sm font-medium">
            Framework
          </label>
          <NativeSelect id="framework">
            <NativeSelectOption value="">Select a framework</NativeSelectOption>
            <NativeSelectOptGroup label="Frontend">
              <NativeSelectOption value="react">React</NativeSelectOption>
              <NativeSelectOption value="vue">Vue</NativeSelectOption>
              <NativeSelectOption value="angular">Angular</NativeSelectOption>
              <NativeSelectOption value="svelte">Svelte</NativeSelectOption>
            </NativeSelectOptGroup>
            <NativeSelectOptGroup label="Backend">
              <NativeSelectOption value="express">Express</NativeSelectOption>
              <NativeSelectOption value="fastapi">FastAPI</NativeSelectOption>
              <NativeSelectOption value="django">Django</NativeSelectOption>
              <NativeSelectOption value="rails">Rails</NativeSelectOption>
            </NativeSelectOptGroup>
          </NativeSelect>
        </div>

        <div className="space-y-2">
          <label htmlFor="database" className="text-sm font-medium">
            Database
          </label>
          <NativeSelect id="database">
            <NativeSelectOption value="">Select a database</NativeSelectOption>
            <NativeSelectOptGroup label="SQL Databases">
              <NativeSelectOption value="postgresql">PostgreSQL</NativeSelectOption>
              <NativeSelectOption value="mysql">MySQL</NativeSelectOption>
              <NativeSelectOption value="sqlite">SQLite</NativeSelectOption>
            </NativeSelectOptGroup>
            <NativeSelectOptGroup label="NoSQL Databases">
              <NativeSelectOption value="mongodb">MongoDB</NativeSelectOption>
              <NativeSelectOption value="redis">Redis</NativeSelectOption>
              <NativeSelectOption value="cassandra">Cassandra</NativeSelectOption>
            </NativeSelectOptGroup>
          </NativeSelect>
        </div>
      </div>
    </div>
  );
}

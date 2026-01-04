"use client";

import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const TextareaWithCounter = () => {
  const [text, setText] = useState("");
  const maxLength = 280;

  return (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="bio">Bio</Label>
      <Textarea
        placeholder="Tell us about yourself..."
        id="bio"
        value={text}
        onChange={(e) => setText(e.target.value.slice(0, maxLength))}
        className="min-h-[100px]"
      />
      <div className="flex justify-end">
        <span
          className={`text-sm ${
            text.length >= maxLength
              ? "text-red-500"
              : text.length >= maxLength * 0.8
              ? "text-yellow-500"
              : "text-muted-foreground"
          }`}
        >
          {text.length}/{maxLength}
        </span>
      </div>
    </div>
  );
};

export default TextareaWithCounter;

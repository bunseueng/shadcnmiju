"use client";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

import { Bold, Italic, Underline, Strikethrough } from "lucide-react";

import { useState } from "react";

const TextFormattingButtonGroup = () => {
  const [formats, setFormats] = useState<string[]>([]);

  const toggleFormat = (format: string) => {
    setFormats((prev) =>
      prev.includes(format)
        ? prev.filter((f) => f !== format)
        : [...prev, format]
    );
  };

  return (
    <ButtonGroup>
      <Button
        variant={formats.includes("bold") ? "default" : "outline"}
        size="sm"
        className="rounded-r-none border-r-0"
        onClick={() => toggleFormat("bold")}
      >
        <Bold className="h-4 w-4" />
      </Button>
      <Button
        variant={formats.includes("italic") ? "default" : "outline"}
        size="sm"
        className="rounded-none border-r-0"
        onClick={() => toggleFormat("italic")}
      >
        <Italic className="h-4 w-4" />
      </Button>
      <Button
        variant={formats.includes("underline") ? "default" : "outline"}
        size="sm"
        className="rounded-none border-r-0"
        onClick={() => toggleFormat("underline")}
      >
        <Underline className="h-4 w-4" />
      </Button>
      <Button
        variant={formats.includes("strikethrough") ? "default" : "outline"}
        size="sm"
        className="rounded-l-none"
        onClick={() => toggleFormat("strikethrough")}
      >
        <Strikethrough className="h-4 w-4" />
      </Button>
    </ButtonGroup>
  );
};

export default TextFormattingButtonGroup;

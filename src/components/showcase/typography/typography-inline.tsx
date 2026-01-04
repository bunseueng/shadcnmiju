"use client";

export default function TypographyInline() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-3xl space-y-6">
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Inline Code
          </h3>
          <p className="leading-7">
            Install the package by running{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              npm install
            </code>{" "}
            in your terminal.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Text Formatting
          </h3>
          <p className="leading-7">
            This text contains <strong>bold words</strong>,{" "}
            <em>italic words</em>, <u>underlined text</u>, and{" "}
            <s>strikethrough text</s>.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Lead Text
          </h3>
          <p className="text-xl text-muted-foreground">
            A modal dialog that interrupts the user with important content and
            expects a response.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Blockquote
          </h3>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            "After all," he said, "everyone enjoys a good joke, so it's only fair
            that they should pay for the privilege."
          </blockquote>
        </div>

        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Link
          </h3>
          <p className="leading-7">
            Visit our{" "}
            <a
              href="#"
              className="font-medium text-primary underline underline-offset-4"
            >
              documentation
            </a>{" "}
            for more information.
          </p>
        </div>
      </div>
    </div>
  );
}

"use client";

export default function TypographyHeadings() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-3xl space-y-6">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Heading 1
        </h1>
        <p className="text-muted-foreground">
          The largest heading, typically used for page titles.
        </p>

        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Heading 2
        </h2>
        <p className="text-muted-foreground">
          Used for major section headings with a subtle border.
        </p>

        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Heading 3
        </h3>
        <p className="text-muted-foreground">
          Used for subsection headings.
        </p>

        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Heading 4
        </h4>
        <p className="text-muted-foreground">
          Smaller section headings.
        </p>
      </div>
    </div>
  );
}

"use client";

export default function TypographyParagraphs() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-3xl space-y-6">
        <div className="space-y-2">
          <h3 className="font-semibold">Regular Paragraph</h3>
          <p className="leading-7">
            The king, seeing how much happier his subjects were, realized the
            error of his ways and repealed the joke tax. The people rejoiced and
            lived happily ever after.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold">Large Paragraph</h3>
          <p className="text-xl text-muted-foreground">
            A modal dialog that interrupts the user with important content and
            expects a response.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold">Small Paragraph</h3>
          <p className="text-sm text-muted-foreground">
            This is a smaller paragraph, often used for secondary information or
            captions.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold">Muted Paragraph</h3>
          <p className="text-muted-foreground">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>
        </div>
      </div>
    </div>
  );
}

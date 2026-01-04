"use client";

export default function TypographySemantic() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-3xl space-y-8">
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Article Layout
          </h3>
          <article className="space-y-4">
            <header>
              <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
                Understanding Typography
              </h1>
              <p className="text-sm text-muted-foreground">
                Published on January 1, 2024
              </p>
            </header>
            <p className="leading-7">
              Typography is the art and technique of arranging type to make
              written language legible, readable, and appealing when displayed.
            </p>
            <footer className="border-t pt-4">
              <p className="text-sm text-muted-foreground">
                Author: John Doe
              </p>
            </footer>
          </article>
        </div>

        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Figure with Caption
          </h3>
          <figure className="space-y-2">
            <div className="rounded-md border bg-muted p-8 text-center">
              <p className="text-muted-foreground">[Image placeholder]</p>
            </div>
            <figcaption className="text-sm text-muted-foreground">
              Figure 1: An example of proper spacing and alignment
            </figcaption>
          </figure>
        </div>

        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Definition List
          </h3>
          <dl className="space-y-3">
            <div>
              <dt className="font-semibold">Typography</dt>
              <dd className="text-muted-foreground ml-4">
                The style and appearance of printed matter
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Kerning</dt>
              <dd className="text-muted-foreground ml-4">
                The spacing between individual letters or characters
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Leading</dt>
              <dd className="text-muted-foreground ml-4">
                The vertical distance between lines of text
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

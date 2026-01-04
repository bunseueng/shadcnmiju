"use client";

export default function TypographyLists() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-3xl space-y-8">
        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Unordered List
          </h3>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>First item in the list</li>
            <li>Second item in the list</li>
            <li>Third item in the list</li>
            <li>Fourth item in the list</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Ordered List
          </h3>
          <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
            <li>Download and install the package</li>
            <li>Configure your environment variables</li>
            <li>Run the setup command</li>
            <li>Start the development server</li>
          </ol>
        </div>

        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Nested List
          </h3>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              Frontend Development
              <ul className="ml-6 list-circle [&>li]:mt-1">
                <li>React</li>
                <li>Vue</li>
                <li>Angular</li>
              </ul>
            </li>
            <li>
              Backend Development
              <ul className="ml-6 list-circle [&>li]:mt-1">
                <li>Node.js</li>
                <li>Python</li>
                <li>Ruby</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

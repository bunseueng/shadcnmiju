import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function CodeDocsAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full max-w-2xl text-start"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <code className="text-sm">Button Component</code>
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Import the Button component:
            </p>
            <pre className="bg-muted p-3 rounded-md overflow-x-auto">
              <code className="text-xs">
                {`import { Button } from "@/components/ui/button"`}
              </code>
            </pre>
            <p className="text-sm text-muted-foreground">Usage example:</p>
            <pre className="bg-muted p-3 rounded-md overflow-x-auto">
              <code className="text-xs">
                {`<Button variant="default">Click me</Button>`}
              </code>
            </pre>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <code className="text-sm">Card Component</code>
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Import Card components:
            </p>
            <pre className="bg-muted p-3 rounded-md overflow-x-auto">
              <code className="text-xs">
                {`import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"`}
              </code>
            </pre>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          <code className="text-sm">Input Component</code>
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Import and use Input:
            </p>
            <pre className="bg-muted p-3 rounded-md overflow-x-auto">
              <code className="text-xs">
                {`import { Input } from "@/components/ui/input"

<Input type="email" placeholder="Email" />`}
              </code>
            </pre>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

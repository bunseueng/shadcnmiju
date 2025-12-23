import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function MultiSectionAccordion() {
  return (
    <Accordion type="multiple" className="w-full max-w-2xl text-start">
      <AccordionItem value="item-1">
        <AccordionTrigger>Getting Started</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <p>Install the required dependencies:</p>
            <code className="block bg-muted p-2 rounded">
              npm install shadcn-ui
            </code>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Components</AccordionTrigger>
        <AccordionContent>
          Browse our extensive library of 100+ production-ready components.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Theming</AccordionTrigger>
        <AccordionContent>
          Customize colors, fonts, and more with CSS variables.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

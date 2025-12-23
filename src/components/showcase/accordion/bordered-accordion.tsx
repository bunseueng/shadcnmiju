import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function BorderedAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full max-w-2xl space-y-3 text-start"
    >
      <AccordionItem
        value="item-1"
        className="border rounded-lg px-4 shadow-sm"
      >
        <AccordionTrigger className="hover:no-underline">
          What is shadcn/ui?
        </AccordionTrigger>
        <AccordionContent>
          A collection of re-usable components built using Radix UI and Tailwind
          CSS.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-2"
        className="border rounded-lg px-4 shadow-sm"
      >
        <AccordionTrigger className="hover:no-underline">
          How do I get started?
        </AccordionTrigger>
        <AccordionContent>
          Install the CLI and add components to your project with a single
          command.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-3"
        className="border rounded-lg px-4 shadow-sm"
      >
        <AccordionTrigger className="hover:no-underline">
          Is it production ready?
        </AccordionTrigger>
        <AccordionContent>
          Yes! All components are tested and used in production applications.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

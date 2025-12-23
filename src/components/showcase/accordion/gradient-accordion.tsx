import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function GradientAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full max-w-2xl text-start"
    >
      <AccordionItem
        value="item-1"
        className="border-l-4 border-l-blue-500 pl-4 mb-3 bg-gradient-to-r from-blue-50/50 to-transparent dark:from-blue-950/20 rounded-r"
      >
        <AccordionTrigger className="hover:no-underline">
          <span className="font-semibold">Features</span>
        </AccordionTrigger>
        <AccordionContent>
          Accessible, customizable, and fully typed components for modern web
          applications.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-2"
        className="border-l-4 border-l-purple-500 pl-4 mb-3 bg-gradient-to-r from-purple-50/50 to-transparent dark:from-purple-950/20 rounded-r"
      >
        <AccordionTrigger className="hover:no-underline">
          <span className="font-semibold">Documentation</span>
        </AccordionTrigger>
        <AccordionContent>
          Comprehensive guides and examples to help you get started quickly.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-3"
        className="border-l-4 border-l-green-500 pl-4 bg-gradient-to-r from-green-50/50 to-transparent dark:from-green-950/20 rounded-r"
      >
        <AccordionTrigger className="hover:no-underline">
          <span className="font-semibold">Community</span>
        </AccordionTrigger>
        <AccordionContent>
          Join thousands of developers building amazing products with our
          components.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

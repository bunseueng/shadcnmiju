import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full max-w-2xl text-start"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern and is fully keyboard
          navigable.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it free to use?</AccordionTrigger>
        <AccordionContent>
          Yes. All components are free and open-source under the MIT license.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can I use it in my project?</AccordionTrigger>
        <AccordionContent>
          Absolutely! You can copy and paste any component into your project.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

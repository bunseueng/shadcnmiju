import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Package, Palette, Zap } from "lucide-react";

export default function IconAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full max-w-2xl text-start"
    >
      <AccordionItem value="item-1" className="border-b">
        <AccordionTrigger className="hover:no-underline">
          <div className="flex items-center gap-3">
            <Package className="h-5 w-5 text-primary" />
            <span>Installation</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pl-8">
          Quick and easy installation with npm, yarn, or pnpm. Get started in
          minutes.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-b">
        <AccordionTrigger className="hover:no-underline">
          <div className="flex items-center gap-3">
            <Palette className="h-5 w-5 text-primary" />
            <span>Customization</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pl-8">
          Fully customizable with CSS variables and Tailwind CSS classes.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="hover:no-underline">
          <div className="flex items-center gap-3">
            <Zap className="h-5 w-5 text-primary" />
            <span>Performance</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pl-8">
          Built for speed with minimal bundle size and optimized rendering.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

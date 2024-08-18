import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "./styles.css";
import { cva } from "class-variance-authority";

export const AccordionFAQ = () => (
  <div className="block w-3/4">
    <Accordion.Root
      className={`AccordionRoot ${cn("w-full")}`}
      type="single"
      defaultValue="item-1"
      collapsible
    >
      <Accordion.Item className="AccordionItem" value="faq-1">
        <AccordionTrigger>Who can attend the meetup?</AccordionTrigger>
        <AccordionContent>
          Our meetup is open to everyone that wants to learn and engage on the
          javascript community in Vancouver! Whether you’re a beginner, a
          seasoned developer, or just curious about JavaScript, you’re welcome
          to join.
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className="AccordionItem" value="faq-2">
        <AccordionTrigger>
          When and where does the meetup take place?
        </AccordionTrigger>
        <AccordionContent>
          {/* Explain a bit how we get sponsor by places that provide a location bla bla bla */}
          We meet on the specific (DATE-HERE) at (EVENT-PLACE). Check our
          website or social channels for the latest updates.
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className="AccordionItem" value="faq-3">
        <AccordionTrigger>Are there refreshments provided?</AccordionTrigger>
        <Accordion.Content className="AccordionContent">
          <div className="AccordionContentText">
            Yes, we usually offer refreshments and pizza that are provided by
            our sponsors and the ticket fee.
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  </div>
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header
      className={`AccordionHeader ${cn("text-2xl font-semibold leading-none")}`}
    >
      <Accordion.Trigger
        className={cn("AccordionTrigger", className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

AccordionTrigger.displayName = Accordion.Trigger.displayName;

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={cn("AccordionContent", className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);

AccordionContent.displayName = Accordion.Content.displayName;

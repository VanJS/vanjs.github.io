import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "./styles.css";

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
        <AccordionContent className="bg-white text-left">
          Our meetup welcomes everyone interested in the Vancouver JavaScript
          community! Whether you are a complete beginner, an experienced
          developer, or simply curious about JavaScript, we invite you to join
          us. We welcome humans from all backgrounds, genders, ages and
          experiences—come be part of our community!
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className="AccordionItem" value="faq-2">
        <AccordionTrigger>
          When and where does the meetup take place?
        </AccordionTrigger>
        <AccordionContent className="bg-white text-left">
          We usually meet once a month, and occasionally have smaller related
          events running 1-2 times a month. The location varies, largely
          depending on our ability to secure a venue. We typically announce the
          details a month in advance.
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className="AccordionItem" value="faq-3">
        <AccordionTrigger>
          You have sponsors but charge for the ticket?
        </AccordionTrigger>
        <AccordionContent className="bg-white text-left">
          Our entrance fee is mostly symbolic, as we ran VanJS free of charge
          for the longest time and found that 40% of the RSVPs were no-shows,
          leaving us with tons of food and drinks that went to waste. The meetup
          organizers don&apos;t take profit from the event, everything is
          reinvested into the meetup (prizes, better venues, parties, etc).
          <br />
          <br />
          If you want to attend the meetup but have no means to contribute at
          this time, reach out to one of our organizers on LinkedIn and they
          will be happy to assist on a case-by-case basis.
        </AccordionContent>
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

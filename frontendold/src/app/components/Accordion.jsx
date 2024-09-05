"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function AccordionComponent() {
  return (
    <Accordion>
      <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
        Test
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
        Test2
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
        Test3
      </AccordionItem>
    </Accordion>
  );
}

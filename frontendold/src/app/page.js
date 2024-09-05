import { Button } from "@nextui-org/react";
import React from "react";
import AccordionComponent from "./components/Accordion";

export default function Home() {
  return (
    <div>
      <Button color="primary">Click me</Button>
      <AccordionComponent />
    </div>
  );
}

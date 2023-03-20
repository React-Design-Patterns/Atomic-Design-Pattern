import { storiesOf } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import Element from ".";

storiesOf("Element", module)
  .add("Hydrogen", () => (
    <BrowserRouter>
      <Element atomicWeight={1.008} atomicNumber={1} fullName="Hydrogen">
        H
      </Element>
    </BrowserRouter>
  ))
  .add("Helium", () => (
    <BrowserRouter>
      <Element atomicWeight={4.003} atomicNumber={2} fullName="Helium">
        He
      </Element>
    </BrowserRouter>
  ))
  .add("Rutherfordium", () => (
    <BrowserRouter>
      <Element atomicWeight={267} atomicNumber={104} fullName="Rutherfordium">
        Rf
      </Element>
    </BrowserRouter>
  ))
  .add("Praseodymium", () => (
    <BrowserRouter>
      <Element atomicWeight={140.908} atomicNumber={59} fullName="Praseodymium">
        Pr
      </Element>
    </BrowserRouter>
  ))
  .add("HydrogenCard", () => (
    <BrowserRouter>
      <Element isCard atomicWeight={1.008} atomicNumber={1} fullName="Hydrogen">
        H
      </Element>
    </BrowserRouter>
  ))
  .add("HeliumCard", () => (
    <BrowserRouter>
      <Element isCard atomicWeight={4.003} atomicNumber={2} fullName="Helium">
        He
      </Element>
    </BrowserRouter>
  ))
  .add("RutherfordiumCard", () => (
    <BrowserRouter>
      <Element
        isCard
        atomicWeight={267}
        atomicNumber={104}
        fullName="Rutherfordium"
      >
        Rf
      </Element>
    </BrowserRouter>
  ))
  .add("PraseodymiumCard", () => (
    <BrowserRouter>
      <Element
        isCard
        atomicWeight={140.908}
        atomicNumber={59}
        fullName="Praseodymium"
      >
        Pr
      </Element>
    </BrowserRouter>
  ));

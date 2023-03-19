import { storiesOf } from "@storybook/react";
import Element from ".";

storiesOf("Element", module)
  .add("Hydrogen", () => (
    <Element atomicWeight={1.008} atomicNumber={1} fullName="Hydrogen">
      H
    </Element>
  ))
  .add("Helium", () => (
    <Element atomicWeight={4.003} atomicNumber={2} fullName="Helium">
      He
    </Element>
  ))
  .add("Rutherfordium", () => (
    <Element atomicWeight={267} atomicNumber={104} fullName="Rutherfordium">
      Rf
    </Element>
  ))
  .add("Praseodymium", () => (
    <Element atomicWeight={140.908} atomicNumber={59} fullName="Praseodymium">
      Pr
    </Element>
  ))
  .add("HydrogenCard", () => (
    <Element isCard atomicWeight={1.008} atomicNumber={1} fullName="Hydrogen">
      H
    </Element>
  ))
  .add("HeliumCard", () => (
    <Element isCard atomicWeight={4.003} atomicNumber={2} fullName="Helium">
      He
    </Element>
  ))
  .add("RutherfordiumCard", () => (
    <Element
      isCard
      atomicWeight={267}
      atomicNumber={104}
      fullName="Rutherfordium"
    >
      Rf
    </Element>
  ))
  .add("PraseodymiumCard", () => (
    <Element
      isCard
      atomicWeight={140.908}
      atomicNumber={59}
      fullName="Praseodymium"
    >
      Pr
    </Element>
  ));

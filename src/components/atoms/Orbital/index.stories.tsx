import { storiesOf } from "@storybook/react";
import Orbital from ".";

storiesOf("Orbital", module)
  .add("default", () => <Orbital size={"1stOrbit"} />)
  .add("size2", () => <Orbital size={"2ndOrbit"} />)
  .add("size3", () => <Orbital size={"3rdOrbit"} />)
  .add("size4", () => <Orbital size={"4thOrbit"} />)
  .add("size5", () => <Orbital size={"5thOrbit"} />)
  .add("size6", () => <Orbital size={"6thOrbit"} />)
  .add("size7", () => <Orbital size={"7thOrbit"} />);

import { storiesOf } from "@storybook/react";
import Orbital from ".";

storiesOf("Orbital", module)
  .add("default", () => <Orbital size={1} />)
  .add("size2", () => <Orbital size={2} />)
  .add("size3", () => <Orbital size={3} />)
  .add("size4", () => <Orbital size={4} />)
  .add("size5", () => <Orbital size={5} />)
  .add("size6", () => <Orbital size={6} />)
  .add("size7", () => <Orbital size={7} />);

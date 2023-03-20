import { storiesOf } from "@storybook/react";
import Orbital from ".";

storiesOf("Orbital", module)
  .add("default", () => <Orbital electrons={3} size={1} />)
  .add("size2", () => <Orbital electrons={5} size={2} />)
  .add("size3", () => <Orbital electrons={5} size={3} />)
  .add("size4", () => <Orbital electrons={5} size={4} />)
  .add("size5", () => <Orbital electrons={5} size={5} />)
  .add("size6", () => <Orbital electrons={5} size={6} />)
  .add("size7", () => <Orbital electrons={5} size={7} />)
  .add("size8", () => <Orbital electrons={5} size={8} />);

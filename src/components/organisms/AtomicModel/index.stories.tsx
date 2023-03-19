import { storiesOf } from "@storybook/react";
import AtomicModel from ".";

storiesOf("AtomicModel", module)
  .add("H", () => <AtomicModel symbol="H" level={1} />)
  .add("He", () => <AtomicModel symbol="He" level={1} />)
  .add("Li", () => <AtomicModel symbol="Li" level={2} />);

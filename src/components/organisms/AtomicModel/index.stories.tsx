import { storiesOf } from "@storybook/react";
import AtomicModel from ".";

storiesOf("AtomicModel", module)
  .add("H", () => <AtomicModel symbol="H" period={1} />)
  .add("He", () => <AtomicModel symbol="He" period={1} />)
  .add("Li", () => <AtomicModel symbol="Li" period={2} />);

import { storiesOf } from "@storybook/react";
import AtomicModel from ".";

storiesOf("AtomicModel", module)
  .add("H", () => <AtomicModel shells={[1]} symbol="H" period={1} />)
  .add("He", () => <AtomicModel shells={[2]} symbol="He" period={1} />)
  .add("Li", () => <AtomicModel shells={[2, 1]} symbol="Li" period={2} />);

import { storiesOf } from "@storybook/react";
import AtomicPreodicTable from ".";
import PreodicTableData from "../../../data/periodic-table.json";

storiesOf("AtomicPreodicTable", module).add("default", () => (
  <AtomicPreodicTable periodicTableData={PreodicTableData.elements} />
));

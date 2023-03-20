import { storiesOf } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import AtomicPreodicTable from ".";
import PreodicTableData from "../../../data/periodic-table.json";

storiesOf("AtomicPreodicTable", module).add("default", () => (
  <BrowserRouter>
    <AtomicPreodicTable periodicTableData={PreodicTableData.elements} />
  </BrowserRouter>
));

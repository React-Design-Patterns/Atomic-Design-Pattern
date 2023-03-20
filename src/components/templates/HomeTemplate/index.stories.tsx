import { storiesOf } from "@storybook/react";
import HomeTemplate from ".";
import AtomicPreodicTable from "../../organisms/AtomicPeriodicTable";
import Header from "../../organisms/Header";
import PreodicTableData from "../../../data/periodic-table.json";
import { BrowserRouter } from "react-router-dom";

storiesOf("HomeTemplate", module).add("default", () => (
  <BrowserRouter>
    <HomeTemplate
      header={<Header>Atomic Periodic Table</Header>}
      section={
        <AtomicPreodicTable periodicTableData={PreodicTableData.elements} />
      }
    />
  </BrowserRouter>
));

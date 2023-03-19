import { storiesOf } from "@storybook/react";
import HomeTemplate from ".";
import AtomicPreodicTable from "../../organisms/AtomicPeriodicTable";
import Header from "../../organisms/Header";
import PreodicTableData from "../../../data/periodic-table.json";

storiesOf("HomeTemplate", module).add("default", () => (
  <HomeTemplate
    header={<Header>Atomic Periodic Table</Header>}
    section={
      <AtomicPreodicTable periodicTableData={PreodicTableData.elements} />
    }
  />
));

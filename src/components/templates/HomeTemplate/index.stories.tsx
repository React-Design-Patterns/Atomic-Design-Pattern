import { storiesOf } from "@storybook/react";
import HomeTemplate from ".";
import AtomicPreodicTable from "../../organisms/AtomicPreodicTable";
import Header from "../../organisms/Header";
import PreodicTableData from "../../../data/periodic-table.json";

storiesOf("HomeTemplate", module).add("default", () => (
  <HomeTemplate
    header={<Header />}
    section={
      <AtomicPreodicTable periodicTableData={PreodicTableData.elements} />
    }
  />
));

import AtomicPeriodicTable from "../../organisms/AtomicPeriodicTable";
import Header from "../../organisms/Header";
import HomeTemplate from "../../templates/HomeTemplate";
import PreodicTableData from "../../../data/periodic-table.json";

function HomePage() {
  return (
    <HomeTemplate
      header={<Header>Atomic Periodic Table</Header>}
      section={
        <AtomicPeriodicTable periodicTableData={PreodicTableData.elements} />
      }
    />
  );
}

export default HomePage;

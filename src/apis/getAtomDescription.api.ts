import axios from "axios";
import PreodicTableData from "../data/periodic-table.json";

export async function getAtomDescription(id: number) {
  if (id < 1 || id > 119) return "";
  const name = PreodicTableData.elements[id - 1].name;

  const { data } = await axios.get("http://127.0.0.1:5000?name=" + name);

  return typeof data === "string" ? data : "";
}

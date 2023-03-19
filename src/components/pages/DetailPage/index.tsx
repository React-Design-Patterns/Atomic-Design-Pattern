import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import Back from "../../atoms/Back";
import Description from "../../molecules/Description";
import Element from "../../molecules/Element";
import AtomicModel from "../../organisms/AtomicModel";
import Header from "../../organisms/Header";
import DetailTemplate from "../../templates/DetailTemplate";
import PreodicTableData from "../../../data/periodic-table.json";
import { ElementsEntity } from "../../../types/ElementsEntity.type";
import { getAtomDescription } from "../../../apis/getAtomDescription.api";

function DetailPage() {
  const id = +(useParams().id ?? 1);

  const [atomInfo, setAtomInfo] = useState<ElementsEntity | null>(null);

  const { data: description, isLoading } = useQuery(
    "description",
    async () => await getAtomDescription(id),
    {
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (!id || typeof id !== "number") return;
    setAtomInfo(PreodicTableData.elements[id - 1]);
  }, [id]);

  return atomInfo ? (
    <DetailTemplate
      header={<Header>Hydrogen</Header>}
      back={<Back />}
      element={
        <Element
          atomicNumber={id}
          atomicWeight={atomInfo.atomic_mass}
          fullName={atomInfo.name}
          isCard
        >
          H
        </Element>
      }
      atomicModel={
        <AtomicModel symbol={atomInfo.symbol} period={atomInfo.period} />
      }
      description={
        <Description>{isLoading ? "" : description ?? ""}</Description>
      }
    />
  ) : null;
}

export default DetailPage;

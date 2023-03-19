import { useEffect, useState } from "react";
import styled from "styled-components";
import EmptyElement from "../../atoms/EmptyElement";
import Element from "../../molecules/Element";

const Row = styled.div`
  width: inherit;
  display: flex;
  gap: 4px;
`;

const TopTable = styled.div`
  width: inherit;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const BottomTable = styled.div`
  width: inherit;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Wrap = styled.div`
  width: 1364px;
  height: 708px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

type ElementsEntity = {
  name: string;
  appearance?: string | null;
  atomic_mass: number;
  boil?: number | null;
  category: string;
  density?: number | null;
  discovered_by?: string | null;
  melt?: number | null;
  molar_heat?: number | null;
  named_by?: string | null;
  number: number;
  period: number;
  group: number;
  phase: string;
  source: string;
  bohr_model_image?: string | null;
  bohr_model_3d?: string | null;
  spectral_img?: string | null;
  summary: string;
  symbol: string;
  xpos: number;
  ypos: number;
  wxpos: number;
  wypos: number;
  shells?: number[] | null;
  electron_configuration: string;
  electron_configuration_semantic: string;
  electron_affinity?: number | null;
  electronegativity_pauling?: number | null;
  ionization_energies?: (number | null)[] | null;
  "cpk-hex"?: string | null;
  image: Image;
  block: string;
};

type Image = {
  title: string;
  url: string;
  attribution: string;
};

type PropTypes = {
  periodicTableData: ElementsEntity[];
};

type AtomObj = {
  atomic_mass: number;
  number: number;
  name: string;
  symbol: string;
};

function AtomicPreodicTable({ periodicTableData }: PropTypes) {
  const [atomInfos, setAtomInfos] = useState<ElementsEntity[]>([]);
  useEffect(() => {
    setAtomInfos(periodicTableData);
  }, [periodicTableData]);

  const getElement = ({ from, to }: { from: number; to?: number }) => {
    return atomInfos.slice(from - 1, to ?? from).map((atomObj: AtomObj) => (
      <Element
        atomicWeight={atomObj.atomic_mass}
        atomicNumber={atomObj.number}
        fullName={atomObj.name}
      >
        {atomObj.symbol}
      </Element>
    ));
  };

  const getEmptyElement = (number: number) => {
    return new Array(number).fill(0).map(() => <EmptyElement />);
  };

  return (
    <Wrap>
      <TopTable>
        <Row>
          {getElement({ from: 1 })}
          {getEmptyElement(16)}
          {getElement({ from: 2 })}
        </Row>
        <Row>
          {getElement({ from: 3, to: 4 })}
          {getEmptyElement(10)}
          {getElement({ from: 5, to: 10 })}
        </Row>
        <Row>
          {getElement({ from: 11, to: 12 })}
          {getEmptyElement(10)}
          {getElement({ from: 13, to: 18 })}
        </Row>
        <Row>{getElement({ from: 19, to: 36 })}</Row>
        <Row>{getElement({ from: 37, to: 54 })}</Row>
        <Row>
          {getElement({ from: 55, to: 56 })}
          {getEmptyElement(1)}
          {getElement({ from: 72, to: 86 })}
        </Row>
        <Row>
          {getElement({ from: 87, to: 88 })}
          {getEmptyElement(1)}
          {getElement({ from: 104, to: 118 })}
        </Row>
      </TopTable>
      <BottomTable>
        <Row>
          {getEmptyElement(2)}
          {getElement({ from: 57, to: 71 })}
        </Row>
        <Row>
          {getEmptyElement(2)}
          {getElement({ from: 89, to: 103 })}
        </Row>
      </BottomTable>
    </Wrap>
  );
}

export default AtomicPreodicTable;

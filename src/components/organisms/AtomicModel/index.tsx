import styled from "styled-components";
import Orbital from "../../atoms/Orbital";
import Nucleus from "../../molecules/Nucleus";

const Wrap = styled.div`
  position: relative;
  width: 620px;
  height: 620px;
`;

type PropTypes = {
  shells: number[];
  symbol: string;
  period: number;
};

type Keys = 1 | 2 | 3 | 4 | 5 | 6 | 7;

function AtomicModel({ shells, symbol, period }: PropTypes) {
  return (
    <Wrap>
      <Nucleus>{symbol}</Nucleus>
      {new Array(period).fill(0).map((_, idx) => {
        return (
          <Orbital size={(idx + 1) as Keys} key={idx} electrons={shells[idx]} />
        );
      })}
    </Wrap>
  );
}

export default AtomicModel;

import styled from "styled-components";
import Orbital from "../../atoms/Orbital";
import Nucleus from "../../molecules/Nucleus";

const Wrap = styled.div`
  position: relative;
  width: 560px;
  height: 560px;
`;

type PropTypes = {
  symbol: string;
  level: number;
};

type Keys = 1 | 2 | 3 | 4 | 5 | 6 | 7;

function AtomicModel({ symbol, level }: PropTypes) {
  return (
    <Wrap>
      <Nucleus>{symbol}</Nucleus>
      {new Array(level).fill(0).map((_, idx) => {
        // return idx + 1;
        return <Orbital size={(idx + 1) as Keys} />;
      })}
    </Wrap>
  );
}

export default AtomicModel;

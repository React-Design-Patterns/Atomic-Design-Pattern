import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../../../styles/theme";

const Wrap = styled.div<{ speed: number }>`
  position: absolute;
  width: inherit;
  height: inherit;
  animation: rotate calc(6s + ${({ speed }) => speed}s) linear infinite;
  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Orbit = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 2px solid ${theme.color.gray};
`;

const Electron = styled.div<Position>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  position: absolute;
  top: calc(
    50% +
      ${({ top }) => {
        console.log(`top: ${top}`);
        return top;
      }}px
  );
  left: calc(
    50% -
      ${({ left }) => {
        console.log(`left: ${left}`);
        return left;
      }}px
  );
  transform: translate(-50%, -50%);
  background-color: ${theme.color.gray};
`;

type Position = {
  top: number;
  left: number;
};

type Keys = 1 | 2 | 3 | 4 | 5 | 6 | 7;

const Size: { [key in Keys]: number } = {
  1: 200,
  2: 260,
  3: 320,
  4: 380,
  5: 440,
  6: 500,
  7: 560,
};

type PropTypes = {
  size: Keys;
  electrons: number;
};

const Orbital = ({ size, electrons, ...props }: PropTypes) => {
  const [positions, setPositions] = useState<Position[]>([]);
  useEffect(() => {
    if (!electrons) return;
    setPositions(
      new Array(electrons).fill(0).map((_, idx) => {
        return {
          top: (Size[size] / 2) * Math.sin((idx / electrons) * Math.PI * 2),
          left: (Size[size] / 2) * Math.cos((idx / electrons) * Math.PI * 2),
        };
      })
    );
  }, [electrons, size]);
  return (
    <Wrap speed={size}>
      <Orbit {...props} style={{ width: Size[size], height: Size[size] }}>
        {positions.map((position, idx) => (
          <Electron key={idx} {...position} />
        ))}
      </Orbit>
    </Wrap>
  );
};

export default Orbital;

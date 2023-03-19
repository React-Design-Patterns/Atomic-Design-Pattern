import React from "react";
import styled from "styled-components";
import theme from "../../../styles/theme";

const Orbit = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 2px solid ${theme.color.gray};
`;

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

const Orbital = ({ size, ...props }: { size: Keys }) => {
  return (
    <Orbit {...props} style={{ width: Size[size], height: Size[size] }}></Orbit>
  );
};

export default Orbital;

import React from "react";
import styled from "styled-components";
import theme from "../../../styles/theme";

const Orbit = styled.div`
  border-radius: 50%;
  border: 2px solid ${theme.color.gray};
`;

type Keys =
  | "1stOrbit"
  | "2ndOrbit"
  | "3rdOrbit"
  | "4thOrbit"
  | "5thOrbit"
  | "6thOrbit"
  | "7thOrbit";

const Size: { [key in Keys]: number } = {
  "1stOrbit": 200,
  "2ndOrbit": 260,
  "3rdOrbit": 320,
  "4thOrbit": 380,
  "5thOrbit": 440,
  "6thOrbit": 500,
  "7thOrbit": 560,
};

const Orbital = ({ size, ...props }: { size: Keys }) => {
  return (
    <Orbit {...props} style={{ width: Size[size], height: Size[size] }}></Orbit>
  );
};

export default Orbital;

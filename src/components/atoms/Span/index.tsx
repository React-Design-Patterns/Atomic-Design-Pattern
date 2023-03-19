import React from "react";
import styled, { css } from "styled-components";
import theme from "../../../styles/theme";

const styles = css`
  font-size: 22px;
  color: ${theme.color.white};
  margin: 0;
`;

const Span = styled(({ children, fontSize, ...props }) =>
  React.createElement("p", { style: { fontSize }, ...props }, children)
)`
  ${styles}
`;

export default Span;

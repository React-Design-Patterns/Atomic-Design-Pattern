import React from "react";
import styled, { css } from "styled-components";
import theme from "../../../styles/theme";

const styles = css`
  font-size: 22px;
  color: ${theme.color.white};
  /* text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15); */
  margin: 0;
`;

const Span = styled(({ children, fontSize, ...props }) =>
  React.createElement("p", { style: { fontSize }, ...props }, children)
)`
  ${styles}
`;

export default Span;

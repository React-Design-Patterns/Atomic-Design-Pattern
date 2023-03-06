import React from "react";
import styled, { css } from "styled-components";
import theme from "../../../styles/theme";

const styles = css`
  font-size: 22px;
  color: ${theme.color.white};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
`;

const Logo = styled(({ children, ...props }) =>
  React.createElement("h1", props, children)
)`
  ${styles}
`;

export default Logo;

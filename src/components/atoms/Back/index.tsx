import React from "react";
import styled, { css } from "styled-components";
import Arrow from "./arrow.svg";

const styles = css`
  width: 38px;
`;

const Back = styled(() => React.createElement("img", { src: Arrow }))`
  ${styles}
`;

export default Back;

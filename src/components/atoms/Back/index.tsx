import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Arrow from "./arrow.svg";

const Image = styled.img`
  width: 38px;
`;

function Back() {
  return (
    <Link to="/">
      <Image src={Arrow} />
    </Link>
  );
}

export default Back;

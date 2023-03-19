import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../../../styles/theme";
import Span from "../../atoms/Span";

const Wrap = styled.div<{ isCard: boolean }>`
  width: ${({ isCard }) => (isCard ? 272 : 72)}px;
  height: ${({ isCard }) => (isCard ? 272 : 72)}px;
  background-color: ${theme.color.gray};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: ${({ isCard }) => (isCard ? "16px 16px 14px" : "5px 5px 4px")};
`;

const Top = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Middle = styled.div``;

const Bottom = styled.div``;

type PropTypes = {
  children: string;
  atomicWeight: number;
  atomicNumber: number;
  fullName: string;
  isCard?: boolean;
};

const Element = ({
  children,
  atomicWeight,
  atomicNumber,
  fullName,
  isCard = false,
}: PropTypes) => {
  return (
    <Link to={`/detail/${atomicNumber}`} style={{ textDecoration: "none" }}>
      <Wrap isCard={isCard}>
        <Top>
          <Span fontSize={isCard ? 28 : 10}>{atomicWeight}</Span>
          <Span fontSize={isCard ? 28 : 10}>{atomicNumber}</Span>
        </Top>
        <Middle>
          <Span fontSize={isCard ? 100 : 26}>{children}</Span>
        </Middle>
        <Bottom>
          <Span fontSize={isCard ? 28 : 10}>{fullName}</Span>
        </Bottom>
      </Wrap>
    </Link>
  );
};

export default Element;

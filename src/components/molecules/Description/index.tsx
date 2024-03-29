import styled from "styled-components";
import theme from "../../../styles/theme";
import Span from "../../atoms/Span";

const Wrap = styled.div`
  background-color: ${theme.color.gray};
  padding: 16px 20px;
  text-align: center;
`;

type PropTypes = {
  children: string;
};

const Description = ({ children }: PropTypes) => {
  return (
    <Wrap>
      <Span fontSize={22}>{children}</Span>
    </Wrap>
  );
};

export default Description;

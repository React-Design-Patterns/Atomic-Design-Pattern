import styled from "styled-components";
import theme from "../../../styles/theme";
import Span from "../../atoms/Span";

const Wrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.color.gray};
`;

type PropTypes = {
  children: string;
};

const Nucleus = ({ children }: PropTypes) => {
  return (
    <Wrap>
      <Span fontSize={48}>{children}</Span>
    </Wrap>
  );
};

export default Nucleus;

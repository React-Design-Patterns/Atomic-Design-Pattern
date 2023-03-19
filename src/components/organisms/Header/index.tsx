import styled from "styled-components";
import theme from "../../../styles/theme";
import Logo from "../../atoms/Logo";

const Wrap = styled.div`
  width: 100%;
  min-width: 1440px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.color.gray};
`;

type PropTypes = {
  children: string;
};

function Header({ children }: PropTypes) {
  return (
    <Wrap>
      <Logo>{children}</Logo>
    </Wrap>
  );
}

export default Header;

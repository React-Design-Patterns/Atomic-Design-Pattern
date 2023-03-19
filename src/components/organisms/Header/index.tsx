import styled from "styled-components";
import theme from "../../../styles/theme";
import Logo from "../../atoms/Logo";

const Wrap = styled.div`
  width: 100%;
  min-width: 1440px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.color.gray};
`;

function Header() {
  return (
    <Wrap>
      <Logo>Atomic Periodic Table</Logo>
    </Wrap>
  );
}

export default Header;

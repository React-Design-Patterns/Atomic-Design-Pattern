import styled from "styled-components";

const Wrap = styled.div`
  width: 72px;
  height: 72px;
  background-color: transparent;
`;

const EmptyElement = () => {
  return <Wrap></Wrap>;
};

export default EmptyElement;

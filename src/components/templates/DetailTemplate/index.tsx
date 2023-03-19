import { ReactNode } from "react";
import styled from "styled-components";
import theme from "../../../styles/theme";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  width: 100%;
  min-width: 1440px;
`;

const Section = styled.section`
  width: 100%;
  position: relative;
  flex: 1;
  display: grid;
  grid-template-columns: 272fr 560fr 412fr;
  margin: 0 auto;
  padding: 46px;
  align-items: center;
  justify-items: center;
  gap: 52px;
`;

const Back = styled.div`
  position: absolute;
  top: 50px;
  left: 44px;
`;

const Element = styled.div`
  align-self: flex-end;
`;

const AtomicModel = styled.div``;

const Description = styled.div`
  width: 412px;
  height: 600px;
  background-color: ${theme.color.gray};
  padding: 16px 20px;
  color: ${theme.color.white};
`;

type PropTypes = {
  header: ReactNode;
  back: ReactNode;
  element: ReactNode;
  atomicModel: ReactNode;
  description: ReactNode;
};

function DetailTemplate({
  header,
  back,
  element,
  atomicModel,
  description,
}: PropTypes) {
  return (
    <Wrap>
      <Header>{header}</Header>
      <Section>
        <Back>{back}</Back>
        <Element>{element}</Element>
        <AtomicModel>{atomicModel}</AtomicModel>
        <Description>{description}</Description>
      </Section>
    </Wrap>
  );
}

export default DetailTemplate;

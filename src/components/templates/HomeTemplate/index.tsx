import { ReactNode } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header``;

const Section = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
`;

type PropTypes = {
  header: ReactNode;
  section: ReactNode;
};

function HomeTemplate({ header, section }: PropTypes) {
  return (
    <Wrap>
      <Header>{header}</Header>
      <Section>{section}</Section>
    </Wrap>
  );
}

export default HomeTemplate;

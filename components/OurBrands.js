import styled, { keyframes } from "styled-components";
import Brands from "./Brands";

const OurBrands = () => {
  return (
    <Section>
      <Container>
        <Brands />
        <Brands />
      </Container>
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  overflow: hidden;
  height: 8rem;
`;

const mobileScroll = keyframes`
  to {
    left: -200%;
  }
`;

const desktopScroll = keyframes`
  to {
    left: -100%;
  }
`;

const Container = styled.div`
  width: 400%;

  @media (min-width: 800px) {
    width: 200%;
  }

  position: absolute;
  left: 0;
  animation: ${mobileScroll} 10s linear infinite;
  @media (min-width: 800px) {
    animation: ${desktopScroll} 20s linear infinite;
  }
`;
export default OurBrands;

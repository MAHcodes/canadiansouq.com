import styled, { keyframes } from "styled-components";

const OurBrands = (props: {}) => {
  return (
    <Section>
      <Container>
        <Brands />
        <Brands />
      </Container>
    </Section>
  );
};

const Brands = () => (
  <div className="brands">
    <img
      src="/images/milwaukee-logo.svg"
      alt="Milwaukee Logo"
    />
    <img className="brand-logo" src="/images/hilti-logo.svg" alt="HILTI Logo" />
    <img
      src="/images/dewalt-logo.svg"
      alt="DeWALT Logo"
    />
    <img
      src="/images/makita-logo.svg"
      alt="Makita Logo"
    />
    <img
      src="/images/matcotools-logo.svg"
      alt="Matco Tools Logo"
    />
  </div>
);

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

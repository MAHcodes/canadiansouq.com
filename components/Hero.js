import styled from "styled-components";
import Image from "next/image";
import hero from "../public/images/hero.png";
import lebTag from "../public/images/lebanonTag.svg";
import underline from "../public/images/underline.svg";
import Button from "./Button";

const Hero = () => {
  return (
    <StyledHero>
      <div className="container">
        <H2>
          We offer you{" "}
          <Span>
            Original <Image src={underline} alt="underline" />
          </Span>
          products from Canada in Lebanon!
        </H2>
        <ImgWrapper>
          <Image src={hero} alt="Our Power tools brands" />
          <Image src={lebTag} alt="Lebanon pin tag" />
        </ImgWrapper>
        <Button text="Shop now" />
      </div>
    </StyledHero>
  );
};

const StyledHero = styled.section`
  padding-block: var(--p-sec);
  & > .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }
`;
const ImgWrapper = styled.div`
  width: 70vw;
  max-width: 750px;
  position: relative;
  margin-block: 4rem;

  & > span:nth-child(2) {
    position: absolute !important;
    width: var(--icon-size);
    height: var(--icon-size);
    inset: calc(-1 * var(--icon-size)) 0 auto 0;
  }
`;

const H2 = styled.h2`
  font-size: 1.75rem;
  text-align: center;
  font-weight: bold;
  max-width: 28ch;
`;
const Span = styled.span`
  text-transform: uppercase;
  position: relative;

  & > span {
    position: absolute !important;
    inset: auto 0 0 0;
    transform: translateY(50%);
    & img {
      width: 100% !important;
    }
  }
`;

export default Hero;

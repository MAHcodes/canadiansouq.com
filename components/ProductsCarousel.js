import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import CardsScroll from "./CardsScroll";
// import ScrollIndicator from "./ScrollIndicator";

const ProductsCarousel = ({ title, all, productsList }) => {
  const [scroll, setScroll] = useState("");

  return (
    <Div position={scroll}>
      <div className="container">
        <Info>
          <Title>{title}</Title>
          <Link href={all}>view all</Link>
        </Info>
        <CardsScroll setScroll={setScroll} productsList={productsList} />
        {/* <ScrollIndicator /> */}
      </div>
    </Div>
  );
};

const Div = styled.div`
  padding-block: var(--p-sec);

  & > .container {
    position: relative;
    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 10%;
      height: calc(100% - 3.25rem);
      z-index: 4;
    }
    &::before {
      inset: auto auto 0 0;
      background: linear-gradient(
        to right,
        rgb(var(--white)),
        rgba(var(--white), 0)
      );
      opacity: ${props => props.position === "start" ? "0" : "1" };
    }
    &::after {
      inset: auto 0 0 auto;
      background: linear-gradient(
        to left,
        rgb(var(--white)),
        rgba(var(--white), 0)
      );
    opacity: ${props => props.position === "end" ? "0" : "1" };
    }
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 1rem;
`;

const Title = styled.h2`
  font-weight: bold;

  & + a {
    text-decoration: underline;
    font-size: var(--fz-4);
    color: rgba(var(--black), 0.9);

    &:hover {
      color: rgb(var(--black));
    }
  }
`;

export default ProductsCarousel;

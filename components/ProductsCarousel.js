import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import CardsScroll from "./CardsScroll";
// import ScrollIndicator from "./ScrollIndicator";

const ProductsCarousel = ({ title, all, productsList }) => {
  const [scroll, setScroll] = useState("start");

  return (
    <Div position={scroll}>
      <div className="container">
        <Info>
          <Title>{title}</Title>
          <Link href={all} passHref>
            <All>
              Explore all
              <svg width="18" height="19" viewBox="0 0 18 19" fill="none">
                <path
                  d="M4.5 7.05497L9 11.7325L13.5 7.05497"
                  stroke="#242424"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </All>
          </Link>
        </Info>
        <CardsScroll setScroll={setScroll} productsList={productsList} />
        {/* <ScrollIndicator /> */}
      </div>
    </Div>
  );
};

const Div = styled.div`
  padding-block: 1rem;

  & > .container {
    position: relative;
    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 3rem;
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
      opacity: ${(props) => (props.position === "start" ? "0" : "1")};
    }
    &::after {
      inset: auto 0 0 auto;
      background: linear-gradient(
        to left,
        rgb(var(--white)),
        rgba(var(--white), 0)
      );
      opacity: ${(props) => (props.position === "end" ? "0" : "1")};
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
  font-size: var(--fz-2);
`;

const All = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  cursor: pointer;
  text-decoration: underline;
  font-size: var(--fz-4);
  color: rgba(var(--black), 0.9);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 50% 0 auto auto;
    width: 0px;
    height: 1.5px;
    background-color: rgb(var(--black));
    transform: translateY(-25%);
    transition: width var(--td) 10ms  var(--ttf);
    transform-origin: right center;
  }

  & > svg {
    transform: rotate(-90deg);
    transition: transform var(--td) var(--ttf);
  }

  &:hover {
    color: rgb(var(--black));

    &::before {
      width: 10px;
    }

    & > svg {
      transform: translateX(8.5px) rotate(-90deg);
    }
  }
`;

export default ProductsCarousel;

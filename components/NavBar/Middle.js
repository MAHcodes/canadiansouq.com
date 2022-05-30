import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";
import CATEGORIES from "../../stores/Categories";

const Middle = () => {
  const [opened, setOpened] = useState("");

  const handleClick = (cat) => {
    if (opened === cat) {
      setOpened("");
    } else {
      setOpened(cat);
    }
  };

  return (
    <Div>
      {Object.entries(CATEGORIES).map((category) => {
        return (
          <Category key={category[0]}>
            <P onClick={() => handleClick(category[0])}>
              <Arrow
                open={opened === category[0]}
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
              >
                <path
                  d="M4.5 7.05497L9 11.7325L13.5 7.05497"
                  stroke="#242424"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Arrow>
              {category[0]}
            </P>
            <Wrapper>
              {category[1].map((brand) => {
                return (
                  <Link
                    key={brand}
                    href={`/products/${category[0]}/${brand}`}
                    passHref
                  >
                    <Li open={opened === category[0]}>{brand}</Li>
                  </Link>
                );
              })}
            </Wrapper>
          </Category>
        );
      })}
    </Div>
  );
};

const Div = styled.div`
  flex: 1;
  padding-inline: 0.5rem 2rem;
  overflow-y: auto;
  font-size: .25rem !important;

  @media (min-width: 1580px) {
    overflow-y: unset;
    display: flex;
    gap: 2rem;
  }
`;

const Category = styled.ul`
  padding-block: 0.25rem;
  position: relative;
  & li {
    padding-left: 3rem;
    @media (min-width: 1580px) {
      padding-inline: 2rem;
    }
  }
`;

const Arrow = styled.svg`
  width: calc(var(--icon-size) - 0.5rem);
  height: calc(var(--icon-size) - 0.5rem);
  margin-right: .5rem;
  transition: transform var(--td) var(--ttf);
  transform: ${(props) => (props.open ? "rotate(0deg)" : "rotate(-90deg)")};

  @media (min-width: 1580px) {
    margin-right: 0;
    margin-left: .5rem;
    transform: rotate(0);
  }

  & path {
    stroke: rgb(var(--black));
    @media (min-width: 1580px) {
      stroke: rgb(var(--white));
    }
  }
`;

const Li = styled.li`
  height: ${(props) => (props.open ? "auto" : "0")};
  display: ${(props) => (props.open ? "block" : "none")};
  margin-left: 0.666rem;
  padding-block: 0.5rem;
  border-left: 1px solid rgba(var(--gray), 50%);

  @media (min-width: 1580px) {
    transition: transform var(--td) var(--ttf);
    margin-left: 0;
    border-left: 0;
    &:hover {
      transform: translateX(0.25rem);
    }
  }
`;

const P = styled.p`
  display: flex;
  align-items: center;
  margin-block: 0.5rem;
  cursor: pointer;
  @media (min-width: 1580px) {
    flex-direction: row-reverse;
  }
`;

const Wrapper = styled.div`
  @media (min-width: 1580px) {
    position: absolute;
    inset: auto 0 0 auto;
    z-index: 15;
    background-color: rgb(var(--white));
    color: rgb(var(--black));
    border-radius: var(--br);
    transform: translateY(100%);
    box-shadow: 0 0 1rem -0.75rem rgb(var(--black));
    padding-block: .5rem;
  }
`;

export default Middle;

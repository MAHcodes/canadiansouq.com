import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";

const CATEGORIES = {
  "Power Tools": ["All", "DeWALT", "Milwaukee", "HILTI", "makita"],
  "Hand Tools": ["All"],
  Electronics: ["All"],
  Automotive: ["All"],
  "Home Applicants": ["All"],
  Others: ["All"],
};

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
                  href={`/products/${category[0]
                    .toLowerCase()
                    .split(" ")
                    .join("")}/${brand.toLowerCase().split(" ").join("")}`}
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

  @media (min-width: 1350px) {
    overflow-y: unset;
    display: flex;
    gap: 2rem;
  }
`;

const Category = styled.ul`
  padding-block: 0.25rem;
  & li {
    padding-left: 3rem;
    @media ( min-width: 1350px) {
      padding-inline: 2rem;
    }
  }
  position: relative; // TODO
`;

const Arrow = styled.svg`
  width: calc(var(--icon-size) - 0.5rem);
  height: calc(var(--icon-size) - 0.5rem);
  margin-right: 1rem;
  transition: transform var(--td) var(--ttf);
  transform: ${(props) => (props.open ? "rotate(0deg)" : "rotate(-90deg)")};

  & path {
    stroke: rgb(var(--black));
    @media (min-width: 1350px) {
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

  @media (min-width: 1350px) {
    transition: padding-left var(--td) var(--ttf), background-color var(--td) var(--ttf);
    &:hover {
      padding-left: 2.5rem;
      background-color: rgba(var(--gray), 10%);
    }
  }
  `;


const P = styled.p`
  display: flex;
  align-items: center;
  margin-block: 0.5rem;
`;

const Wrapper = styled.div`
  @media (min-width: 1350px) {
  position: absolute;
  inset: auto auto 0 0;
  z-index: 15; 
  background-color: rgb(var(--white));
  color: rgb(var(--black));
  border-radius: var(--br);
  transform: translateY(100%);
  box-shadow: .25rem .25rem 1rem -.75rem rgb(var(--black));
  }
`

export default Middle;

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
`;

const Category = styled.ul`
  padding-block: 0.25rem;
  & > li {
    padding-left: 3rem;
  }
`;

const Arrow = styled.svg`
  width: calc(var(--icon-size) - 0.5rem);
  height: calc(var(--icon-size) - 0.5rem);
  margin-right: 1rem;
  transition: transform var(--td) var(--ttf);
  transform: ${(props) => (props.open ? "rotate(0deg)" : "rotate(-90deg)")};
`;

const Li = styled.li`
  height: ${(props) => (props.open ? "auto" : "0")};
  display: ${(props) => (props.open ? "block" : "none")};
  margin-left: 0.666rem;
  padding-block: 0.5rem;
  border-left: 1px solid rgba(var(--gray), 50%);
`;


const P = styled.p`
  display: flex;
  align-items: center;
  margin-block: 0.5rem;
`;

export default Middle;

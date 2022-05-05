import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import Overlay from "./Overlay";

const CATEGORIES = {
  "Power Tools": ["All", "DeWALT", "Milwaukee", "HILTI", "makita"],
  "Hand Tools": ["All"],
  Electronics: ["All"],
  Automotive: ["All"],
  "Home Applicants": ["All"],
  Others: ["All"],
};

const NavBar = ({activeNav, setActiveNav}) => {
  const [opened, setOpened] = useState("");

  const handleClick = (cat) => {
    if (opened === cat) {
      setOpened("");
    } else {
      setOpened(cat);
    }
  }

  return (
    <>
      <Nav activeNav={activeNav}>
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
                  href={`/products/${category[0].toLowerCase().split(" ").join("")}/${brand.toLowerCase().split(" ").join("")}`}
                  passHref
                >
                  <Li open={opened === category[0]}>{brand}</Li>
                </Link>
              );
            })}
          </Category>
        );
      })}
    </Nav>
    {activeNav && <Overlay action={() => setActiveNav(false)} z={12}/>}
    </>
  );
};

const Nav = styled.nav`
  position: fixed;
  background-color: rgb(var(--white));
  color: rgb(var(--black));
  padding: 1rem 2rem;
  border-radius: 0 var(--br-1) var(--br-1) 0;
  box-shadow: 0 0 1rem -0.75rem rgb(var(--black));
  z-index: 13;
  transition: inset var(--td) var(--ttf);
  inset: 0 auto 0 ${ props => props.activeNav ? "0" : "-100%" };

  p {
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
  }

  li {
    cursor: pointer;
    font-size: 1rem;
  }
`;

const Category = styled.ul`
  padding-block: .25rem;
  & > li {
    padding-left: 3rem;
  }
`;

const P = styled.p`
  display: flex;
  align-items: center;
  margin-block: .5rem;
`;

const Arrow = styled.svg`
  width: var(--icon-size);
  height: var(--icon-size);
  margin-right: 1rem;
  transition: transform var(--td) var(--ttf);
  transform: ${(props) => (props.open ? "rotate(0deg)" : "rotate(-90deg)")};
`;

const Li = styled.li`
  height: ${(props) => (props.open ? "auto" : "0")};
  display: ${(props) => (props.open ? "block" : "none")};
  margin-left: 1rem;
  padding-block: .5rem;
  border-left: 2px solid rgb(var(--gray));
  text-decoration: underline;
`;

export default NavBar;

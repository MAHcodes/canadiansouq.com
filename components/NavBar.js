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

const NavBar = ({ activeNav, setActiveNav }) => {
  const [opened, setOpened] = useState("");

  const handleClick = (cat) => {
    if (opened === cat) {
      setOpened("");
    } else {
      setOpened(cat);
    }
  };

  return (
    <>
      <Nav activeNav={activeNav}>
        <Top>
          <Link href="/" passHref>
            <H1>Canadian Souq</H1>
          </Link>
          <Svg onClick={() => {setActiveNav(false)}} width="24" height="26" viewBox="0 0 24 26" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 22.7103C17.5228 22.7103 22 18.2331 22 12.7103C22 7.18742 17.5228 2.71027 12 2.71027C6.47715 2.71027 2 7.18742 2 12.7103C2 18.2331 6.47715 22.7103 12 22.7103ZM11.7436 11.6224L14.2766 9.08942C14.577 8.78901 15.064 8.78901 15.3644 9.08942C15.6648 9.38982 15.6648 9.87687 15.3644 10.1773L12.8314 12.7103L15.3645 15.2433C15.6649 15.5437 15.6649 16.0307 15.3645 16.3311C15.0641 16.6315 14.577 16.6315 14.2766 16.3311L11.7436 13.7981L9.21059 16.3311C8.91019 16.6315 8.42314 16.6315 8.12274 16.3311C7.82233 16.0307 7.82233 15.5437 8.12274 15.2433L10.6557 12.7103L8.12276 10.1773C7.82236 9.87689 7.82236 9.38984 8.12276 9.08944C8.42317 8.78903 8.91022 8.78903 9.21062 9.08944L11.7436 11.6224ZM3.53846 12.7103C3.53846 17.3834 7.32682 21.1718 12 21.1718C16.6732 21.1718 20.4615 17.3834 20.4615 12.7103C20.4615 8.03709 16.6732 4.24873 12 4.24873C7.32682 4.24873 3.53846 8.03709 3.53846 12.7103Z"
              fill="#242424"
            />
          </Svg>
        </Top>
        <Middle>
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
        </Middle>

        <Bottom>Btoom</Bottom>
      </Nav>
      {activeNav && <Overlay action={() => setActiveNav(false)} z={12} />}
    </>
  );
};

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(var(--gray), 50%);
  margin-bottom: 1rem;
`;

const Svg = styled.svg`
  cursor: pointer;
  width: calc(var(--icon-size) - .5rem);
  height: calc(var(--icon-size) - .5rem);
`

const Middle = styled.div`
  flex: 1;
  padding-inline: 0.5rem 2rem;
`;

const Bottom = styled.div`
  padding-top: 1rem;
  border-top: 1px solid rgba(var(--gray), 50%);
`;

const H1 = styled.h1`
  cursor: pointer;
  font-weight: 800;
  flex: 1;
`;

const Nav = styled.nav`
  position: fixed;
  background-color: rgb(var(--white));
  color: rgb(var(--black));
  padding: 1rem;
  border-radius: 0 var(--br-1) var(--br-1) 0;
  box-shadow: 0 0 1rem -0.75rem rgb(var(--black));
  z-index: 13;
  transition: inset var(--td) var(--ttf);
  inset: 0 auto 0 ${(props) => (props.activeNav ? "0" : "-100%")};

  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-direction: column;

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
  padding-block: 0.25rem;
  & > li {
    padding-left: 3rem;
  }
`;

const P = styled.p`
  display: flex;
  align-items: center;
  margin-block: 0.5rem;
`;

const Arrow = styled.svg`
  width: calc(var(--icon-size) - .5rem);
  height: calc(var(--icon-size) - .5rem);
  margin-right: 1rem;
  transition: transform var(--td) var(--ttf);
  transform: ${(props) => (props.open ? "rotate(0deg)" : "rotate(-90deg)")};
`;

const Li = styled.li`
  height: ${(props) => (props.open ? "auto" : "0")};
  display: ${(props) => (props.open ? "block" : "none")};
  margin-left: .666rem;
  padding-block: 0.5rem;
  border-left: 2px solid rgba(var(--gray), 50%);
  text-decoration: underline;
`;

export default NavBar;

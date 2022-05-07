import styled from "styled-components";
import HamburgerIcon from "./HamburgerIcon";
import Link from "next/link";
import HeaderIcons from "./HeaderIcons";
import NavBar from "./NavBar/NavBar";
import { useState, useEffect  } from "react";

const Header = () => {
  const [activeNav, setActiveNav] = useState(false);

  useEffect(() => {
    const updateNav = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 500) {
        setActiveNav(true);
      }
    };
    updateNav();
    window.addEventListener("resize", updateNav);

    return () => {
      window.removeEventListener("resize", updateNav);
    }
  }, [])

  return (
    <StyledHeader>
      <div className="container">
        <HamburgerIcon action={() => setActiveNav(!activeNav)}/>
        <Link href="/" passHref>
          <H1>Canadian Souq</H1>
        </Link>
        <NavBar activeNav={activeNav} setActiveNav={setActiveNav} />
        <HeaderIcons />
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: rgb(var(--black));
  border-radius: 0 0 var(--br-1) var(--br-1);
  color: rgb(var(--white));
  padding-block: 0.55rem;
  position: sticky;
  inset: 0 0 auto 0;
  z-index: 10;

  & .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }
`;
const H1 = styled.h1`
  cursor: pointer;
  font-weight: 800;
  flex: 1;
`;

export default Header;

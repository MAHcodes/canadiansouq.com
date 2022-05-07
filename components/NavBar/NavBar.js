import styled from "styled-components";
import Link from "next/link";
import Overlay from "../Overlay";
import Top from "./Top";
import Middle from "./Middle";

const NavBar = ({ activeNav, setActiveNav }) => {
  return (
    <>
      <Nav activeNav={activeNav}>
        <Top setActiveNav={setActiveNav} />
        <Middle />
        <Bottom>Btoom</Bottom>
      </Nav>
      {activeNav && <Overlay action={() => setActiveNav(false)} z={12} />}
    </>
  );
};

const Bottom = styled.div`
  padding-top: 1rem;
  border-top: 1px solid rgba(var(--gray), 50%);
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

export default NavBar;

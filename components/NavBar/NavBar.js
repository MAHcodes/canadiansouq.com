import styled from "styled-components";
import Overlay from "../Overlay";
import Top from "./Top";
import Middle from "./Middle";
import Bottom from "./Bottom";

const NavBar = ({ activeNav, setActiveNav, screenX}) => {
  return (
    <>
      <Nav activeNav={activeNav}>
        <Top setActiveNav={setActiveNav} />
        <Middle />
        <Bottom />
      </Nav>
      {activeNav && (screenX <= 1580) && <Overlay action={() => setActiveNav(false)} z={12} />}
    </>
  );
};

const Nav = styled.nav`
  position: fixed;
  background-color: rgb(var(--white));
  color: rgb(var(--black));
  border-radius: 0 var(--br-1) var(--br-1) 0;
  box-shadow: 0 0 1rem -0.75rem rgb(var(--black));
  z-index: 13;
  transition: inset var(--td) var(--ttf);
  inset: 0 auto 0 ${(props) => (props.activeNav ? "0" : "-100%")};

  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-direction: column;

  padding: 1rem;

  @media (min-width: 1580px) {
    position: unset;
    background-color: rgb(var(--black));
    color: rgb(var(--white));
    padding-block: 0;
    justify-content: space-between;
  }

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

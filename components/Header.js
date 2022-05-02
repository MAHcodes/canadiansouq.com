import styled from "styled-components";
import HamburgerIcon from "./HamburgerIcon";
import Link from "next/link";
import HeaderIcons from "./HeaderIcons";

const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <HamburgerIcon />
        <Link href="/" passHref>
          <H1>Canadian Souq</H1>
        </Link>
        <HeaderIcons />
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: rgb(var(--black));
  border-radius: 0 0 var(--br) var(--br);
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

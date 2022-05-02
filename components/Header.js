import styled from "styled-components";
import HamburgerIcon from "./HamburgerIcon";
import Link from "next/link";
import HeaderIcons from "./HeaderIcons";

const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
      <HamburgerIcon />
      <Link href="/" passHref><H1>Canadian&nbsp;Souq</H1></Link>
        <HeaderIcons />
      </div>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: rgb(var(--black));
  border-radius: 0 0 var(--br) var(--br);
  color: rgb(var(--white));
  padding-block: .5rem;

  & .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
const H1 = styled.h1`
  cursor: pointer;
`

export default Header

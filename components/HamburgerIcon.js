import styled from "styled-components";
import IconWrapper from "./IconWrapper";

const HamburgerIcon = ({action}) => {
  return (
    <IconWrapper >
      <HamburgerDiv onClick={action} title="Menu">
        <span></span>
        <span></span>
        <span></span>
      </HamburgerDiv>
    </IconWrapper>
  );
};

const HamburgerDiv = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;
  transition: background-color var(--td) var(--ttf);
  height: 100%;
  padding: 0.5rem;

  &:hover span,
  &:focus span {
    width: 100% !important;
  }

  & > span {
    height: 2px;
    border-radius: 1rem;
    background-color: rgb(var(--white));
    transition: width var(--td) var(--ttf);
  }
  & > span:nth-child(1) {
    width: 100%;
  }
  & > span:nth-child(2) {
    width: 60%;
  }
  & > span:nth-child(3) {
    width: 80%;
  }
`;

export default HamburgerIcon;

import styled from "styled-components";
import SocialIcons from "../SocialIcons";

const Bottom = () => {
  return (
    <Div>
      <P>Contact us</P>
      <SocialIcons />
      
    </Div>
  )
}

const Div = styled.div`
  padding-top: 1rem;
  border-top: 1px solid rgba(var(--gray), 50%);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1580px) {
    display: none;
  }
`;

const P = styled.p`
  color: rgb(var(--gray));
`

export default Bottom

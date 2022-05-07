import styled from "styled-components";

const Bottom = () => {
  return (
    <Div>
      Contact us
      
    </Div>
  )
}

const Div = styled.div`
  padding-top: 1rem;
  border-top: 1px solid rgba(var(--gray), 50%);

  @media (min-width: 1580px) {
    display: none;
  }
`;

export default Bottom

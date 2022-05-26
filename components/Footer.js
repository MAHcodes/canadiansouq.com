import styled from "styled-components";

const Footer = () => {
  return (
    <Div>
      <div className="container">Footer</div>
    </Div>
  );
};

const Div = styled.div`
  background-color: rgb(var(--black));
  color: rgb(var(--white));
  border-radius: var(--br) var(--br) 0 0;
  padding-block: 1rem;
`;

export default Footer;

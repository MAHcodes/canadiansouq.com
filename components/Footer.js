import styled from "styled-components";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <Div>
      <div className="container">
        <Wrapper>
          <ContactUs>
            <Title>Contact Us</Title>
            <a href="cel:+96181921320" target="_blank" rel="noreferrer">
              +961 81 921 320
            </a>
            <a
              href="mailto:canadiansouq@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              canadiansouq@gmail.com
            </a>
          </ContactUs>

          <FollowUs>
            <Title>Follow Us</Title>
            <SocialIcons />
          </FollowUs>

          <VisitUs>
            <Title>Visit Us</Title>
            <h4>Mon - Sat 9:00am - 5:00pm</h4>
          </VisitUs>
        </Wrapper>

        <Credit>
          <p>
            Made with &#10084;&#65039; by{" "}
            <a
              href="https://github.com/mhmdali102"
              target="_blank"
              rel="noreferrer"
            >
              Mhmd Ali Hsen
            </a>
          </p>
          <p>
            Canadian Souq &copy; All rights reserved -{" "}
            {new Date().getFullYear()}
          </p>
        </Credit>
      </div>
    </Div>
  );
};

const Div = styled.div`
  background-color: rgb(var(--black));
  border-radius: var(--br) var(--br) 0 0;
  padding-block: 1rem;
  color: rgb(var(--gray));
  margin-block-start: 1rem;
`;

const Wrapper = styled.div`
  display: grid;
  align-items: start;
  justify-content: space-between;
  grid-template-columns: repeat(3, 1fr);
`;

const Title = styled.h3`
  color: rgb(var(--white));
  font-size: var(--fz-3);
  font-weight: bold;
  margin-block-end: 1rem;
`;

const ContactUs = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  & > *:not(h3) {
    transition: color var(--td) var(--ttf);
    &:hover {
      color: rgb(var(--white));
      text-decoration: underline;
    }
  }
`;

const FollowUs = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const VisitUs = styled.div`
  justify-self: end;
`;

const Credit = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
  font-size: var(--fz-5);
  margin-block-start: 1rem;

  @media (min-width: 800px) {
    flex-direction: row-reverse;
  }

  & > p > a {
    text-decoration: underline;
    font-weight: bold;
    transition: color var(--td) var(--ttf);
    &:hover {
      color: rgb(var(--white));
    }
  }
`;

export default Footer;

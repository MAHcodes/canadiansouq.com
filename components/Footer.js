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
            <iframe
              width="831"
              height="372"
              src="https://maps.google.com/maps?q=8FVG+4J2,%20Maifadoun&t=&z=15&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></iframe>
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
  grid-template-areas: "c c f" "v v v";
  gap: 1rem;

  @media (min-width: 800px) {
    grid-template-areas: "c v v" "f v v";
  }
`;

const Title = styled.h3`
  color: rgb(var(--white));
  font-size: var(--fz-3);
  font-weight: bold;
  margin-block-end: 1rem;
`;

const ContactUs = styled.div`
  grid-area: c;
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
  grid-area: f;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media(min-width: 800px) {
    justify-self: start;
  }
`;

const VisitUs = styled.div`
  grid-area: v;
  & > iframe {
    width: 100%;
    border-radius: var(--br);
    margin-block-start: .5rem;
    max-height: 15rem;
    aspect-ratio: 16:9;
  }
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

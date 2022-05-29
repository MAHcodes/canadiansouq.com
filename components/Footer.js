import styled from "styled-components";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <Div>
      <div className="container">
        <Wrapper>
          <ContactUs>
            <Title>Contact Us</Title>
            <a href="tel:+96181921320" target="_blank" rel="noreferrer">
              <Span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M8.89434 9.39752L9.87434 8.41752C10.0063 8.28716 10.1733 8.19793 10.3551 8.16065C10.5368 8.12337 10.7254 8.13965 10.8981 8.20752L12.0925 8.68439C12.2669 8.75521 12.4166 8.8761 12.5224 9.03181C12.6283 9.18753 12.6857 9.3711 12.6875 9.55939V11.7469C12.6865 11.875 12.6595 12.0015 12.6083 12.119C12.5571 12.2364 12.4826 12.3422 12.3895 12.4301C12.2963 12.518 12.1862 12.5861 12.066 12.6303C11.9458 12.6746 11.8179 12.694 11.69 12.6875C3.32059 12.1669 1.63184 5.07939 1.31247 2.36689C1.29764 2.23369 1.31119 2.09886 1.35221 1.97127C1.39324 1.84367 1.46082 1.72621 1.5505 1.62661C1.64018 1.52702 1.74993 1.44753 1.87254 1.3934C1.99514 1.33926 2.12782 1.3117 2.26184 1.31252H4.37497C4.56353 1.31308 4.74762 1.37003 4.90355 1.47607C5.05948 1.5821 5.18013 1.73236 5.24997 1.90752L5.72684 3.10189C5.79695 3.27386 5.81484 3.46267 5.77827 3.64475C5.7417 3.82682 5.65229 3.99408 5.52122 4.12564L4.54122 5.10564C4.54122 5.10564 5.10559 8.92502 8.89434 9.39752Z"
                    fill="#919191"
                  />
                </svg>
                +961 81 921 320
              </Span>
            </a>
            <a
              href="mailto:canadiansouq@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1.10175 3.70025L6.35175 6.52055C6.52815 6.61505 6.75635 6.65985 6.98595 6.65985C7.21555 6.65985 7.44375 6.61505 7.62015 6.52055L12.8701 3.70025C13.2125 3.51615 13.5359 2.80005 12.908 2.80005H1.06465C0.436752 2.80005 0.760152 3.51615 1.10175 3.70025ZM13.0291 5.24235L7.62015 8.06125C7.38215 8.18585 7.21555 8.20055 6.98595 8.20055C6.75635 8.20055 6.58975 8.18585 6.35175 8.06125C6.11375 7.93665 1.35865 5.44395 0.970152 5.24165C0.697152 5.09885 0.699952 5.26615 0.699952 5.39495V10.5C0.699952 10.794 1.09615 11.2 1.39995 11.2H12.5999C12.9038 11.2 13.3 10.794 13.3 10.5V5.39565C13.3 5.26685 13.3028 5.09955 13.0291 5.24235Z"
                    fill="#919191"
                  />
                </svg>
                canadiansouq@gmail.com
              </Span>
            </a>
          </ContactUs>

          <FollowUs>
            <Title>Follow Us</Title>
            <SocialIcons />
          </FollowUs>

          <VisitUs>
            <Title>Visit Us</Title>
            <h4>
              <Span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M4.52663 4.52658C4.20085 4.85078 3.94243 5.23622 3.76623 5.6607C3.59003 6.08518 3.49954 6.54032 3.49996 6.99992L6.99996 6.99992L9.47329 9.47325C10.8383 8.10825 10.8383 5.89158 9.47329 4.52075C9.14835 4.19589 8.76253 3.93832 8.33791 3.76276C7.9133 3.58721 7.45823 3.49712 6.99875 3.49766C6.53927 3.4982 6.08442 3.58936 5.66021 3.76592C5.23601 3.94248 4.8508 4.20096 4.52663 4.52658ZM1.16663 6.99992C1.16663 10.2199 3.77996 12.8333 6.99996 12.8333C10.22 12.8333 12.8333 10.2199 12.8333 6.99992C12.8333 3.77992 10.22 1.16658 6.99996 1.16658C3.77996 1.16658 1.16663 3.77992 1.16663 6.99992ZM11.6666 6.99992C11.6666 9.57825 9.57829 11.6666 6.99996 11.6666C4.42163 11.6666 2.33329 9.57825 2.33329 6.99992C2.33329 4.42158 4.42163 2.33325 6.99996 2.33325C9.57829 2.33325 11.6666 4.42158 11.6666 6.99992Z"
                    fill="#919191"
                  />
                </svg>
                Monday to Saturday - by appointment only
              </Span>
            </h4>
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
  font-size: var(--fz-3);
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

const Span = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & > svg {
    width: 1.25rem;
    height: 1.25rem;
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
  gap: 0.5rem;
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
  @media (min-width: 800px) {
    justify-self: start;
  }
`;

const VisitUs = styled.div`
  grid-area: v;
  & > iframe {
    width: 100%;
    border-radius: var(--br);
    margin-block-start: .75rem;
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
  border-block-start: 1px solid rgba(var(--gray), 0.25);
  padding-block-start: 1rem;
  margin-block-start: 2rem;

  @media (min-width: 800px) {
    flex-direction: row;
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

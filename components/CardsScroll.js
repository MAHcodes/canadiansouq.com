import Image from "next/image";
import styled from "styled-components";
import Button from "./Button";

const CardsScroll = ({ productsList }) => {
  const bookmarkIcon = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M4.16431 17.5833L4.16408 17.5833C4.15037 17.5833 4.14142 17.5803 4.13708 17.5782C4.13537 17.5773 4.13441 17.5767 4.13395 17.5763C4.11136 17.5455 4.08331 17.4893 4.08331 17.3866V3.08154C4.08331 2.80397 4.40136 2.41675 4.90148 2.41675H15.1541C15.6179 2.41675 15.9166 2.77059 15.9166 3.08154V17.3867C15.9166 17.4754 15.9034 17.5289 15.8935 17.5562C15.8885 17.5701 15.884 17.5785 15.8812 17.5829C15.8791 17.5832 15.8761 17.5834 15.8721 17.5834C15.8563 17.5834 15.7811 17.5788 15.6332 17.4598L15.6325 17.4592L11.0616 13.7874C11.0615 13.7873 11.0613 13.7872 11.0612 13.787C10.7646 13.5483 10.3875 13.4416 10.0345 13.4416C9.68228 13.4416 9.30473 13.5478 9.00814 13.7864C9.00783 13.7866 9.00752 13.7868 9.00722 13.7871L4.42192 17.4591L4.42019 17.4605C4.28553 17.5689 4.19274 17.5833 4.16431 17.5833ZM15.8854 17.5819C15.8855 17.5819 15.8851 17.5822 15.884 17.5824L15.8854 17.5819Z"
        stroke="#242424"
        strokeWidth="1.5"
      />
    </svg>
  );

  return (
    <Div>
      {productsList.map((product) => (
        <Card key={product.id}>
          <ImageWrapper>
          <Image src={product.images[0]} width="150px" height="150px" alt="" />
          </ImageWrapper>
          <Info>
            <About>
              <Category>{product.category}</Category>
              <Financial>
                {product.cost !== product.price && <Cost>{product.cost}</Cost>}
                <Price>{product.price}</Price>
              </Financial>
            </About>
            <Title>{product.title}</Title>
            <Buttons>
              <Button padding=".75em 1.5em" widthFull text="Add to cart" />
              <Button
                sec
                padding=".5em .5em"
                text={bookmarkIcon}
                altText="Bookmark Icon"
              />
            </Buttons>
          </Info>
        </Card>
      ))}
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  gap: 1rem;
  align-items: stretch;
  overflow-x: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.div`
  background-color: rgb(var(--FFF));
  padding: 1rem;
  border-radius: var(--br);
  transition: box-shadow var(--td) var(--ttf);
  display: flex;
  align-items: stretch;
  flex-direction: column;
  gap: 1rem;

  &:hover {
    box-shadow: 0px 0.5rem 2.5rem rgba(var(--black), 0.15);
  }
`;

const ImageWrapper = styled.div`
  padding: 1rem;
  overflow: hidden;
`

const About = styled.div``;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Category = styled.p``;

const Financial = styled.div``;

const Cost = styled.p``;

const Price = styled.p``;

const Title = styled.h3`
  flex: 1;
  max-width: 30ch;
`;

const Buttons = styled.div`
  display: flex;
  align-items: stretch;
  gap: 0.5rem;
  margin-top: 1rem;

  & > button:first-of-type {
    flex: 1;
  }
`;

export default CardsScroll;

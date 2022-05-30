import Image from "next/image";
import styled from "styled-components";
import Button from "./Button";
import Link from "next/link";

const Card = ({ product, grid }) => {
  const bookmarkIcon = (
    <svg
      className="stroke"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4.9972 21.2499H4.99696C4.91804 21.2499 4.86597 21.2156 4.84061 21.1813C4.79355 21.1175 4.75 21.0185 4.75 20.8638V3.69774C4.75 3.2668 5.21468 2.75 5.8818 2.75H18.1849C18.8157 2.75 19.25 3.23343 19.25 3.69774V20.8639C19.25 21.1034 19.1815 21.1879 19.1626 21.2076C19.1408 21.2303 19.1058 21.25 19.0466 21.25C18.9832 21.25 18.8607 21.2254 18.6658 21.0684L18.6651 21.0679L13.1799 16.6616C12.8548 16.3997 12.4369 16.2799 12.0414 16.2799C11.6469 16.2799 11.2286 16.3991 10.9037 16.6605C10.9034 16.6607 10.9031 16.661 10.9028 16.6612L5.40009 21.0679L5.39836 21.0693C5.21683 21.2155 5.0733 21.2499 4.9972 21.2499Z"
        stroke="#242424"
        strokeWidth="1.5"
      />
    </svg>
  );

  return (
    <Div grid={grid}>
      <Link href={`/product/${product.id}`} passHref>
        <ImageWrapper>
          <Image
            src={product.image || product.images[0]}
            layout="fill"
            alt={product.title}
            objectFit="contain"
          />
        </ImageWrapper>
      </Link>
      <Info>
        <Link href={`/product/${product.id}`} passHref>
          <AboutWrapper>
            <About>
              <Category>{product.category}</Category>
              <Financial>
                {product.cost !== product.price && <Cost>${product.cost}</Cost>}
                <Price>${product.price}</Price>
              </Financial>
            </About>
            <Title grid={grid} className="title">{product.title}</Title>
          </AboutWrapper>
        </Link>
        <Buttons grid={grid}>
          <Button padding=".5em 1em" widthFull text="Add to cart" />
          <Button
            sec
            padding=".5em"
            text={bookmarkIcon}
            altText="Bookmark Icon"
          />
        </Buttons>
      </Info>
    </Div>
  );
};

const Div = styled.div`
  background-color: rgb(var(--FFF));
  padding: 1rem;
  border-radius: var(--br);
  transition: box-shadow var(--td) var(--ttf);
  display: flex;
  align-items: stretch;
  gap: 1rem;
  flex-direction: ${(props) => (props.grid ? "row" : "column")};

  &:hover {
    box-shadow: 0px 0.5rem 2.5rem rgba(var(--black), 0.15);
  }
`;

const ImageWrapper = styled.div`
  margin: .5rem;
  overflow: hidden;
  position: relative;
  aspect-ratio: 1;
  border-radius: var(--br);
  cursor: pointer;
`;

const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block-end: 0.5rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const AboutWrapper = styled.div`
  cursor: pointer;

  &:hover .title {
    text-decoration: underline;
  }
`;

const Category = styled.p`
  font-size: var(--fz-4);
  color: rgba(var(--black), 55%);
`;

const Financial = styled.div`
  text-align: center;
`;

const Cost = styled.p`
  font-size: var(--fz-5);
  color: rgba(var(--black), 55%);
  text-decoration: line-through;
`;

const Price = styled.p`
  font-weight: bold;
`;

const Title = styled.h3`
  flex: 1;
  overflow: hidden;
  margin-block-end: 1rem;
  max-height: 2.8em;
  line-height: 1.4;
  max-width: ${props => props.grid ? "100%" : "25ch"};
`;

const Buttons = styled.div`
  display: flex;
  align-items: stretch;
  gap: 0.5rem;
  margin-block-start: auto;

  & > button:first-of-type {
    flex: ${(props) => (props.grid ? 0 : 1)};
    margin-left: auto;
  }
`;

export default Card;

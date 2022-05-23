import Link from "next/link"
import styled from "styled-components"
import CardsScroll from "./CardsScroll";
import ScrollIndicator from "./ScrollIndicator";

const ProductsCarousel = ({title, all, productsList }) => {
  return (
    <Div>
      <div className="container">
        <Info>
          <Title>{title}</Title>
          <Link href={all}>view all</Link>
        </Info>
        <CardsScroll productsList={productsList} />
        <ScrollIndicator />
      </div>
    </Div>
  )
}

const Div = styled.div`
`

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 1rem; 
`

const Title = styled.h2`
  font-weight: bold;

  & + a {
    text-decoration: underline;
    font-size: var(--fz-4);
    color: rgba(var(--black), .9);

    &:hover {
      color: rgb(var(--black));
    }
  }
`

export default ProductsCarousel

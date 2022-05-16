import Link from "next/link"
import styled from "styled-components"
import CardsScroll from "./CardsScroll";

const ProductsCarousel = ({title, all }) => {
  return (
    <Div>
      <div className="container">
        <Info>
          <Title>{title}</Title>
          <Link href={all}>view all</Link>
        </Info>
        <CardsScroll />
      </div>
    </Div>
  )
}

const Div = styled.div`

`

const Info = styled.div`

`

const Title = styled.h2`

`

export default ProductsCarousel

import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import ProductsGridHeader from "../components/ProductsGridHeader";
import Card from "../components/Card";

const ProductsGrid = ({ prods }) => {
  const router = useRouter();
  const [grid, setGrid] = useState(true);

  return (
    <Div>
      <div className="container">
        <ProductsGridHeader grid={grid} setGrid={setGrid} router={router} />

        <Grid grid={grid}>
          {prods.map((prod) => {
            return <Card grid={grid} key={prod.id} product={prod} />;
          })}
        </Grid>
      </div>
    </Div>
  );
};

const Div = styled.div``;

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.grid ? "1fr" : "repeat(auto-fill, minmax(10rem, 1fr))" };
  gap: 1rem;

  @media (min-width: 800px) {
    grid-template-columns: ${props => props.grid ? "1fr" : "repeat(auto-fill, minmax(14rem, 1fr))" };
  }

`;

export default ProductsGrid;

import styled from "styled-components";
import Card from "./Card";

const CardsScroll = ({ productsList, setScroll }) => {
  const handleScroll = (e) => {
    console.log(e.target.scrollLeft);
    if (e.target.scrollLeft <= 0) {
      setScroll("start");
    } else if (e.target.scrollLeft >= e.target.scrollLeftMax - 0) {
      setScroll("end");
    } else {
      setScroll("");
    }
  };

  return (
    <Div onScroll={handleScroll}>
      {productsList.slice(0, 14).map((product) => (
        <Card key={product.id} product={product} />
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

export default CardsScroll;

export const getServerSideProps = async () => {
  const res = await fetch("/api/products");
  const products = await res.json();

  return { props: { products } };
}
const CardsScroll = ({products}) => {
  console.log(products);
  return (
    <div>
      {JSON.stringify(products)}
    </div>
  )
}

export default CardsScroll

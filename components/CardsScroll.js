export const getStaticProps = async () => {
  const res = await fetch("/api/products");
  const data = await res.json();

  return {
    props: {
      products: data,
    }
  }
}
const CardsScroll = ({products}) => {
  return (
    <div>
      {JSON.stringify(products)}
    </div>
  )
}

export default CardsScroll

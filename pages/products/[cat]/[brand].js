const Products = ({cat,brand}) => {
  console.log(cat);
  console.log(brand);
  return (
    <div>
      {JSON.stringify(cat)}
      {JSON.stringify(brand)}
    </div>
  )
}

export async function getServerSideProps(context) {
  const {cat, brand} = context.params;
  return {
    props: {
      cat, brand
    }
  }
}

export default Products

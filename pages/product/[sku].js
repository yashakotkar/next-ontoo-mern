export default function Product(props) {
  return <div>eygfuehhfeif</div>;
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(`${process.env.BASE_URL}/api/client/product/path`);
  const products = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = products.map((post) => ({
    params: { sku: post.sku },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Call an external API endpoint to get posts
  const res = await fetch(
    `${process.env.BASE_URL}/api/client/product/${params.sku}`
  );
  const product = await res.json();

  return { props: product };
}

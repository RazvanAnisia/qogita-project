import { useState } from "react";
import Layout from "../components/Layout";
import useFetch from "../hooks/useFetch";
import { Product, ProductResponse, ProductsResponse } from "../types";

const GET_PRODUCTS_ENDPOINT = "/api/products";

const HomePage = () => {
  const [page, setPage] = useState(1);

  const { data, error } = useFetch<ProductsResponse>(GET_PRODUCTS_ENDPOINT);
  console.log(data);

  return (
    <Layout>
      <h1>Products</h1>
      {error && <p>There is an error.</p>}
      {!data && <p>Loading...</p>}
      {data && data.results.map((product) => <p>{product.name}</p>)}
    </Layout>
  );
};
export default HomePage;

// add ant d
// might need redux for global state
// might need to use context api with usereducer for rest

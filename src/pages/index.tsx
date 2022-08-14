import { useState } from "react";
import Layout from "../components/Layout";
import useFetch from "../hooks/useFetch";
import { ProductsResponse } from "../types";
import { Spin } from "antd";
import React from "react";

import { GET_PRODUCTS_ENDPOINT } from "../constants";
import ProductList from "../components/ProductList";

const HomePage = () => {
  const [page, setPage] = useState(1);

  const { data, error } = useFetch<ProductsResponse>(
    `${GET_PRODUCTS_ENDPOINT}?page=${page}`
  );

  return (
    <Layout>
      <h1>Products</h1>

      {error && <p>There was an error.</p>}
      {!data && (
        <div className="flex justify-center">
          <Spin size="large" />
        </div>
      )}

      {data && data.results.length > 0 && (
        <ProductList
          page={page}
          setPage={setPage}
          products={data.results}
          count={data.count}
        />
      )}
    </Layout>
  );
};
export default HomePage;

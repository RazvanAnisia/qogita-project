import { useContext, useState } from "react";
import Layout from "../components/Layout";
import useFetch from "../hooks/useFetch";
import { Product, ProductsResponse } from "../types";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Col, Card, Row, Pagination, Spin, Button, Typography } from "antd";
import React from "react";

const { Meta } = Card;
const { Paragraph } = Typography;

import "antd/dist/antd.css";

import { AppContext } from "../contexts";
import { addToCart } from "../actions/cart";
import { GET_PRODUCTS_ENDPOINT } from "../constants";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const { dispatch } = useContext(AppContext);

  const { data, error } = useFetch<ProductsResponse>(
    `${GET_PRODUCTS_ENDPOINT}?page=${page}`
  );

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const handleAddProduct = (product: Product) => {
    dispatch(addToCart(product));
  };

  return (
    <Layout>
      <h1>Products</h1>

      {error && <p>There was an error.</p>}
      {!data && (
        <div className="flex justify-center">
          <Spin size="large" />
        </div>
      )}

      <Row gutter={10}>
        {data &&
          data.results.map((product) => {
            const {
              name,
              imageUrl,
              recommendedRetailPrice,
              recommendedRetailPriceCurrency,
            } = product;
            return (
              <Col
                key={product.gtin}
                sm={12}
                md={8}
                lg={4}
                className="centered-col"
              >
                <Card
                  className="category-item-card"
                  hoverable={false}
                  cover={<img alt={name} height={50} src={imageUrl} />}
                  style={{ marginTop: 20 }}
                >
                  <Meta title={name} />
                  <Paragraph ellipsis={{ rows: 1 }}>
                    {`${recommendedRetailPrice}${recommendedRetailPriceCurrency}`}
                  </Paragraph>
                  <br />
                  <Button
                    size="middle"
                    type="primary"
                    icon={<PlusCircleOutlined />}
                    onClick={() => handleAddProduct(product)}
                  >
                    Add
                  </Button>
                </Card>
              </Col>
            );
          })}
      </Row>
      <Pagination
        defaultPageSize={20}
        responsive={true}
        current={page}
        total={data?.count}
        onChange={handlePageChange}
        showSizeChanger={false}
        style={{ marginTop: "20px" }}
      />
    </Layout>
  );
};
export default HomePage;

// create a service that wites products in cookie.localstorage so they are still there after refresh?
// add toast notifications after adding a product to make things more interactive for the user

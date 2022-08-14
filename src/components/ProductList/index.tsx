import { useContext } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Col, Card, Row, Pagination, Button, Typography } from "antd";
import toast, { Toaster } from "react-hot-toast";
import React from "react";
import { AppContext } from "../../contexts";
import { Product } from "../../types";
import { addToCart } from "../../actions/cart";

const { Meta } = Card;
const { Paragraph } = Typography;

interface IProductListProps {
  products: Product[];
  page: number;
  setPage: (page: number) => void;
  count: number;
}

const ProductList = ({ products, page, setPage, count }: IProductListProps) => {
  const { dispatch } = useContext(AppContext);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const handleAddProduct = (product: Product) => {
    dispatch(addToCart(product));
    notify(product.name);
  };

  const notify = (productName: string) =>
    toast(`Added ${productName} to shopping cart`);

  return (
    <>
      <Toaster position="bottom-right" />
      <Row gutter={10}>
        {products &&
          products.map((product) => {
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
        total={count}
        onChange={handlePageChange}
        showSizeChanger={false}
        style={{ marginTop: "20px" }}
      />
    </>
  );
};
export default ProductList;

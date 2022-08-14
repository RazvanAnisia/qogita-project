import { Button, InputNumber, Space, Typography } from "antd";
import { useContext } from "react";
import { AppContext } from "../../contexts";
import { List } from "antd";
import React from "react";
import "antd/dist/antd.css";
import { changeProductQuantity, removeFromCart } from "../../actions/cart";

const { Paragraph } = Typography;

const Cart = () => {
  const { state, dispatch } = useContext(AppContext);
  const { productsInCart } = state;

  if (productsInCart.length > 0) {
    const cartTotal = productsInCart.reduce(
      (previous, current) =>
        (previous += current.recommendedRetailPrice * current.quantity),
      0
    );

    const handleRemoveProduct = (id: string) => {
      dispatch(removeFromCart(id));
    };

    const handleInputBlur = (
      e: React.FocusEvent<HTMLInputElement>,
      id: string
    ) => {
      if (parseInt(e.target.value) === 0) {
        dispatch(removeFromCart(id));
      }
    };

    const handleQuantityChange = (quantity: number, id: string) => {
      if (quantity > 0) {
        dispatch(changeProductQuantity(id, quantity));
      }
    };

    return (
      <div className="flex">
        <List
          itemLayout="vertical"
          size="large"
          dataSource={productsInCart}
          renderItem={(item) => (
            <List.Item
              key={item.gtin}
              actions={[
                <InputNumber
                  min={0}
                  size="small"
                  defaultValue={item.quantity}
                  addonBefore={"Quantity"}
                  onBlur={(e) => handleInputBlur(e, item.gtin)}
                  onChange={(quantity) =>
                    handleQuantityChange(quantity, item.gtin)
                  }
                />,
                <Button
                  size="small"
                  type="primary"
                  onClick={() => handleRemoveProduct(item.gtin)}
                >
                  Remove
                </Button>,
              ]}
              extra={<img width={100} alt="logo" src={item.imageUrl} />}
            >
              <List.Item.Meta
                title={item.name}
                description={`${item.recommendedRetailPrice}
                ${item.recommendedRetailPriceCurrency}
              `}
              />
              {item.categoryName}
            </List.Item>
          )}
        ></List>
        <div className="pt-8 p-6 w-1/3 ">
          <Paragraph>Summary</Paragraph>
          <Paragraph strong>Total: {`€${cartTotal.toFixed(2)}`}</Paragraph>
        </div>
      </div>
    );
  } else {
    return <Paragraph>You have no products in your shopping cart</Paragraph>;
  }
};

export default Cart;

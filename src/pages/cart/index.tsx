import React, { useContext } from "react";
import Cart from "../../components/Cart";
import Layout from "../../components/Layout";
import { AppContext } from "../../contexts";

const CartPage = () => {
  const { state } = useContext(AppContext);

  return (
    <Layout>
      <Cart productsInCart={state.productsInCart} />
    </Layout>
  );
};

export default CartPage;

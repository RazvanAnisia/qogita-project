import Link from "next/link";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { AppContext } from "../../contexts";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const { state } = useContext(AppContext);

  return (
    <div className=" container mx-auto px-4">
      <div className="flex justify-between">
        <strong>Qogita</strong>
        <nav className="">
          <ul className="flex gap-4">
            <li>
              <Link href="/">
                <a className="underline">Products</a>
              </Link>
            </li>
            <li>
              <Link href="/cart">
                <a className="underline">
                  Your Cart <ShoppingCartOutlined />
                  <span>
                    {state.productsInCart.reduce(
                      (previous, current) => previous + current.quantity,
                      0
                    )}
                  </span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {children}
    </div>
  );
};
export default Layout;

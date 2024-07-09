/* eslint-disable react/prop-types */
import Product from "./Product";
import useAppState from "../state/createAppState";
import { useContext } from "react";

export default function ProductList() {
  const context = useAppState();
  const [products, cartList, setCartList, wishList, setWishList] = useContext(
    context.UserContext
  );
  return (
    <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(13rem,_1fr))] place-items-stretch gap-5 product__lis">
      {products.bodyCream.map((product, index, products) => {
        product.isLoved = "#393939";
        return (
          <Product
            product={product}
            index={index}
            products={products}
            key={index}
            wishList={wishList}
          />
        );
      })}
    </div>
  );
}

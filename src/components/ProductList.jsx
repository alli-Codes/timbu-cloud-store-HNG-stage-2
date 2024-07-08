/* eslint-disable react/prop-types */
import Product from "./Product";
import useAppState from "../state/createAppState";
import { useContext } from "react";

export default function ProductList() {
  const context = useAppState();
  const [products] = useContext(context.UserContext);
  return (
    <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(8rem,_1fr))] place-items-stretch gap-4 product__lis">
      {products.map((product, index, products) => (
        <Product
          product={product}
          index={index}
          products={products}
          key={index}
        />
      ))}
    </div>
  );
}

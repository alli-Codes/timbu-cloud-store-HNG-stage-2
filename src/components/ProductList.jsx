/* eslint-disable react/prop-types */
import Product from "./Product";

export default function ProductList({ product }) {
  //   console.log(product, "hey");
  return (
    <div className="flex gap-4 overflow-x-scroll product__list">
      {product.map((product, index) => (
        <Product product={product} key={index} />
      ))}
    </div>
  );
}

/* eslint-disable react/prop-types */
import ProductList from "./ProductList";

export default function CategoryView({ isHidden, bodyCreams }) {
  return (
    <div className={isHidden}>
      {bodyCreams.map((product, index) => (
        <ProductList product={product} key={index} />
      ))}
    </div>
  );
}

import Product from "./Product";

export default function ProductList() {
  return (
    <div className="flex gap-4 overflow-x-scroll product__list">
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}

import Product from "./Product";

export default function ProductList() {
  return (
    <div className="flex gap-4 overflow-auto overscroll-contain product__list">
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}

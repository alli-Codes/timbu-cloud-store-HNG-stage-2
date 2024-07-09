/* eslint-disable react/prop-types */
import ProductList from "./ProductList";

export default function CategoryView({ isHidden }) {
  return (
    <div>
      <div className={isHidden + " flex flex-col p-8 gap-4"}>
        <h1 className="font-bold text-xl text-[#6E6E6E]">Body Lotions</h1>
        <ProductList />
      </div>
      <div className={isHidden + " flex flex-col p-8 gap-4"}>
        <h1 className="font-bold text-xl text-[#6E6E6E]">Cosmetics</h1>
        <ProductList />
      </div>
      <div className={isHidden + " flex flex-col p-8 gap-4"}>
        <h1 className="font-bold text-xl text-[#6E6E6E]">Perfumes</h1>
        <ProductList />
      </div>
    </div>
  );
}

/* eslint-disable react/prop-types */
import ProductList from "./ProductList";
// import useGetProducts from ".././composable/getProducts";

export default function CategoryView({ isHidden }) {
  // const products = useGetProducts();
  // console.log(products, "from view");

  return (
    <div>
      <section className="flex flex-col items-center lg:items-start text-center lg:text-left px-4 lg:px-8">
        <h1 className="font-bold text-2xl text-black">
          The Finest Selection of Products
        </h1>
        <p className=" text-[#6E6E6E]">Shop Premium and Branded Products</p>
      </section>
      <div className={isHidden + " flex flex-col p-8 gap-4"}>
        {/* <h1 className="font-bold text-xl text-[#6E6E6E] text-center md:text-left">
          All
        </h1> */}
        <ProductList />
      </div>
    </div>
  );
}

/* eslint-disable react/prop-types */
import Pagination from "./Pagination";
import ProductList from "./ProductList";
// import useGetProducts from ".././composable/getProducts";

export default function CategoryView() {
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
      <div className={"flex flex-col p-8 gap-4"}>
        <ProductList />
        <Pagination />
      </div>
    </div>
  );
}

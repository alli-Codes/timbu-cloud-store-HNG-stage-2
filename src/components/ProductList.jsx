/* eslint-disable react/prop-types */
import Product from "./Product";
import useAppState from "../state/createAppState";
import { useContext, useEffect, useState } from "react";
import { fetchData } from ".././composable/getProducts";

export default function ProductList() {
  const context = useAppState();
  const { page, setPage } = useContext(context.UserContext);
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const loaderTemplate = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData(page);
        setProducts(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [page]);
  if (loading) {
    return (
      <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(10rem,_1fr))] lg:grid-cols-5 auto-rows-mi place-items-center md:place-items-stretc  gap-5">
        {loaderTemplate.map((i, index) => {
          return (
            <div
              key={index}
              className="bg-[#FFFFFF] w-full max-w-[10rem]  md:max-w-[10rem] lg:max-w-full lg:h-[16rem] py-4 px-4 relative rounded-[1.25rem]"
            ></div>
          );
        })}
      </div>
    );
  }
  return (
    // <div>hey</div>
    <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(10rem,_1fr))] lg:grid-cols-5 auto-rows-mi place-items-center md:place-items-stretc  gap-5">
      {products &&
        products.items?.map((product, index, products) => {
          product.isLoved = "#393939";
          return (
            <Product
              product={product}
              index={index}
              products={products}
              key={index}
            />
          );
        })}
    </div>
  );
}

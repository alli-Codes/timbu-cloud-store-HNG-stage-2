/* eslint-disable react/prop-types */
import Product from "./Product";
import useAppState from "../state/createAppState";
import { useEffect, useState } from "react";
import { fetchData } from ".././composable/getProducts";

export default function ProductList() {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setProducts(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    // <div>hey</div>
    <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(10rem,_1fr))] place-items-center md:place-items-stretch  gap-5">
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

import { createContext, useState } from "react";
import bodyCreams from "../products/bodyCreams.json";

const UserContext = createContext();

export default function useAppState() {
  const [products, setProducts] = useState();
  // localStorage.setItem("productId", "1");
  // const productId = localStorage.getItem("productId");
  // setProductId(productId)
  //   console.log(productId);
  //   const handleProductID = function (data) {
  //     productID.value = data;
  //   };

  return { UserContext, products, setProducts };
}

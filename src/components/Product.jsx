/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import HeartIcon from "../icons/heart-icon";
import { useContext, useState } from "react";
import useAppState from "../state/createAppState";
import useFormat2Currency from "../composable/useFormat2Currency";

export default function Product({ product, index }) {
  const location = useLocation();
  const handleRouting = function () {
    localStorage.setItem("productId", index);
  };
  const isLoved = useState(false);

  return (
    // <a href="/productinfo">
    <div className="bg-[#FFFFFF] max-w-[15rem]  md:max-w-[15rem] py-4 px-8 relative rounded-[1.25rem]">
      <div
        className={
          location.pathname != "/"
            ? "hidden"
            : "bg-[#FAFAFA] p-2 absolute right-0 -translate-x-3 z-10 rounded-full cursor-pointer "
        }
      >
        <HeartIcon id={product.id} product={product} />
      </div>
      <Link to="/productinfo">
        <div className="flex flex-col gap-2 h-full" onClick={handleRouting}>
          <section className="h-full w-full flex items-stretch relative">
            <img
              src={product.productImage}
              className="w-full bg-red-40 object-contain"
              alt=""
            />
          </section>
          <section>
            <h1 className="font-medium truncate">{product.productName}</h1>
            <p className="text-[#626262] text-sm">
              {useFormat2Currency(product.productPrice)}
            </p>
          </section>
        </div>
      </Link>
    </div>
  );
}

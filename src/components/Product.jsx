/* eslint-disable react/prop-types */
import { Link, useLocation, useNavigate } from "react-router-dom";
import HeartIcon from "../icons/heart-icon";
import { useContext, useEffect, useState } from "react";
import useAppState from "../state/createAppState";
import useFormat2Currency from "../composable/useFormat2Currency";

export default function Product({ product, index }) {
  const location = useLocation();

  const navigate = useNavigate();
  const handleRouting = function () {
    // navigate(`/${product.id}`);
    // console.log("hey");
    // localStorage.setItem("productId", "00e23c010d104611a97143034fa60b76");
  };
  const isLoved = useState(false);
  // console.log(product);

  return (
    // <a href="/productinfo">
    <div className="bg-[#FFFFFF] max-w-[10rem]  md:max-w-[10rem] py-4 px-4 relative rounded-[1.25rem]">
      <div
        className={
          location.pathname != "/"
            ? "hidden"
            : "bg-[#FAFAFA] p-2 absolute right-0 -translate-x-3 z-10 rounded-full cursor-pointer "
        }
      >
        <HeartIcon id={index} product={product} />
      </div>
      <Link to={`/${product.id}`}>
        <div
          className="flex flex-col bg-green-40 justify-center gap-2 h-full"
          onClick={handleRouting}
        >
          <section className=" h-40 flex items-stretch relative">
            <img
              src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
              className="w-full h-full bg-red-40 object-cover object-top"
              alt=""
            />
          </section>
          <section>
            <h1 className="font-medium truncate">{product.name}</h1>
            <p className="text-[#626262] text-sm">
              {/* {useFormat2Currency(product.current_price[index].NGN[0])} */}
            </p>
          </section>
        </div>
      </Link>
    </div>
  );
}

/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import HeartIcon from "../icons/heart-icon";

export default function Product({ product, index }) {
  const route = window.location;
  const handleRouting = function () {
    localStorage.setItem("productId", index);
    route.pathname = "/productinfo";
  };
  return (
    // <a href="/productinfo">
    <Link to="/productinfo">
      <div className="flex flex-col gap-2" onClick={handleRouting}>
        <section className="bg-[#FAFAFA] h-full w-full p-4 rounded-lg relative">
          <div className="absolute right-0 -translate-x-2">
            <HeartIcon />
          </div>
          <img src={product.productImage} alt="" />
        </section>
        <section>
          <h1 className="font-medium">{product.productName}</h1>
          <p className="text-[#626262] text-sm">{product.productPrice}</p>
        </section>
      </div>
    </Link>
  );
}

import { Router, useLocation, useRoutes } from "react-router-dom";
import { Link } from "react-router-dom";
import CartIcon from "../icons/cart-icon-2";
import HeartIcon from "../icons/heart-icon-2";
import StoreIcon from "../icons/store-icon";

export default function Menu() {
  const location = useLocation();
  return (
    <div
      className={`${
        location.pathname !== "/"
          ? "hidden"
          : "bg-[#FAFAFA] w-full px-8 py-5 flex justify-between fixed left-0 bottom-0 lg:hidden"
      }`}
    >
      <Link to="/">
        <StoreIcon />
      </Link>
      <Link to="/cart">
        <CartIcon />
      </Link>
      <Link to="/savedproducts">
        <HeartIcon />
      </Link>
    </div>
  );
}

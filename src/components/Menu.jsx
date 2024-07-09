import { Router, useLocation, useRoutes } from "react-router-dom";
import { Link } from "react-router-dom";
import CartIcon from "../icons/cart-icon-2";
import HeartIcon from "../icons/heart-icon-2";
import StoreIcon from "../icons/store-icon";

export default function Menu() {
  const location = useLocation();
  return (
    <div
      className={
        "bg-[#FFFFFF] w-full px-8 py-5 flex justify-between fixed left-0 bottom-0 lg:hidden z-20"
      }
    >
      <Link to="/">
        <StoreIcon color={location.pathname == "/" ? "#C31162" : "#292D32"} />
      </Link>
      <Link to="/cart">
        <CartIcon
          color={location.pathname == "/cart" ? "#C31162" : "#292D32"}
        />
      </Link>
      <Link to="/savedproducts">
        <HeartIcon
          color={location.pathname == "/savedproducts" ? "#C31162" : "#292D32"}
        />
      </Link>
    </div>
  );
}

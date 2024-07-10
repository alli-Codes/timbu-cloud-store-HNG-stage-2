import { Link, useLocation } from "react-router-dom";
import CartIcon from "../icons/cart-icon";
import MenuIcon from "../icons/menu-icon";
import ArrowIcon from "../icons/arrow-icon";

export default function Header() {
  const location = useLocation();
  const handlePageTitle = function () {
    if (location.pathname == "/cart") {
      return (
        <h1 className="w-full text-center text-lg font-medium">My Cart</h1>
      );
    } else if (location.pathname == "/checkout") {
      return (
        <h1 className="w-full text-center text-lg font-medium">
          Payment Method
        </h1>
      );
    } else if (location.pathname == "/savedproducts") {
      return (
        <h1 className="w-full text-center text-lg font-medium">My Wishlist</h1>
      );
    }
  };
  return (
    <>
      {location.pathname != "/" ? (
        <div className="p-8 flex justify-between lg:hidden">
          {location.pathname == "/" ? undefined : (
            <Link to="/">
              <ArrowIcon />
            </Link>
          )}
          {handlePageTitle()}
          {location.pathname == "/" ? (
            <Link to="/cart">
              <CartIcon />
            </Link>
          ) : undefined}
        </div>
      ) : undefined}
    </>
  );
}

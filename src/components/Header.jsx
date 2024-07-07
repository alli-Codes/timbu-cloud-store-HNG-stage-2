import { Link } from "react-router-dom";
import CartIcon from "../icons/cart-icon";
import MenuIcon from "../icons/menu-icon";

export default function Header() {
  return (
    <div className="p-8 flex justify-between lg:hidden">
      <Link to="/">
        <MenuIcon />
      </Link>
      <CartIcon />
    </div>
  );
}

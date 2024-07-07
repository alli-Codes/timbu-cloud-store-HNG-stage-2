import CartIcon from "../icons/cart-icon";
import MenuIcon from "../icons/menu-icon";

export default function Header() {
  return (
    <div className="p-8 flex justify-between lg:hidden">
      <MenuIcon />
      <CartIcon />
    </div>
  );
}

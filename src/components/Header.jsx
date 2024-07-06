import CartIcon from "../icons/cart-icon";
import MenuIcon from "../icons/menu-icon";

export default function Header() {
    return (
        <div className="flex justify-between">
            <MenuIcon />
            <CartIcon />
        </div>
    )
}
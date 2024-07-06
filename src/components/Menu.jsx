import CartIcon from "../icons/cart-icon";
import HeartIcon from "../icons/heart-icon";
import StoreIcon from "../icons/store-icon";

export default function Menu() {
  return (
    <div className="bg-white w-full p-8 flex justify-between fixed left-0 bottom-0">
      <StoreIcon />
      <CartIcon />
      <HeartIcon />
    </div>
  );
}

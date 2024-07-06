import CartIcon from "../icons/cart-icon-2";
import HeartIcon from "../icons/heart-icon-2";
import StoreIcon from "../icons/store-icon";

export default function Menu() {
  return (
    <div className="bg-[#FAFAFA] w-full px-8 py-5 flex justify-between fixed left-0 bottom-0">
      <StoreIcon />
      <CartIcon />
      <HeartIcon />
    </div>
  );
}

import { useContext, useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import Header from "../components/Header";
import useAppState from "../state/createAppState";
import OrderSummary from "../components/OrderSummary";
import Address from "../components/Address";
import { Link } from "react-router-dom";
import deleteFromCart from "../composable/useDeleteFromCart";
import { signal } from "@preact/signals";
import {
  checkCartInLocalStorage,
  removeFromCart,
} from "../composable/cartHandlers";

export default function Cart() {
  const [cart, setCart] = useState(checkCartInLocalStorage());
  console.log(cart);

  const handleRemoveFromCart = function (id) {
    removeFromCart(id);
    setCart(checkCartInLocalStorage());
  };

  return (
    <div className="w-full max-w-[60rem] flex bg-reen-300 justify-center items-center ">
      {cart.length != 0 ? (
        <div className=" w-full lg:py-20 flex flex-col items-center md:items-start md:flex-row lg:self-center gap-8 lg:px-8 relative ">
          <div className="w-full max-w-[30rem] lg:w-[70rem] bg-white px-4 lg:px-10 py-10 flex flex-col">
            {cart.map((product, index) => (
              <CartItem
                key={index}
                product={product}
                index={index}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            ))}
          </div>
          <div className="w-full max-w-[30rem] lg:max-w-[25rem] mb-32 lg:mb-0 flex flex-col gap-4 sticky top-0">
            <OrderSummary products={cart} />
            <Address />
            <div className="px-4 lg:px-0">
              <Link to="/checkout">
                <button className="w-full bg-[#C31162] p-2 text-white text-lg font-semibold rounded">
                  Check Out
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="self-center">
          <h1 className="text-xl">No items in your cart.</h1>
        </div>
      )}
    </div>
  );
}

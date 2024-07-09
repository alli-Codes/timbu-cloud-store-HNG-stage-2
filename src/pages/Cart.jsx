import { useContext, useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import Header from "../components/Header";
import useAppState from "../state/createAppState";
import OrderSummary from "../components/OrderSummary";
import Address from "../components/Address";
import { Link } from "react-router-dom";
import deleteFromCart from "../composable/useDeleteFromCart";
import { signal } from "@preact/signals";

export default function Cart() {
  const [storageItems, setStorageItems] = useState(
    JSON.parse(localStorage.getItem("cartItems"))
  );
  const itemsFromStorage = storageItems;
  const handleDeletion = function (index) {
    itemsFromStorage.splice(index, 1);
    setStorageItems([...itemsFromStorage]);
    localStorage.setItem("cartItems", JSON.stringify(itemsFromStorage));
  };
  return (
    <div className="flex justify-center items-center ">
      {storageItems.length != 0 ? (
        <div className=" w-full max-w-[70rem] lg:py-20 flex flex-col lg:flex-row lg:self-center gap-8 lg:px-8 relative ">
          <div className="lg:w-[40rem] bg-white px-4 lg:px-10 py-10 flex flex-col">
            {storageItems.map((product, index) => (
              <CartItem
                key={index}
                product={product}
                index={index}
                handleDeletion={handleDeletion}
              />
            ))}
          </div>
          <div className="w-[30rem] mb-32 lg:mb-0 flex flex-col gap-4 ">
            <OrderSummary products={storageItems} />
            <Address />
            <div>
              <Link to="/checkout">
                <button className="w-full bg-[#C31162] p-4 text-white text-lg font-semibold rounded-xl">
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

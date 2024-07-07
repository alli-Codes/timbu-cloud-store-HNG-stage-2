import { useContext } from "react";
import CartItem from "../components/CartItem";
import Header from "../components/Header";
import useAppState from "../state/createAppState";
import OrderSummary from "../components/OrderSummary";
import Address from "../components/Address";
import { Link } from "react-router-dom";

export default function Cart() {
  const handleGetItems = JSON.parse(localStorage.getItem("cartItems"));
  return (
    <div className="flex flex-col gap-8 px-8">
      {handleGetItems.map((product, index) => (
        <CartItem key={index} product={product} />
      ))}
      <OrderSummary />
      <Address />
      <div>
        <Link to="/checkout">
          <button
            onClick
            className="w-full bg-[#C31162] p-4 text-white text-lg font-semibold rounded-xl"
          >
            Check Out
          </button>
        </Link>
      </div>
    </div>
  );
}

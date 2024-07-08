import { useContext, useState } from "react";
import Product from "../components/Product";
import useAppState from "../state/createAppState";
import AddIcon from "../icons/add-icon";
import MinusIcon from "../icons/minus-icon";

export default function ProductInfo() {
  const [itemCounter, setItemCounter] = useState(1);
  const [isDisabled, setDisable] = useState(false);
  const context = useAppState();
  const [products] = useContext(context.UserContext);
  const id = localStorage.getItem("productId");
  const product = products[id];
  const { productImage, productName, productDescription, productPrice } =
    product;
  const addToCart = function () {
    product.itemCounter = itemCounter;
    const prevCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (prevCartItems != null) {
      prevCartItems.push(product);
      localStorage.setItem("cartItems", JSON.stringify(prevCartItems));
    } else localStorage.setItem("cartItems", JSON.stringify([product]));
    setDisable(true);
  };

  const incrementItems = function () {
    let counter = itemCounter;
    counter += 1;
    setItemCounter(counter);
  };

  const decrementItems = function () {
    if (itemCounter != 1) {
      let counter = itemCounter;
      counter -= 1;
      setItemCounter(counter);
    }
  };
  return (
    <div className="h-full flex flex-col">
      <section className="flex justify-center">
        <img src={productImage} className="w-[20rem]" alt="" />
      </section>
      <section className="bg-[#F7F7F7] self-stretch p-8 flex flex-col  gap-10 rounded-t-3xl">
        <div className="w-full flex flex-col gap-2">
          <h1 className="font-bold text-lg">{productName}</h1>
          <p className="text-[#626262] text-sm">{productDescription}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="px-2 py-1 flex items-center gap-4 border border-[#C31162] text-xl font-semibold rounded-xl">
            <button onClick={decrementItems}>
              <MinusIcon />
            </button>
            <p className="text-lg">{itemCounter}</p>
            <button onClick={incrementItems}>
              <AddIcon />
            </button>
          </div>
          <p className="font-semibold">{productPrice}</p>
        </div>
        <div>
          <button
            onClick={addToCart}
            className={`${
              !isDisabled ? "bg-[#C31162]" : "bg-[#a29b9e]"
            } w-full p-4 text-white text-lg font-semibold rounded-xl`}
            disabled={isDisabled}
          >
            Add to cart
          </button>
        </div>
      </section>
    </div>
  );
}

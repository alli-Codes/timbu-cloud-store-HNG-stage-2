import { useContext, useState } from "react";
import Product from "../components/Product";
import useAppState from "../state/createAppState";

export default function ProductInfo() {
  const [itemCounter, setItemCounter] = useState(1);
  const [isDisabled, setDisable] = useState(false);
  const context = useAppState();
  const [products] = useContext(context.UserContext);
  const id = localStorage.getItem("productId");
  const product = products[id];
  const { productImage, productName, productPrice } = product;
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
    <div className="flex flex-col ">
      <section>
        <img src={productImage} className="w-[25rem]" alt="" />
      </section>
      <section className="bg-[#F7F7F7] h-full p-8 flex flex-col  gap-10 rounded-t-3xl">
        <div className="w-full  flex flex-col">
          <h1 className="font-bold text-lg">{productName}</h1>
          <p className="">
            dfdjb fdbvdjbvdjvndj vdbnvjdkvdjvndj nvdjvndjvkdjvn djvdnvjdnvjdn
          </p>
        </div>
        <div className="flex justify-between">
          <div className="px-4 py-2 flex items-center gap-6 border border-[#C31162] text-xl font-semibold rounded-xl">
            <button onClick={decrementItems}>-</button>
            <p className="text-lg">{itemCounter}</p>
            <button onClick={incrementItems}>+</button>
          </div>
          <p className="font-semibold">{productPrice}</p>
        </div>
        <div>
          <button
            onClick={addToCart}
            className={`${
              !isDisabled ? "bg-[#C31162]" : "bg-[#777}"
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

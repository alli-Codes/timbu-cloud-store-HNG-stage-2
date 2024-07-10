import { useContext, useEffect, useState } from "react";
import Product from "../components/Product";
import useAppState from "../state/createAppState";
import AddIcon from "../icons/add-icon";
import MinusIcon from "../icons/minus-icon";
import useFormat2Currency from "../composable/useFormat2Currency";
export default function ProductInfo() {
  const [itemCounter, setItemCounter] = useState(1);
  const [isDisabled, setDisable] = useState(false);
  const context = useAppState();
  const [products] = useContext(context.UserContext);
  const id = localStorage.getItem("productId");
  const product = products.bodyCream[id];
  const { productImage, productName, productDescription, productPrice } =
    product;
  const [isAlreadyInCart, setAlreadyInCart] = useState(true);
  const prevCartItems = JSON.parse(localStorage.getItem("cartItems"));
  const checkIfItemExist = function () {
    if (prevCartItems != null) {
      let searched = prevCartItems.findIndex((item) => item.id == id);
      if (searched < 0) setAlreadyInCart(false);
    }
  };
  useEffect(() => checkIfItemExist());
  const addToCart = function () {
    product.itemCounter = itemCounter;
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
    <div className="md:h-[80vh] lg:px-8 flex justify-center items-center">
      <div className="bg-white max-w-[30rem] md:max-w-[60rem] md:p-8 lg:m-10 flex flex-col items-center md:flex-row rounded-lg">
        <section className="max-w-[28rem] md:max-w-[28rem] flex justify-center">
          <img src={productImage} className="w-full object-cover" alt="" />
        </section>
        <section className="self-stretch p-8 lg:px-16 flex flex-col justify-center gap-10 rounded-t-3xl">
          <div className="w-full flex flex-col gap-2">
            <h1 className="font-bold text-[#74330B] text-lg lg:text-2xl">
              {productName}
            </h1>
            <p className="text-[#626262] text-sm">{productDescription}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-semibold">{useFormat2Currency(productPrice)}</p>
            <div className="px-2 py-1 flex items-center gap-2  text-xl font-semibold rounded-xl">
              <button
                onClick={decrementItems}
                className="bg-[#E0B185] p-1 rounded"
              >
                <MinusIcon />
              </button>
              <p className="w-10 flex justify-center text-sm">{itemCounter}</p>
              <button
                onClick={incrementItems}
                className="bg-[#E0B185] p-1 rounded"
              >
                <AddIcon />
              </button>
            </div>
          </div>
          <div>
            {!isAlreadyInCart ? (
              <button
                onClick={addToCart}
                className={`${
                  !isDisabled ? "bg-[#E0B185]" : "bg-[#a29b9e]"
                } w-full p-2 text-white text-lg  rounded`}
                disabled={isDisabled}
              >
                Add to cart
              </button>
            ) : undefined}
          </div>
        </section>
      </div>
    </div>
  );
}

import { useContext, useEffect, useState } from "react";
import MinusIcon from "../icons/minus-icon";
import AddIcon from "../icons/add-icon";
import useAppState from "../state/createAppState";
import useFormat2Currency from "../composable/useFormat2Currency";

export default function VaryCartItem({ itemPrice }) {
  const context = useAppState();
  const { newItemPrice, setNewItemPrice } = useContext(context.UserContext);
  const [itemCounter, setItemCounter] = useState(1);
  const cartItemProperty = {
    numberOfItem: itemCounter,
    newPriceOfItem: newItemPrice,
  };

  const incrementItems = function () {
    let counter = itemCounter;
    counter += 1;
    setItemCounter(counter);
    setNewItemPrice(counter * itemPrice);
    console.log(cartItemProperty);
  };

  const decrementItems = function () {
    if (itemCounter != 1) {
      let counter = itemCounter;
      counter -= 1;
      setItemCounter(counter);
      setNewItemPrice(counter * itemPrice);
    }
  };

  useEffect(() => {
    // console.log(cartItemNumber);
  }, [itemCounter]);
  return (
    <div className=" flex flex-col items-center gap-2">
      <div className="px-2 py-1 flex items-center gap-2  text-xl font-semibold rounded-xl">
        <button onClick={decrementItems} className="bg-[#E0B185] p-1 rounded">
          <MinusIcon />
        </button>
        <p className="w-10 flex justify-center text-sm">{itemCounter}</p>
        <button onClick={incrementItems} className="bg-[#E0B185] p-1 rounded">
          <AddIcon />
        </button>
      </div>
      <p className="text-xs">
        {useFormat2Currency(newItemPrice != 0 ? newItemPrice : itemPrice)}
      </p>
    </div>
  );
}

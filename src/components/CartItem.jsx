/* eslint-disable react/prop-types */
import AddIcon from "../icons/add-icon";
import CloseIcon from "../icons/close-icon";
import MinusIcon from "../icons/minus-icon";
import useFormat2Currency from "../composable/useFormat2Currency";
import { removeFromCart } from "../composable/cartHandlers";
import { useState } from "react";

export default function CartItem({
  product,
  index,
  price,
  handleRemoveFromCart,
}) {
  const { name, photos, current_price } = product;
  const [itemCounter] = useState(0);

  return (
    <div className="lg:py-10 py-10 flex items-center relative border- border-[#959595]">
      <section className="w-20">
        <img
          src={`https://api.timbu.cloud/images/${photos[0].url ?? ""}`}
          alt=""
        />
      </section>
      <section className="w-full flex flex-col lg:px-4">
        {/* <div className="lex flex-col"> */}
        <h1 className="max-w-[15rem] font-medium text-wrap">{name}</h1>
        {/* </div> */}
        <div className="flex items-center justify-betwen gap-2 ">
          <p className="text-sm text-[#959595] font-semibold">
            {useFormat2Currency(price)}
          </p>
          {/* <div className="px-2 py-1 flex items-center gap-2  text-xl font-semibold rounded-xl">
            <button className="bg-[#E0B185] p-1 rounded">
              <MinusIcon />
            </button>
            <p className="w-10 flex justify-center text-sm">{itemCounter}</p>
            <button className="bg-[#E0B185] p-1 rounded">
              <AddIcon />
            </button>
          </div> */}
        </div>
        <div
          onClick={() => handleRemoveFromCart(index)}
          className="p-2 absolute top-0 translate-x-4 lg:top-2 right-0 lg:translate-x-2 cursor-pointer"
        >
          <CloseIcon />
        </div>
      </section>
    </div>
  );
}

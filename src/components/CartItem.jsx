/* eslint-disable react/prop-types */
import CloseIcon from "../icons/close-icon";

export default function CartItem({ product }) {
  const { productName, productImage, productPrice, itemCounter } = product;
  return (
    <div className="p-2 flex items-center gap-2 shadow rounded-xl relative">
      <section>
        <img className="w-24" src={productImage} alt="" />
      </section>
      <section className="px-4 relative">
        <div>
          <h1 className="font-medium">{productName}</h1>
          <p className="text-[#626262] text-sm">
            jdcd dcdjnd dvjdnvdm dvd vdnkv{" "}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold">{productPrice}</p>
          <div className="px-4 py-1 flex items-center gap-6 border border-[#C31162] text-xl font-semibold rounded-xl">
            <button onClick>-</button>
            <p className="text-lg">{itemCounter ?? 1}</p>
            <button onClick>+</button>
          </div>
        </div>
        <div className="absolute top-0 right-0">
          <CloseIcon />
        </div>
      </section>
    </div>
  );
}

/* eslint-disable react/prop-types */
import AddIcon from "../icons/add-icon";
import CloseIcon from "../icons/close-icon";
import MinusIcon from "../icons/minus-icon";

export default function CartItem({ product, index, handleDeletion }) {
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
          <div className="px-4 py-1 flex items-center gap-2 border border-[#C31162] text-xl font-semibold rounded-xl">
            <button>
              <MinusIcon />
            </button>
            <p className="text-lg">{itemCounter ?? 1}</p>
            <button>
              <AddIcon />
            </button>
          </div>
        </div>
        <div
          onClick={() => handleDeletion(index)}
          className="absolute top-0 right-0"
        >
          <CloseIcon />
        </div>
      </section>
    </div>
  );
}

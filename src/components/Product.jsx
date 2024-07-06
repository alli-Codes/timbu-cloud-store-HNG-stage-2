/* eslint-disable react/prop-types */
import HeartIcon from "../icons/heart-icon";

export default function Product({ product }) {
  return (
    <div className="flex flex-col gap-2">
      <section className="bg-[#FAFAFA] h-36 w-36 p-4 rounded-lg relative">
        <div className="absolute right-0 -translate-x-2">
          <HeartIcon />
        </div>
        <img src={product.productImage} alt="" />
      </section>
      <section>
        <h1 className="font-medium">{product.productName}</h1>
        <p className="text-[#626262] text-sm">{product.productPrice}</p>
      </section>
    </div>
  );
}

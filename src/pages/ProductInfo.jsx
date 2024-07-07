import { useContext } from "react";
import Product from "../components/Product";
import useAppState from "../state/createAppState";

export default function ProductInfo() {
  const context = useAppState();
  const [products] = useContext(context.UserContext);
  const id = localStorage.getItem("productId");
  const product = products[id];
  const { productImage, productName, productPrice } = product;
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
            <button>-</button>
            <p className="text-lg">1</p>
            <button>+</button>
          </div>
          <p className="font-semibold">{productPrice}</p>
        </div>
        <div>
          <button className="bg-[#C31162] w-full p-4 text-white text-lg font-semibold rounded-xl">
            Add to cart
          </button>
        </div>
      </section>
    </div>
  );
}

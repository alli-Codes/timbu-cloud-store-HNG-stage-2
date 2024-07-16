import { useContext } from "react";
import Product from "../components/Product";
import useAppState from "../state/createAppState";

export default function WishList() {
  const context = useAppState();
  const { wishIndex, products } = useContext(context.UserContext);
  return (
    <div className="w-full lg:max-w-[80rem] px-8 py-20 ">
      {wishIndex.length != 0 ? (
        <div className="flex flex-col gap-4">
          <h1>Items in your wishlist.</h1>
          <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(10rem,_1fr))] lg:grid-cols-5 auto-rows-mi place-items-center md:place-items-stretc  gap-5">
            {wishIndex.map((item, index) => (
              <Product
                product={products.items[item]}
                index={index}
                key={index}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="self-center">
          <h1 className="text-xl">No items in your wishlist.</h1>
        </div>
      )}
    </div>
  );
}

import { useContext } from "react";
import Product from "../components/Product";
import useAppState from "../state/createAppState";

export default function WishList() {
  const context = useAppState();
  const { wishList, setWishList } = useContext(context.UserContext);
  return (
    <div className="w-full max-w-[50rem] px-8 py-20 flex flex-col gap-4">
      <h1>Items in your wishlist.</h1>
      {wishList.length != 0 ? (
        <div className="w-full  grid grid-cols-[repeat(auto-fill,_minmax(8rem,_1fr))]  flex-wrap md:place-items-stretch gap-5">
          {wishList.map((product, index) => (
            <Product product={product} index={index} key={index} />
          ))}
        </div>
      ) : (
        <div className="self-center">
          <h1 className="text-xl">No items in your wishlist.</h1>
        </div>
      )}
    </div>
  );
}

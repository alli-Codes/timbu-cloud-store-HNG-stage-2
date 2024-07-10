import { useContext } from "react";
import Product from "../components/Product";
import useAppState from "../state/createAppState";

export default function WishList() {
  const context = useAppState();
  const [products, cartList, setCartList, wishList] = useContext(
    context.UserContext
  );
  return (
    <>
      {wishList.length != 0 ? (
        <div className="w-full max-w-[60rem] px-8 py-20 grid grid-cols-[repeat(auto-fill,_minmax(10rem,_1fr))]  flex-wrap md:place-items-stretch gap-5">
          {wishList.map((id, index) => (
            <Product
              product={products.bodyCream[id]}
              index={index}
              products={products}
              key={index}
            />
          ))}
        </div>
      ) : (
        <div className="self-center">
          <h1 className="text-xl">No items in your wishlist.</h1>
        </div>
      )}
    </>
  );
}

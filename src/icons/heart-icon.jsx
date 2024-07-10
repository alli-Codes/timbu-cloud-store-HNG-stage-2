import { useContext, useState } from "react";
import useAppState from "../state/createAppState";
import { useLocation } from "react-router-dom";

export default function HeartIcon({ id, product }) {
  const location = useLocation();
  const context = useAppState();
  const [products, cartList, setCartList, wishList, setWishList] = useContext(
    context.UserContext
  );
  const [isLoved, setIsLoved] = useState(product.isLoved ?? false);
  const [isLovedColor, setLovedColor] = useState("#6E6E6E");
  wishList.includes(id)
    ? (product.isLoved = "red")
    : (product.isLoved = "#6E6E6E");
  return (
    <svg
      onClick={() => {
        setIsLoved(!isLoved);
        setLovedColor(!isLoved ? "red" : "#6E6E6E");
        if (!wishList.includes(id)) {
          wishList.push(id);
        } else {
          wishList.splice(wishList.indexOf(id), 1);
        }
      }}
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="vuesax/outline/heart">
        <g id="heart">
          <path
            id="Vector"
            d="M9.25 16.2375C9.0175 16.2375 8.7925 16.2075 8.605 16.14C5.74 15.1575 1.1875 11.67 1.1875 6.51745C1.1875 3.89245 3.31 1.76245 5.92 1.76245C7.1875 1.76245 8.3725 2.25745 9.25 3.14245C10.1275 2.25745 11.3125 1.76245 12.58 1.76245C15.19 1.76245 17.3125 3.89995 17.3125 6.51745C17.3125 11.6775 12.76 15.1575 9.895 16.14C9.7075 16.2075 9.4825 16.2375 9.25 16.2375ZM5.92 2.88745C3.9325 2.88745 2.3125 4.51495 2.3125 6.51745C2.3125 11.64 7.24 14.49 8.9725 15.0825C9.1075 15.1275 9.4 15.1275 9.535 15.0825C11.26 14.49 16.195 11.6475 16.195 6.51745C16.195 4.51495 14.575 2.88745 12.5875 2.88745C11.4475 2.88745 10.39 3.41995 9.7075 4.34245C9.4975 4.62745 9.0175 4.62745 8.8075 4.34245C8.11 3.41245 7.06 2.88745 5.92 2.88745Z"
            fill={product.isLoved}
          />
        </g>
      </g>
    </svg>
  );
}

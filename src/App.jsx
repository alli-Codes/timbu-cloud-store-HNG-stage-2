import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ProductInfo from "./pages/ProductInfo";
import useAppState from "./state/createAppState";
import { useState } from "react";
import bodyCreams from "./products/bodyCreams.json";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import WishList from "./pages/WishList";

export default function App() {
  const context = useAppState();
  const { UserContext } = context;
  const [products, setUser] = useState(bodyCreams);
  const [cartList, setCartList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [productId, setProductId] = useState(0);
  return (
    <UserContext.Provider
      value={[
        products,
        cartList,
        setCartList,
        wishList,
        setWishList,
        productId,
        setProductId,
      ]}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/productinfo" element={<ProductInfo />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/savedproducts" element={<WishList />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Layout>
        <RouterProvider router={router} />
      </Layout> */}
    </UserContext.Provider>
  );
}

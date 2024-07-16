import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ProductInfo from "./pages/ProductInfo";
import useAppState from "./state/createAppState";
import { useEffect, useState } from "react";
import bodyCreams from "./products/bodyCreams.json";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import WishList from "./pages/WishList";
// import Page from "./pages/Page";

export default function App() {
  const context = useAppState();
  const { UserContext } = context;
  const [products, setProducts] = useState();
  const [cartList, setCartList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [productId, setProductId] = useState(0);
  const [page, setPage] = useState(1);
  const [wishIndex, setWishIndex] = useState([]);
  return (
    <UserContext.Provider
      value={{
        products,
        setProducts,
        cartList,
        setCartList,
        wishList,
        setWishList,
        wishIndex,
        setWishIndex,
        productId,
        setProductId,
        page,
        setPage,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* <Route path="/:page" element={<Home />} /> */}
            <Route path="/:productId" element={<ProductInfo />} />
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

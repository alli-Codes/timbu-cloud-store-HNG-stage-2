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

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/productinfo",
//     element: <ProductInfo />,
//   },
// ]);

export default function App() {
  const context = useAppState();
  const { UserContext } = context;
  const [products, setUser] = useState(bodyCreams);
  const [productId, setProductId] = useState(0);
  return (
    <UserContext.Provider value={[products, productId, setProductId]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/productinfo" element={<ProductInfo />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
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

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ProductInfo from "./pages/ProductInfo";
import useAppState from "./state/createAppState";
import { useState } from "react";
import bodyCreams from "./products/bodyCreams.json";

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
            <Route path="productinfo" element={<ProductInfo />} />
            {/* <Route path="contact" element={<Contact />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

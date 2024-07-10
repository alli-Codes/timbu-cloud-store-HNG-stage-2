import { useLocation } from "react-router-dom";
import Category from "../components/Category";
import CategoryView from "../components/CategoryView";
import Search from "../components/Search";
import { useContext, useEffect } from "react";
import bodyCreams from "../products/bodyCreams.json";
import useAppState from "../state/createAppState";
import HeroSection from "../components/HeroSection";
import Banner from "../components/Banner";

export default function Home() {
  const context = useAppState();
  const [products, productId] = useContext(context.UserContext);
  // console.log(productId);
  const route = useLocation();
  useEffect(() => {}, [route]);
  return (
    <div className="lg:max-w-[80rem] flex flex-col gap-10 ">
      <HeroSection />
      <Banner />
      <CategoryView
        isHidden={
          route.hash == "#bodycreams" || route.hash == "" ? "" : "hidden"
        }
        bodyCreams={bodyCreams}
      />
    </div>
  );
}

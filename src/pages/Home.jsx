import { useLocation } from "react-router-dom";
import Category from "../components/Category";
import CategoryView from "../components/CategoryView";
import Search from "../components/Search";
import { useEffect } from "react";
import bodyCreams from "../products/bodyCreams.json";

export default function Home() {
  const route = useLocation();
  useEffect(() => {}, [route]);
  return (
    <div className="lg:self-center flex flex-col gap-8 relative">
      <Search />
      <Category />
      <CategoryView
        isHidden={
          route.hash == "#bodycreams" || route.hash == "" ? "" : "hidden"
        }
        bodyCreams={bodyCreams}
      />
      <CategoryView
        isHidden={route.hash == "#makeups" ? "" : "hidden"}
        bodyCreams={bodyCreams}
      />
      <CategoryView
        isHidden={route.hash == "#perfumes" ? "" : "hidden"}
        bodyCreams={bodyCreams}
      />
    </div>
  );
}

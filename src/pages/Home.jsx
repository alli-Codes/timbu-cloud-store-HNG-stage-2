import { useLocation } from "react-router-dom";
import Category from "../components/Category";
import CategoryView from "../components/CategoryView";
import Search from "../components/Search";
import { useEffect } from "react";
import bodyCreams from "../products/bodyCreams.json";

export default function Home() {
  const route = useLocation();
  useEffect(() => {
    console.log(route.hash, "from home");
  }, [route]);
  return (
    <div className="flex flex-col gap-8 relative">
      <Search />
      <Category />
      <CategoryView
        isHidden={route.hash == "#bodycreams" ? "" : "hidden"}
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

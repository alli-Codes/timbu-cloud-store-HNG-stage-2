import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Category() {
  const handle = () => {
    console.log(route.hash);
  };
  const route = useLocation();
  useEffect(() => {
    console.log(route.hash, "from effect");
  }, [route]);
  return (
    <div className="flex flex-col gap-4">
      <section>
        <h1 className="text-[#0E0E0E] text-xl font-semibold">Best Products</h1>
        <p className="text-[#626262]">Choose from Categories</p>
      </section>

      <section className="flex justify-between items-center text-[#626262]">
        <a
          href="#bodycreams"
          onClick={handle}
          className={`h-8 px-2 py-1.5 flex items-center rounded-lg text-white ${
            route.hash == "#bodycreams" || route.hash == ""
              ? "bg-[#C31162]"
              : "bg-[#EFEFEF]"
          }`}
        >
          Body creams
        </a>
        <a
          href="#makeups"
          onClick={handle}
          className={`h-8 px-2 py-1.5 flex items-center rounded-lg text-white ${
            route.hash == "#makeups" ? "bg-[#C31162]" : "bg-[#EFEFEF]"
          }`}
        >
          Makeups
        </a>
        <a
          href="#perfumes"
          onClick={handle}
          className={`h-8 px-2 py-1.5 flex items-center rounded-lg text-white ${
            route.hash == "#perfumes" ? "bg-[#C31162]" : "bg-[#EFEFEF]"
          }`}
        >
          Perfumes
        </a>
      </section>
    </div>
  );
}

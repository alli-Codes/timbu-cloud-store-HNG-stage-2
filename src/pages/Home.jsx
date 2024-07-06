import Category from "../components/Category";
import Menu from "../components/Menu";
import ProductList from "../components/ProductList";
import Search from "../components/Search";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 relative">
      <div className="sticky top-0 z-10">
        <Search />
        <Category />
      </div>
      <ProductList />
      <ProductList />
      <ProductList />
      <Menu />
    </div>
  );
}

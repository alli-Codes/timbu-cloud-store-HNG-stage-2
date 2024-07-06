import Category from "../components/Category";
import Menu from "../components/Menu";
import ProductList from "../components/ProductList";
import Search from "../components/Search";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 relative">
      <Search />
      <Category />
      <ProductList />
      <ProductList />
      <Menu />
    </div>
  );
}

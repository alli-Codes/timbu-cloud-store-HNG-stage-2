import { Link } from "react-router-dom";

export default function Header2() {
  return (
    <div className="w-full bg-[#FAFAFA] py-4 flex justify-center">
      <div className="w-full  max-w-[80rem] flex justify-between">
        <h1 className="font-bold">LuxeLook</h1>
        <nav className="flex gap-8">
          <Link to="/">Home</Link>
          <Link to="/cart">My Cart</Link>
          <Link to="/savedProducts">Wishlist</Link>
        </nav>
      </div>
    </div>
  );
}

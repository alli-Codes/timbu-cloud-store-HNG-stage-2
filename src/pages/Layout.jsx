import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/Menu";

export default function Layout() {
  return (
    <div className="bg-white flex flex-col gap-8 relative">
      <Header />
      <Outlet />
      <Menu />
    </div>
  );
}

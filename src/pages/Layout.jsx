/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Header2 from "../components/Header2";

export default function Layout() {
  return (
    <div className="flex flex-col mb-12 lg:items-center relative">
      <div className="lg:hidden">
        <Header />
      </div>
      <div className="hidden lg:flex w-full sticky top-0 z-20">
        <Header2 />
      </div>
      <Outlet />
      <Menu />
    </div>
  );
}

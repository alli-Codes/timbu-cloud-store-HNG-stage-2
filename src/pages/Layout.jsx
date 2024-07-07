/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/Menu";

export default function Layout() {
  return (
    <div className="bg-white mb-10 flex flex-col relative">
      <Header />
      <Outlet />
      <Menu />
    </div>
  );
}

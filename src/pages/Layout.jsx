/* eslint-disable react/prop-types */
import Header from "../components/Header";
import Menu from "../components/Menu";

export default function Layout({ children }) {
  return (
    <div className="bg-white flex flex-col gap-8 relative">
      <Header />
      {children}
      <Menu />
    </div>
  );
}

import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout () {
    return (
        <div className="bg-white p-8 flex flex-col gap-8">
            <Header />
            <Outlet />
        </div>
    )
}
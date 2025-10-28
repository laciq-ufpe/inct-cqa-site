import { useLocation } from 'react-router-dom';
import { NavLink } from "react-router";

const Header = () => {
    const location = useLocation();

    return (
        <div className="w-full px-30 mt-5 fixed top-0 z-10">
            <div
                className="
                    w-full h-20 rounded-2xl bg-neutral-800/25
                    relative flex flex-row items-center justify-between"
            >
                <div className="w-full h-20 rounded-2xl bg-red-800/25 blur-lg absolute top-0 z-1"></div>
                <h1 className="font-bold text-xl ml-20 z-2">INCT-CQA</h1>
                <div className="flex flex-row gap-x-7 mr-20 z-2">
                    <NavLink to={"/"}>
                        <p className="text-lg" style={(location.pathname === '/') ? {color: "var(--color-red-500)", fontWeight: "600"} : {}}>Home</p>
                    </NavLink>
                    <NavLink to="/about">
                        <p className="text-lg" style={(location.pathname === '/about') ? {color: "var(--color-red-500)", fontWeight: "600"} : {}}>Sobre</p>
                    </NavLink>
                    <p className="text-lg">Institutos</p>
                    <p className="text-lg">Membros</p>
                </div>
            </div>
        </div>
    )
}

export default Header;
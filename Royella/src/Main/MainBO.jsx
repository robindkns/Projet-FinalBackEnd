import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HelmetChanger from "../Shared/Helmet/Helmet";
import { Outlet } from "react-router-dom";
import NavbarBO from "../BackOffice/Components/NavbarBO/NavbarBO";

export default function MainBO() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <>
            <HelmetChanger title="Back Office" />
            <div className="flex bg-[#1e1e1e] w-screen h-screen">
                <NavbarBO className="w-20" />
                <div className="w-[80%] flex justify-center items-center " >
                    <div className="w-[90%] h-[90%] bg-[#252525] rounded-md">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}
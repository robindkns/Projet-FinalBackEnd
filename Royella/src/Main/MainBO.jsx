import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HelmetChanger from "../Shared/Helmet/Helmet";
import { Outlet } from "react-router-dom";

export default function MainBO() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    
    return (
        <>
            <HelmetChanger title="Back Office" />
            <div>
                <Outlet />
            </div>
        </>
    )
}
import React from "react";
import Home from "../../pages/Home/Home";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Main = () => {
    return (
        <div className="main-layout">
            <Home />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;

import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Main = () => {
    return (
        <div className="main-layout">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;

import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "../../styles/Main.css";

const Main = () => {
    return (
        <div className="main-layout">
            <NavBar />
            <section className="">
                <Outlet />
            </section>
            <Footer />
        </div>
    );
};

export default Main;

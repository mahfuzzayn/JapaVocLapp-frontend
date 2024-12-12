import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
        <div className="home">
            <NavBar />
            <Footer />
        </div>
    );
};

export default Home;

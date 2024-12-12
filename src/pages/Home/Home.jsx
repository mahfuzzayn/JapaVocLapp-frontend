import React from "react";
import { useUser } from "../../context/UserContext";

const Home = () => {
    const { user } = useUser()

    console.log(user);

    return <div className="home">Home Route</div>;
};

export default Home;

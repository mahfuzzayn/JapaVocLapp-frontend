import React, { useEffect } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const { user, loading } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(user);

        if (loading) return;
        if (user) {
            navigate("/lessons");
        } else {
            navigate("/login");
        }
    }, [user, loading, navigate]);

    if (loading) {
        return (
            <div className="home flex flex-col items-center my-5">
                <h2 className="text-2xl font-semibold">Loading...</h2>
                <span className="loading loading-dots loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="home flex flex-col items-center my-5">
            <h2 className="text-2xl font-semibold">
                {user
                    ? "Redirecting to Lessons Page"
                    : "Redirecting to Login Page"}
            </h2>
            <span className="loading loading-dots loading-lg"></span>
        </div>
    );
};

export default Home;

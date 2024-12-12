import React, { useEffect } from "react";
import { useUser } from "../../components/Lesson/context/UserContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const { user } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/lessons");
        } else {
            navigate("/login");
        }
    }, [user, navigate]);

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

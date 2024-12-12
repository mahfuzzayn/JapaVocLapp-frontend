import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useUser } from "../../components/Lesson/context/UserContext";
import axios from "axios";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const { login } = useUser();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:5000/api/v1/users/register",
                {
                    name,
                    email,
                    password,
                }
            );

            const loginResponse = await axios.post(
                "http://localhost:5000/api/v1/users/login",
                {
                    name,
                    password,
                }
            );

            const { token, user } = loginResponse.data.data;

            localStorage.setItem("token", token);
            login(user);

            const from = location.state?.from || "/";
            navigate(from);
        } catch (err) {
            setError("Error registering or logging in user. Please try again.");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-96 p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="input input-bordered w-full"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="input input-bordered w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            className="input input-bordered w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <button type="submit" className="btn btn-primary w-full">
                        Register
                    </button>
                </form>
                <p className="mt-4 text-center">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-500">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register;

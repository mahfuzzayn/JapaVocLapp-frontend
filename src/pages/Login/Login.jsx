import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "../../components/Lesson/context/UserContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const { login } = useUser();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:5000/api/v1/users/login",
                { email, password }
            );
            const userData = { email, token: response.data.data.token };

            login(userData);

            navigate("/");
        } catch (err) {
            setError("Invalid credentials.");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-96 p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="input text-white input-bordered w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            className="input text-white input-bordered w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <button type="submit" className="btn btn-primary w-full">
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center">
                    Don't have an account?{" "}
                    <a href="/register" className="text-blue-500">
                        Register
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;

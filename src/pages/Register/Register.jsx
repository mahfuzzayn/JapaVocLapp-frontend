import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "../../context/UserContext"; // Import useUser

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const { login } = useUser(); // Get login function from context
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/v1/users/register", {
                name,
                email,
                password,
            });

            const loginResponse = await axios.post(
                "http://localhost:5000/api/v1/users/login",
                { email, password }
            );
            const userData = { email, token: loginResponse.data.data.token };

            login(userData);

            navigate("/");
        } catch (err) {
            setError("Error creating account.");
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
                            placeholder="Full Name"
                            className="input text-white input-bordered w-full"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
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

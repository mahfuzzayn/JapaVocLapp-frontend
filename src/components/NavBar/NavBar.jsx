import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="flex-1">
                <Link className="btn btn-ghost text-2xl font-bold" to="/">
                    Learn Japanese Vocabularies
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 text-[17px] font-medium">
                    <li>
                        <Link to="/lessons">Lessons</Link>
                    </li>
                    <li>
                        <Link to="/tutorials">Tutorials</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
                <div className="navbar-start hidden">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <a>Homepage</a>
                            </li>
                            <li>
                                <a>Portfolio</a>
                            </li>
                            <li>
                                <a>About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;

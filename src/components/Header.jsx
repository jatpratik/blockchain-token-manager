import React from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import './Header.css';

const Header = () => {
    let isAuthenticated = true;
    const navigate = useNavigate()
    const logout = () => {
        // Implement logout logic here
        isAuthenticated = false;
        navigate('/');
        // Redirect to login page or perform necessary cleanup
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">AppName</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink
                                    to="/dashboard"
                                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                >
                                    Dashboard
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/profile"
                                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                >
                                    Profile
                                </NavLink>
                            </li>
                            {isAuthenticated && (
                                <li className="nav-item">
                                    <button className="btn btn-danger" onClick={logout}>Logout</button>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;

import React, { useState } from 'react';
import './LoginPage.css'; // Import the CSS file for styles
import {useNavigate} from "react-router-dom";

const LoginPage = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        navigate('/dashboard')
        // Add your login logic here
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">Welcome Back!</h1>
                <p className="login-subtitle">Please sign in to your account</p>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">
                        Sign In
                    </button>
                </form>
                {/*<p className="login-footer">*/}
                {/*    Don’t have an account? <a href="/register">Sign up</a>*/}
                {/*</p>*/}
            </div>
        </div>
    );
};

export default LoginPage;

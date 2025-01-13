import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#f8f9fc' }}>
            <div className="text-center">
                <h1 className="display-1 text-danger font-weight-bold">404</h1>
                <p className="lead text-muted">Oops! The page you're looking for doesn't exist.</p>
                <button className="btn btn-primary btn-lg" onClick={handleGoHome}>
                    Go Back to Home
                </button>
            </div>
        </div>
    );
};

export default NotFoundPage;

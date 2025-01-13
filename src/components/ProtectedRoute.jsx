import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import MainLayout from "./MainLayout";

const ProtectedRoute = () => {
    const isAuthenticated = true;

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    } else {
        console.log("hello protected route")
        return  <MainLayout />
    }

};

export default ProtectedRoute;

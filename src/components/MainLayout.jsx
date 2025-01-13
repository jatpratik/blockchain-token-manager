import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const MainLayout = () => {

    console.log("hello header")

    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default MainLayout;

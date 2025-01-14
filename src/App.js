import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from "./components/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header";


const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <>
        {/*<Header/>*/}
        <DashboardPage />
        </>)
  },
  // {
  //   path: '/',
  //   element: (
  //       <ProtectedRoute>
  //       </ProtectedRoute>
  //   ),
  //   children: [
  //     {
  //       path: 'dashboard',
  //       element: <DashboardPage />,
  //     },
  //
  //   ],
  // },
  {
    path: '*',
    element: <NotFoundPage />, // 404 page
  },
]);

const App = () => (
      <RouterProvider router={router} />
);
export default App;

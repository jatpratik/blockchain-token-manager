import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from "./components/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";


const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />, // Login page without a header
  },
  {
    path: '/',
    element: (
        <ProtectedRoute>
        </ProtectedRoute>
    ),
    children: [
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },

    ],
  },
  {
    path: '*',
    element: <NotFoundPage />, // 404 page
  },
]);

const App = () => (
      <RouterProvider router={router} />
);
export default App;

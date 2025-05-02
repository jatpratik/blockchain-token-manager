import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import {AppDataProvider} from "./context/AppDataContext";


const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <>
        <DashboardPage />
        </>)
  },
  {
    path: '*',
    element: <NotFoundPage />, // 404 page
  },
]);

const App = () => (
  <AppDataProvider>
      <RouterProvider router={router} />
  </AppDataProvider>
);
export default App;

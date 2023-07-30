import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './components/pages/error/ErrorPage.jsx';
import OrderPage from './components/pages/order/OrderPage.jsx';
import LoginPage from './components/pages/login/LoginPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />
  },
  {
      path: "/order/:name",
      element: <OrderPage />,
      errorElement: <ErrorPage />
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

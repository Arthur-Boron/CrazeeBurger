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
import { ToastContainer } from 'react-toastify';
import { styled } from 'styled-components';
import { theme } from './theme';
import { AuthProvider } from './provider/AuthProvider';

const router = createBrowserRouter([
  {
    path: '*',
    element: <ErrorPage />
  },
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />
  },
  {
      path: "/order",
      element: <OrderPage />,
      errorElement: <ErrorPage />
  }
]);

const ToastContainerStyled = styled(ToastContainer)`
  .Toastify__progress-bar--info {
    background: ${theme.colors.primary};
  }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainerStyled />
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)



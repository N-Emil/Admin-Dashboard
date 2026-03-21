import { createRoot } from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import './index.css'
import ErrorPage from '@views/ErrorPage'
import Dashboard from '@views/Dashboard'
import Product_Form from "@views/Product_Form";
import Products from "@views/Products";
import Login from "./views/Login";
import Product_Detail from "@views/Product_Detail";
import ProtectedRoute from "./validation/ProtectedRoute";
import ThemeProvider from "./context/ThemeContext";
import AuthProvider from "./context/AuthContext";
import App from './App'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/login" replace />
    },
    {
        path: "login",
        Component: Login
    },
    {
        path: "/app",
        element: (
            <ProtectedRoute>
                <App />
            </ProtectedRoute>
        ),
        children: [
            {
                path: "dashboard",
                Component: Dashboard
            },
            {
                path: "product_form",
                Component: Product_Form
            },
            {
                path: "product",
                Component: Products
            },
            {
                path: "product/:id",
                Component: Product_Detail
            }
        ]
    },
    {
        path: "*",
        Component: ErrorPage
    }
])

createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    </AuthProvider>
)
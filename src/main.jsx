import { createRoot } from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import './index.css'
import ErrorPage from '@views/ErrorPage'
import Dashboard from '@views/Dashboard'
import Products from "@views/Products";
import Tables from "@views/Tables";
import Login from "./views/Login";
import ProtectedRoute from "./validation/ProtectedRoute";
import App from './App'
import ThemeProvider from "./context/ThemeContext";

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
                path: "products",
                Component: Products
            },
            {
                path: "tables",
                Component: Tables
            }
        ]
    },
    {
        path: "*",
        Component: ErrorPage
    }
])

createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <RouterProvider router={router} />
    </ThemeProvider>
)
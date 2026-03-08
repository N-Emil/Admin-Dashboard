import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import ErrorPage from '@views/ErrorPage'
import Dashboard from '@views/Dashboard'
import Products from "@views/Products";
import Tables from "@views/Tables";
import App from './App'

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        errorElement: <ErrorPage />,
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
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
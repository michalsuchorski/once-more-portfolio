import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { Home } from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />
    },
    {
        path: '/home',
        element: <Home />
    }    
])
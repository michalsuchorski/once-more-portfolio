import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Homepage from '../pages/Homepage'
import { Marynarki } from "../pages/Marynarki";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/marynarki',
        element: <Marynarki />
    },
])
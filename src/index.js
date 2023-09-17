import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";


import './index.css';
import Projects from './Pages/projects';




const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/Projects",
        element: <Projects />,
    },
    {
        path: "/*",
        element: <div>page not found, go to home:</div>,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

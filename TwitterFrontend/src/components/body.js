import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home";
import Login from "./Login";
import Profile from "./Profile";
import Feed from "./feed";
import Existing from "./existing account";

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            children: [
                {
                    path:"/",
                    element: <Feed/>
                },
                {
                    path:"/profile",
                    element:<Profile />
                }
            ]
        },
        {
            path: "/Login",
            element: <Login />,
        },

    ]);

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
};

export default Body;

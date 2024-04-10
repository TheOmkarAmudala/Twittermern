import React from 'react';
import Rightsidebar from "./rightsidebar";
import Leftsiderbar from "./leftsidebar";
import {Outlet} from "react-router-dom"

const Home = () => {
    return (
        <div className="flex ">
            <Leftsiderbar />
            <Outlet />
            <Rightsidebar />
        </div>
    )
}

export default Home
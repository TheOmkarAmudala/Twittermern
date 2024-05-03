import React from 'react';
import Rightsidebar from "./rightsidebar";
import Leftsiderbar from "./leftsidebar";
import {Outlet} from "react-router-dom"
import {useSelector} from "react-redux";
import {getotherusers} from "../redux/useslice";
import useGetuser from "../hooks/useGetusers";
import useTweet from "../hooks/useTweet"



const Home = () => {
    const {user, otherusers} = useSelector(store => store.user)
    useGetuser(user?._id)
    useTweet(user?._id)

    return (
        <div className="flex ">
            <Leftsiderbar />
            <Outlet />
            <Rightsidebar otherusers = {otherusers}/>
        </div>
    )
}

export default Home
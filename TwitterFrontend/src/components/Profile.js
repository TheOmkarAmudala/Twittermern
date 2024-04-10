import React from "react";
import {Link} from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Avatar from "react-avatar";
import Tweet from "./Tweet";

const Profile = () => {
    return (
        <div className="w-[40%] border border-gray-100 h-[25%]">
            <div className="flex h-10 items-center">
                <div className="rounded-full hover:bg-gray-200 mr-5 ml-4 w-10 h-10 flex items-center pr-4">
                    <FaArrowLeft size="20px" className="ml-3"/>
                </div>
                <Link to={"/"} >
                <div className="font-bold">
                    Omkar_Amudala
                </div>
                </Link>
            </div>
               <img src="https://i.pinimg.com/originals/4b/87/4d/4b874d0d6635651c47537cab2d03967b.jpg" alt={"hsd"} />
           <div className="absolute mb-10 top-[200px] ml-8 ">
            <Avatar className="border-2 border-white" src='https://th.bing.com/th/id/OIP.j-X3_4gjV2-JKwu4A_M9egHaLJ?w=202&h=305&c=7&r=0&o=5&dpr=1.3&pid=1.7' size={120} round={true}  />
            </div>
            <div className="mt-20 ml-3">
            <h1 className="font-bold">Omkar_Amudala</h1>
            <h2 className="text-gray-500">@theomkar_Gaaru</h2>
            <h3 className="mt-3">Dream companies are Microsoft and Google</h3>
            <h3 className="text-gray-500 mt-2">Joined on January 2022</h3>
                <div className="flex mt-1">
                    <div className="flex">
                        <h1>
                            446
                        </h1>
                        <h1>Followering </h1>
                    </div>
                    <div className="flex">
                        <h1>....30.8K</h1>
                        <h1>Followers</h1>
                    </div>
                </div>
            </div>
            <Tweet />
        </div>
    );
}

export default Profile;
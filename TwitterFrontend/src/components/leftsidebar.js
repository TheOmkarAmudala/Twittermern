import React from 'react';
import { IoLogoTwitter, IoSearch   } from "react-icons/io5";
import { IoIosList,IoMdPerson, IoIosMore  } from "react-icons/io";
import { RiHome5Line ,RiMessage3Fill, RiCommunityFill } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import { FaSlash } from "react-icons/fa";
import { TbLetterXSmall } from "react-icons/tb";
import {Link} from "react-router-dom";

const leftsiderbar = () => {
    return (
        <div className='my-10  w-[25%] text-xl  ' >
            <div className="flex w-40 justify-end mb-5">
                <IoLogoTwitter size='40px'/>
            </div>
            <div
                className="flex  items-center mb-3 mx-auto px-5 py-3 hover:bg-gray-200 hover:cursor-pointer w-[160px] h-15 rounded-full">
                <div>
                    <RiHome5Line className="size-7"/>
                </div>
                <Link to={"/"}>
                <h1 className='font-semibold ml-5 text-gray-700' >Home</h1>
                </Link>
            </div>

            <div
                className="flex items-center mb-3 mx-auto px-5 py-2 hover:bg-gray-200 hover:cursor-pointer w-[160px] h-15 rounded-full">
                <div>
                    <IoSearch  className="size-7"/>
                </div>
                <h1 className='font-semibold ml-5 text-gray-700'>Explore</h1>
            </div>

            <div
                className="flex items-center mb-3 mx-auto px-11 py-2 hover:bg-gray-200 hover:cursor-pointer w-[220px] h-15 rounded-full">
                <div>
                    <BsBell  className="size-7"/>
                </div>
                <h1 className='font-semibold ml-5 text-gray-700'>Notifiications</h1>
            </div>

            <div
                className="flex items-center mb-3 mx-auto px-5 py-2 hover:bg-gray-200 hover:cursor-pointer w-[160px] h-15 rounded-full">
                <div>
                    <RiMessage3Fill className="size-7"/>
                </div>
                <h1 className='font-semibold ml-5 text-gray-700'>Message</h1>
            </div>

            <div
                className="flex items-center mb-3 mx-auto px-5 py-2 hover:bg-gray-200 hover:cursor-pointer w-[160px] h-15 rounded-full">
                <div>
                    <FaSlash  className="size-7"/>
                </div>
                <h1 className='font-semibold ml-5 text-gray-700'>Grok</h1>
            </div>

            <div
                className="flex items-center mb-3 mx-auto px-5 py-2 hover:bg-gray-200 hover:cursor-pointer w-[160px] h-15 rounded-full">
                <div>
                    <IoIosList  className="size-7"/>
                </div>
                <h1 className='font-semibold ml-5 text-gray-700'>List</h1>
            </div>

            <div
                className="flex items-center mb-3 mx-auto px-5 py-2 hover:bg-gray-200 hover:cursor-pointer w-[160px] h-15 rounded-full">
                <div>
                    <TbLetterXSmall className="size-7"/>
                </div>
                <h1 className='font-semibold ml-5 text-gray-700'>Premium</h1>
            </div>

            <div
                className="flex items-center mb-2 mx-auto px-5 py-2 hover:bg-gray-200 hover:cursor-pointer w-[160px] h-15 rounded-full">
                <div>
                    <IoMdPerson  className="size-7"/>
                </div>
                <Link to={"/Profile/${id}"}>
                <h1 className='font-semibold ml-5 text-gray-700'>Profile</h1>
                </Link>
            </div>

            <div
                className="flex items-center mb-3 mx-auto px-5 py-2 hover:bg-gray-200 hover:cursor-pointer w-[160px] h-15 rounded-full">
                <div>
                    <IoIosMore className="size-7"/>
                </div>
                <h1 className='font-semibold ml-5 text-gray-700'>More</h1>
            </div>



            <div>

            </div>
        </div>


    )
}

export default leftsiderbar
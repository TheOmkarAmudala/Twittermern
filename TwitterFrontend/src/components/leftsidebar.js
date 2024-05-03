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
        <div className='my-10  w-[25%]  ' >
            <div className="flex w-40 justify-end mb-5">
                <IoLogoTwitter size='40px'/>
            </div>
            <div
                className="flex items-center mb-3 mx-auto px-2 py-2 hover:bg-gray-200 hover:cursor-pointer w-[160px] h-10 rounded-full">
                <div>
                    <RiHome5Line className="size-7"/>
                </div>
                <Link to={"/"}>
                <h1 className='font-semibold ml-2 ' >Home</h1>
                </Link>
            </div>

            <div
                className="flex items-center mb-3 mx-auto px-2 py-2 hover:bg-gray-200 hover:cursor-pointer w-[160px] h-10 rounded-full">
                <div>
                    <IoSearch  className="size-7"/>
                </div>
                <h1 className='font-semibold ml-2'>Explore</h1>
            </div>

            <div
                className="flex items-center mb-3 mx-auto px-2 py-2 hover:bg-gray-200 hover:cursor-pointer w-[160px] h-10 rounded-full">
                <div>
                    <BsBell  className="size-7"/>
                </div>
                <h1 className='font-semibold ml-2'>Notifiications</h1>
            </div>

            <div
                className="flex items-center mb-3 mx-auto px-2 py-2 hover:bg-gray-200 hover:cursor-pointer w-[160px] h-10 rounded-full">
                <div>
                    <RiMessage3Fill className="size-7"/>
                </div>
                <h1 className='font-semibold ml-2'>Message</h1>
            </div>

            <div
                className="flex items-center mb-3 mx-auto px-2 py-2 hover:bg-gray-200 hover:cursor-pointer w-[160px] h-10 rounded-full">
                <div>
                    <FaSlash  className="size-7"/>
                </div>
                <h1 className='font-semibold ml-2'>Grok</h1>
            </div>

            <div
                className="flex items-center mb-3 mx-auto px-2 py-2 hover:bg-gray-200 hover:cursor-pointer w-[160px] h-10 rounded-full">
                <div>
                    <IoIosList  className="size-7"/>
                </div>
                <h1 className='font-semibold ml-2'>List</h1>
            </div>

            <div
                className="flex items-center mb-3 mx-auto px-2 py-2 hover:bg-gray-200 hover:cursor-pointer w-[160px] h-10 rounded-full">
                <div>
                    <TbLetterXSmall className="size-7"/>
                </div>
                <h1 className='font-semibold ml-2'>Premium</h1>
            </div>

            <div
                className="flex items-center mb-2 mx-auto px-2 py-2 hover:bg-gray-200 hover:cursor-pointer w-[160px] h-10 rounded-full">
                <div>
                    <IoMdPerson  className="size-7"/>
                </div>
                <Link to={"/Profile/${id}"}>
                <h1 className='font-semibold ml-2'>Profile</h1>
                </Link>
            </div>

            <div
                className="flex items-center mb-3 mx-auto px-2 py-2 hover:bg-gray-200 hover:cursor-pointer w-[160px] h-10 rounded-full">
                <div>
                    <IoIosMore className="size-7"/>
                </div>
                <h1 className='font-semibold ml-2'>More</h1>
            </div>
            <button className='px-4 py-2 ml-11 mt-6 border-none text-md bg-[#1D98F0] w-[70%] h-14 font-semibold rounded-full'>Post</button>


            <div>

            </div>
        </div>


    )
}

export default leftsiderbar
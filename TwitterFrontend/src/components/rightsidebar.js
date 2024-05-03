import React from 'react';
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";
import Trending from "./Trending"
import {Link} from "react-router-dom";

const rightsidebar = ({otherusers}) => {


    return (
      <div className="ml-[30px]">
          <div className="flex gap-9 bg-gray-100 rounded-full w-[330px] h-[50px] items-center mt-5 ">
              <div className="ml-3">
                  <CiSearch size="30px" />
              </div>
              <input type="search" placeholder="Search" className=" bg-gray-100 h-[40px] outline-none  placeholder:Search" />
          </div>
          <div className="w-[115%] bg-gray-100 p-3 mt-5 rounded-3xl flex-col flex gap-3">
              <h1 className="font-bold my-4"> Who to follow</h1>
              {
                  otherusers?.map((user)=> {
                      return (<div key={user?._id} className="flex justify-evenly">
                          <div>
                              <Avatar
                                  src='https://th.bing.com/th/id/OIP.j-X3_4gjV2-JKwu4A_M9egHaLJ?w=202&h=305&c=7&r=0&o=5&dpr=1.3&pid=1.7'
                                  size={40} round={true}/>
                          </div>
                          <div className="w-[55%] items-center ml-[10px]">
                              <h3>{user.name}</h3>
                              <h4 className='text-gray-500'>@{user.username}</h4>
                          </div>
                          <div>
                              <Link to={`/profile/${user?._id}`}>
                              <button className="bg-black text-white rounded-full h-8 w-[80px] font-semibold">Profile
                              </button>
                              </Link>
                          </div>
                      </div>)
                  })
              }


          </div>
          <div className="bg-gray-100 h-[55%] w-[115%] rounded-3xl flex flex-col gap-2 mt-6 ">
              <h1 className="font-bold w-[100%] items-center mt-6 ml-6">What's happening</h1>
              <Trending/>
              <Trending/>
              <Trending/>
              <Trending/>


          </div>
      </div>
    )
}

export default rightsidebar
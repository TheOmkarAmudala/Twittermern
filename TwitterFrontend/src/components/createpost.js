import React from 'react';
import Avatar from 'react-avatar'
import { CiImageOn ,CiGift, CiLocationOn} from "react-icons/ci";
import { IoIosOptions } from "react-icons/io";
import { MdEmojiEmotions, MdOutlineCancelScheduleSend  } from "react-icons/md";
import { API_KEY_TWEET } from "../utensiles/constants"
import toast from "react-hot-toast"
import { getAllTweets, getIsActive, getRefresh } from '../redux/Tweetslice';
import  { useState } from 'react';

import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
const Createpost = () => {
    const [description, setDescription] = useState("");
    const {user} = useSelector(store => store.user);
    const dispatch = useDispatch();
    const submitHandler = async() => {
         try{
             const res= await axios.post(`${API_KEY_TWEET}/createtweet`, {description, id:user?._id}, {withCredentials: true
             });
             dispatch(getRefresh());
             if(res.data.success){
                 toast.success(res.data.message);
             }
         }catch (e){
             toast.error(e.response.data.message);
            console.log(e)
         }
        setDescription("");
    }
    return (
        <div className="w-[100%] border border-gray-100 ">
            <div className='flex items-center justify-evenly w-[100%]  h-10 my-8 '>
                <div>
                    <h1 className='font-bold text-gray-600 text-lg cursor-pointer h-10 align-middle'> For You</h1>
                </div>
                <div>
                    <h1 className='font-bold text-gray-600  cursor-pointer h-10'>Following</h1>
                </div>
            </div>
            <div className='flex gap-3 my-4'>
                <div className='rounded-full ml-5'>
                    <Avatar src='https://th.bing.com/th/id/OIP.j-X3_4gjV2-JKwu4A_M9egHaLJ?w=202&h=305&c=7&r=0&o=5&dpr=1.3&pid=1.7' size={40} round={true}  />
                </div>
                <div className=" w-[100%]" >
                    <div>
                        <input   value={description}
                                 onChange={(e) => setDescription(e.target.value)} style={{border: 'none', fontSize:24}} placeholder='What is happening?' className="outline-none border-none w-[600px]"/>
                    </div>
                    <div className='flex justify-between w-[80%] mt-[30px]'>
                    <div className='flex gap-3 mt-6'>
                         <CiImageOn size='22px'/>
                        <CiGift size='22px' />
                        <IoIosOptions size='22px'/>
                        <MdEmojiEmotions size='22px'/>
                        <CiLocationOn size='22px'/>
                        <MdOutlineCancelScheduleSend size='22px' />
                    </div>
                        <div><button onClick={submitHandler} className='bg-blue-300 rounded-full w-[100px] h-9 text-white '> Post</button></div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Createpost
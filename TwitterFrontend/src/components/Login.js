import react, {useState} from "react";
import { IoLogoTwitter, IoSearch   } from "react-icons/io5";

import {Link} from "react-router-dom";



const Login = () => {
    const  [isLogin,setLogin]= useState(true)

    function loginhandler() {
        setLogin(!isLogin);
    }
    return(
        <div className="w-screen h-screen items-center flex justify-evenly">
            <div>
                < IoLogoTwitter size="500px"/>
            </div>
            <div className="h-[60%] flex flex-col  justify-evenly">
               <div className="h-40 flex flex-col justify-between">
                   <h1 className="text-7xl font-bold">Happening now</h1>
                   <h2 className="font-bold text-4xl">Join today</h2>
               </div>
                <form className="flex flex-col h-[300px] justify-evenly">
                    {
                        isLogin && (<>
                        <input type="name" placeholder="name"
                               className="w-[300px] h-[30px] pl-3 rounded-3xl border border-gray-300 outline-none"/>
                        <input type="password" placeholder="password"
                               className="w-[300px] h-[30px] pl-3 rounded-full border border-gray-300 outline-none"/>
                        </>)
                        }

                        <input type="email" placeholder="email"
                               className="w-[300px] h-[30px] pl-3 rounded-full border border-gray-300 outline-none"/>
                        <input type="username" placeholder="username"
                               className="w-[300px] h-[30px] pl-3 rounded-full border border-gray-300 outline-none"/>
                        <h1 className="mt-5">{isLogin ? "No Acoount, No problem " : "Login"} <span className="text-blue-500 font-bold" onClick={loginhandler}> {isLogin ? "Register Here" :" Click Here"}</span></h1>
                        <button type="submit" className="bg-blue-500 h-9 text-white w-20 rounded-full mt-5">{!isLogin ? "login" : "SignUp"}</button>

                        </form>

                        </div>
                        </div>
                        );
                    }

                    export default Login
import react, {useState} from "react";
import { IoLogoTwitter, IoSearch   } from "react-icons/io5";
import { API_KEY_USER } from "../utensiles/constants"
import axios from "axios"
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";


import {Link} from "react-router-dom";
import toast from "react-hot-toast";
import {getuser} from "../redux/useslice";



const Login = () => {
    const  [isLogin,setLogin]= useState(true)
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");
    const [name, setname] = useState("");
    const navigate = useNavigate()
    const dispatch = useDispatch();


    const submit = async (e) => {
        e.preventDefault();

        const loginPromise = new Promise(async (resolve, reject) => {
            if (isLogin) {
                try {
                    const res = await axios.post(`${API_KEY_USER}/register`, { name, email, username, password },{
                        headers:{
                            'content-type':"application/json"
                        },
                        withCredentials:true
                    });
                    dispatch(getuser(res?.data?.existingUser));

                    if(res.data.success){
                        resolve(res.data.message);
                    }
                    navigate("/");
                } catch (e) {
                    console.log(e);
                    reject(e.res.data.message);
                }
            } else {
                try {
                    const res = await axios.post(`${API_KEY_USER}/login`, { email, password },{ headers:{
                            'content-type':"application/json"
                        },
                        withCredentials:true});
                    console.log(res);
                    dispatch(getuser(res?.data?.existingUser));
                    if(res.data.success){
                        resolve(res.data.message);
                    }
                    navigate("/");
                } catch (e) {
                    console.log(e);
                    reject(e);
                }
            }
        });

        toast.promise(
            loginPromise,
            {
                loading: 'Logging in...',
                success: (res) => res,
                error: (err) => err
            }
        );
    };

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
                <form className="flex flex-col h-[300px] justify-evenly" onSubmit={submit}>
                    {
                        isLogin && (<>
                            <input type="name" value={name} onChange={(e) => setname(e.target.value)} placeholder="name"
                                   className="w-[300px] h-[30px] pl-3 rounded-3xl border border-gray-300 outline-none"/>
                            <input type="username" value={username} onChange={(e) => setusername(e.target.value)}
                                   placeholder="username"
                                   className="w-[300px] h-[30px] pl-3 rounded-full border border-gray-300 outline-none"/>

                        </>)
                    }

                    <input type="password" value={password} onChange={(e) => setpassword(e.target.value)}
                           placeholder="password"
                           className="w-[300px] h-[30px] pl-3 rounded-full border border-gray-300 outline-none"/>
                    <input type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder="email"
                           className="w-[300px] h-[30px] pl-3 rounded-full border border-gray-300 outline-none"/>

                    <h1 className="mt-5">{isLogin ? "No Acoount, No problem " : "Login"} <span
                        className="text-blue-500 font-bold"
                        onClick={loginhandler}> {isLogin ? "Register Here" : " Click Here"}</span></h1>
                    <button type="submit"
                            className="bg-blue-500 h-9 text-white w-20 rounded-full mt-5">{!isLogin ? "login" : "SignUp"}</button>

                </form>

            </div>
        </div>
    );

}

export default Login
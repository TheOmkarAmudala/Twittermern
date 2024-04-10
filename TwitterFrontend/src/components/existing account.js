import react from "react";
import {Link} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";
import {FaApple} from "react-icons/fa";


function Existing () {
    return (
        <div>
            <div className="flex flex-col h-[300px] justify-evenly">
                <Link to={"/"}>
                    <button
                        className="border border-gray-300 rounded-full h-12 flex items-center justify-evenly w-[300px]">
                        <div className="w-9 h-9 bg-green-900 text-white items-center pl-3 flex rounded-full">
                            A
                        </div>
                        <div className="">
                            <h2 className="font-semibold text-sm">
                                Sign in as Amudala
                            </h2>
                            <h2 className="text-gray-500 text-sm">
                                omkaramudala2@gmail.com
                            </h2>
                        </div>
                        <div>
                            <FcGoogle size="30px"/>
                        </div>
                    </button>
                </Link>
                <button className="border border-gray-300 rounded-full w-[300px] h-12 flex justify-center items-center">
                    <div>
                        <FaApple size="30px"/>
                    </div>
                    <div>
                        Sign up with Apple
                    </div>
                </button>
                <div className="w-[300px] flex items-center justify-center">Or</div>
                <button
                    className="bg-blue-500 w-[300px] h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    create account
                </button>
                <h2 className="text-sm text-gray-500">By signing up, you agree to the terms of service and
                    privacy <br></br> policy, including Cookie Use</h2>
            </div>
            <div>
                <div className="font-bold">
                    Already have an account
                </div>
                <div className="mt-5">
                    <button
                        className="flex items-center justify-center border border-gray-300 w-[300px] h-12 rounded-full">Sign
                        in
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Existing;
import axios from "axios";
import {API_KEY_USER} from "../utensiles/constants";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getotherusers, getTweet, getuser} from "../redux/useslice";

const useTweet = (id) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchTweet = async () => {
            try {
                const res = await axios.get(`${API_KEY_USER}/getAllTweets/${id}`, {
                    withCredentials: true
                });
                dispatch(getTweet(res.data.profile))
            } catch (e) {
                console.error(e);
            }
        };
        fetchTweet();
    }, []); // Add id and dispatch to the dependency array
};

export default useTweet;

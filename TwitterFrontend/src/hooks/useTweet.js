import axios from "axios";
import {API_KEY_USER} from "../utensiles/constants";
import {useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import { getAllTweets} from "../redux/Tweetslice";


const useTweet = (id) => {
    const dispatch = useDispatch();
    const {refresh} = useSelector(store => store.tweet);
    const fetchMyTweets = async () => {
        // Log to see if function is called
        try {
            const res = await axios.get(`http://127.0.0.1:3000/api/v1/user/getAllTweets/${id}`, {
                withCredentials: true
            });
            dispatch(getAllTweets(res.data));
        } catch (error) {
            console.log(error); // Log any errors
        }
    };

    useEffect(() => {
         // Log to see if useEffect is triggered
        if (id) {
            fetchMyTweets(); // Call fetchMyTweets when id changes
        }
    }, [refresh]);

    // No need to return anything
};


export default useTweet;

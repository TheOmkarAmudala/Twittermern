import axios from "axios";
import {API_KEY_USER} from "../utensiles/constants";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getMyProfile} from "../redux/useslice";

const useGetProfile = (id) => {
    const dispatch = useDispatch();
    useEffect(() => {

            const fetchMyprofile = async () => {
                try {
                    const res = await axios.get(`${API_KEY_USER}/profile/${id}`, {
                        withCredentials: true
                    });
                    dispatch(getMyProfile(res.data.User))
                } catch (e) {
                    console.error(e);
                }

            };
            if (id) {
                fetchMyprofile();
            }

    }, [id,dispatch]); // Add id and dispatch to the dependency array
};


export default useGetProfile;

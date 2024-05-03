import axios from "axios";
import {API_KEY_USER} from "../utensiles/constants";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getotherusers, getuser} from "../redux/useslice";

const useGetuser = (id) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchOtheruser = async () => {
            try {
                const res = await axios.get(`${API_KEY_USER}/all_profiles/${id}`, {
                    withCredentials: true
                });
                console.log(res)
                dispatch(getotherusers(res.data.otherusers))
            } catch (e) {
                console.error(e);
            }
        };
        fetchOtheruser();
    }, []); // Add id and dispatch to the dependency array
};

export default useGetuser;

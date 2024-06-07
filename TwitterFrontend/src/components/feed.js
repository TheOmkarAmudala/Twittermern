import React from 'react';
import Createpost from "./createpost";
import Tweet from "./Tweet"; // Assuming this import is correct
import { useSelector } from "react-redux";

const Feed = () => {
    const { tweets } = useSelector(store => store.tweet);

    return (
        <div className='w-[40%] border-gray-200'>
            <Createpost />
            {tweets?.map((tweet) => (
                <Tweet key={tweet.id} tweet={tweet} /> // Make sure to return the component
            ))}
        </div>
    );
}

export default Feed;

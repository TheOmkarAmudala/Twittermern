import React from 'react';
import Createpost from "./createpost";
import Tweet from "./Tweet";

const Feed = () => {
    return (
        <div className='w-[50%] border-gray-200'>
            <Createpost />
            <Tweet />
        </div>
    )
}

export default Feed
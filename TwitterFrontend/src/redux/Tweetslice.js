import {createSlice} from "@reduxjs/toolkit";
const tweetslice = createSlice({
    name:"tweet",
    initialState:{
        tweets:null,
        refresh:false
    },
    reducers:{
        getAllTweets:(state,action)=>{
            state.tweets = action.payload
        },
        getRefresh:(state) => {
            state.refresh = !state.refresh;
        }
    }
});

export const {getAllTweets,getRefresh} = tweetslice.actions;
export default tweetslice.reducer
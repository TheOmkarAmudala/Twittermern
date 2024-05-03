import {createSlice} from "@reduxjs/toolkit";

const userslice = createSlice({
    name: "user",
    initialState:{
        user:null,
        otherusers:null,
        profile: null,

    },
    reducers:{
        getuser:(state,action)=>{
            state.user = action.payload
        },
        getotherusers:(state,action)=>{
            state.otherusers = action.payload
        },
        getMyProfile:(state, action) => {
            state.profile = action.payload
        }
    }

})


export const {getuser, getotherusers,getMyProfile ,getTweet} = userslice.actions
export default userslice.reducer

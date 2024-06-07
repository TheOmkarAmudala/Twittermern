import {configureStore} from "@reduxjs/toolkit" ;
import userslice from "./useslice"
import tweetslice from "./Tweetslice";


const store = configureStore({
    reducer:{
      user:userslice,
        tweet : tweetslice
    }
})
export default store
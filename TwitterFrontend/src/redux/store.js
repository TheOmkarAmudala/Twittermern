import {configureStore} from "@reduxjs/toolkit" ;
import userslice from "./useslice"


const store = configureStore({
    reducer:{
      user:userslice
    }
})
export default store
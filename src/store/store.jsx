import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "../utils/AuthCheckSlice";


const store = configureStore({
    reducer:{
        LoginSlice,
    }
})

export default store
import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";



const checkLogedin = () => {
    if (localStorage.getItem("isLogedin")) {
        return true;
    } else {
        false;
    }
};

const AuthCheckSlice = createSlice({
    name: "login",

    initialState: {
        isLogedin: checkLogedin(),
    },

    reducers: {
        authCheck: (state,{payload = 'Loged in'}) => {
            state.isLogedin = true;
            toast.success(payload);
            <Navigate to="/" />
        },
        authUncheck: (state) => {
            localStorage.removeItem("isLogedin");
            state.isLogedin = false;
            toast.success("Loged out");
        },
    },
});

export const { authCheck, authUncheck } = AuthCheckSlice.actions;

export default AuthCheckSlice.reducer;

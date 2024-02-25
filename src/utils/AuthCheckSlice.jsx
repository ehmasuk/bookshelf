import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

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
        authCheck: (state) => {
            state.isLogedin = true;
            toast.success("Loged in");
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

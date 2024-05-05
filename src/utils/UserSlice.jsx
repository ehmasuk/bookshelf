import { createSlice } from "@reduxjs/toolkit";

const setUser = () => {
    if (localStorage.getItem("isLogedin")) {
        return JSON.parse(localStorage.getItem("isLogedin"));
    } else return null;
};

const UserSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: setUser(),
    },
});

export default UserSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "../utils/AuthCheckSlice";
import BookSlice from "../utils/BookSlice";
import CartSlice from "../utils/CartSlice";
import UserSlice from './../utils/UserSlice';
import { BooksApi } from "../api/BooksApi";

const store = configureStore({
    reducer: {
        LoginSlice,
        CartSlice,
        BookSlice,
        UserSlice,
        [BooksApi.reducerPath]: BooksApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(BooksApi.middleware),
});

export default store;

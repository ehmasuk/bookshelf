import { createSlice } from "@reduxjs/toolkit";

const BookSlice = createSlice({
    name: "BookSlice",

    initialState: {
        books: null,
        isLoading: false,
        isError: false,
    },

    reducers: {
        getBooks: (state, action) => {
            state.books = action.payload;
        },
    },
});

export const { getBooks } = BookSlice.actions;

export default BookSlice.reducer;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BooksApi = createApi({
    reducerPath: "BooksApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://ehmasuk.github.io/course/" }),

    endpoints: (builder) => ({
        getallBooks: builder.query({
            query: (name)=> `/${name}`,
        }),
    }),
});

export const { useGetallBooksQuery } = BooksApi;

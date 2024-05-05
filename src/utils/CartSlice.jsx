import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";


const countTotalAmount = (cartItems)=>{
    return cartItems.reduce((acc,item)=>{
        acc = acc + Number(item.price.substring(1)) * item.quantity
        return acc
    },0).toFixed(2)
}


const CartSlice = createSlice({
    name: "CartSlice",

    initialState: {
        cartItems: [],
        totalAmount: 0,
    },

    reducers: {
        addtoCart: (state, action) => {
            const isExits = state.cartItems.some((item) => item.id === action.payload.id);
            if (!isExits) {
                state.cartItems = [...state.cartItems, { ...action.payload, quantity: 1 }];
            } else {
                const updateQtn = state.cartItems.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...action.payload, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
                state.cartItems = updateQtn;
            }
            toast.success("Cart updated");
            state.totalAmount = countTotalAmount(state.cartItems)
        },
        removefromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id != action.payload.id);
            state.totalAmount = countTotalAmount(state.cartItems)
        },

    },
});

export const { addtoCart, removefromCart } = CartSlice.actions;

export default CartSlice.reducer;

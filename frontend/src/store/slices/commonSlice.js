import { createSlice } from "@reduxjs/toolkit";

const commonSlice = createSlice({
    name: 'common',
    initialState: {
        quantity: 1,
    },
    reducers: {
        increaseQty: (state) => {
            state.quantity += 1;
        },
        decreaseQty: (state) => {
            if (state.quantity > 1) {
                state.quantity -= 1;
            }
        },
        resetQty: (state) => {
            state.quantity = 1;
        }
    }
});

export const { increaseQty, decreaseQty, resetQty } = commonSlice.actions;
export default commonSlice.reducer;

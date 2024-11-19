import { createSlice } from "@reduxjs/toolkit";
import { customers } from "../../data/dummyData";

const customerMapSlice = createSlice({
    name: 'customerMap',
    initialState:{
        customerMap: customers,
        isloading: false,
        error: null
    },
    reducers:{
        clearError: (state) =>{
            state.error = null
        }
    }
})

export const {clearError} = customerMapSlice.actions;
export default customerMapSlice.reducer;
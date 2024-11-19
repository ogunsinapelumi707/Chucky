import { createSlice } from "@reduxjs/toolkit";
import { customersList } from "../../data/dummyData";
const customerListSlice = createSlice({
    name:'customerList',
    initialState:{
        isloading: false,
        error: null,
        customerList:customersList
    }, reducers:{
        clearError: (state) => {
            state.error = null
        }
    }
})
export const {clearError} = customerListSlice.actions;
export default customerListSlice.reducer;
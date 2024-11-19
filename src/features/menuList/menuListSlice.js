import { createSlice } from "@reduxjs/toolkit";
import {menuData } from "../../data/dummyData"
const menuListSlice = createSlice({
    name:'menuList',
    initialState:{
        isloading: false,
        error: null,
        menuList:menuData
    }, 
    reducers:{
        clearError: (state)=>{
            state.error = null
        }
    }
})

export const {clearError} = menuListSlice.actions;
export default menuListSlice.reducer;
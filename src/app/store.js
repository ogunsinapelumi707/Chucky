import { configureStore } from "@reduxjs/toolkit";
import StatReducer from "../features/stat/stat"
import customerMapReducer from "../features/customerMap/customerMapSlice"
import customerListReducer from "../features/customersList/customerListSlice"
import menuListReducer from "../features/menuList/menuListSlice"
const store = configureStore({
    reducer:{
        stats: StatReducer,
        customerMap: customerMapReducer,
        customerList: customerListReducer,
        menuList:menuListReducer
    }
})

export default store
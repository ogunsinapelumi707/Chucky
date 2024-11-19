import { createSlice } from "@reduxjs/toolkit";

import {stats} from "../../data/dummyData"

const statsSlice = createSlice({
    name: 'stats',
    initialState:{
        stats: stats,
        isLoading: false,
        error: null,
    },
    reducers:{
        clearError: (state) =>{
            state.error = null
        }
    }
})

export const { clearError} = statsSlice.actions;
export default statsSlice.reducer;
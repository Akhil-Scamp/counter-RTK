import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count : 0,
}

export const counter = createSlice({
    name : "counter",
    initialState,
    reducers :{
        increase : (state) =>{state.count +=1},
        decrease : (state) =>{state.count -=1},
    }
})

export const {increase,decrease} = counter.actions

export default counter.reducer
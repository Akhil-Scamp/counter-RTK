import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Features/counter"

const store = configureStore({
    reducer : {
        counter : counterReducer,
    }
})
export default store;
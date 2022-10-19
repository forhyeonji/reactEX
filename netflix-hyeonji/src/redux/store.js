import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import movieReducer from "./reducers/movieReducer";

let store = configureStore({
        reducer:{
            movie : movieReducer,
        },
        middleware: [thunk],
       
        
    });

    console.log("store", store);

export default store;
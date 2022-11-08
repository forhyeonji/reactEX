import { createSlice } from "@reduxjs/toolkit";

let initialState={
    sortMovies : {},
    sortLoading : true,
};


const sortSlice = createSlice({
    name : "sort",
    initialState,
    reducers:{
        getMovieSort(state, action){
            state.sortMovies = action.payload.sortMovies.data;
        },

        getSortFailure(state, action){
            state.sortLoading = false;
        },
    },
});

console.log("12341234", sortSlice)

export const sortActions = sortSlice.actions;
export default sortSlice.reducer;
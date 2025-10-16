import { createSlice } from "@reduxjs/toolkit";

const moviesSlicer = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailorVideo:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        addTrailorVideo:(state,action)=>{
            state.trailorVideo = action.payload
        }
    }
})

export const {addNowPlayingMovies,addTrailorVideo} = moviesSlicer.actions;
export default moviesSlicer.reducer;
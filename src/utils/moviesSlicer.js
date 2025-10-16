import { createSlice } from "@reduxjs/toolkit";

const moviesSlicer = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailorVideo:null,
        topRatedMovies:null,
        upcomingMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        addTrailorVideo:(state,action)=>{
            state.trailorVideo = action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies = action.payload
        }
        
    }
})

export const {addNowPlayingMovies,addTrailorVideo,addTopRatedMovies,addUpcomingMovies} = moviesSlicer.actions;
export default moviesSlicer.reducer;
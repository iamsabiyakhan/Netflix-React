import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlicer";
import moviesReducer from "./moviesSlicer"

const appStore = configureStore({
   reducer :{
     user : userReducer,
     movies :moviesReducer
   }
})
export default appStore;
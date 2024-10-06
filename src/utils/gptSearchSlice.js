import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice=createSlice({
    name:"gpt",
    initialState:{
        gptSearchView:false,
        movieNames:null,
        movieResults:null
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.gptSearchView=!state.gptSearchView
        },
        addGeminiMovies:(state,action)=>{
            const {movieNames,movieResults}=action.payload
         state.movieNames=movieNames
         state.movieResults=movieResults
        }
    }

})
export const {toggleGptSearchView,addGeminiMovies}=gptSearchSlice.actions;
export default gptSearchSlice.reducer;
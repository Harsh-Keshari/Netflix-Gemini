import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        topRatedMovies:null,
        movieDetail:null,
        
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload
        },
       
        addTrailer:(state,action)=>{
            state.trailerVideo=action.payload
        },
        addMovieDetail:(state,action)=>{
            state.movieDetail=action.payload;
        },
        clearTrailerVideo:(state)=>{
            state.trailerVideo=null;

        }

    }
})
 
export const {addNowPlayingMovies,addTrailer,addPopularMovies,addTopRatedMovies,addMovieDetail,clearTrailerVideo}=moviesSlice.actions;
export default moviesSlice.reducer;
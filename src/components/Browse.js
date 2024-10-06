import React from 'react'
import Header from './Header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies.js';
import GptSearchPage from './GptSearchPage.js';
import { useSelector } from 'react-redux';



const Browse = () => {
  
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  const showGptSearch=useSelector((store)=>store.gpt.gptSearchView)

  return (
    <div>
      <Header/>
      { showGptSearch?<GptSearchPage/>:
      <>
        <MainContainer/>
        <SecondaryContainer/>
      </>
      
      }
    
    </div>
  )
}

export default Browse;

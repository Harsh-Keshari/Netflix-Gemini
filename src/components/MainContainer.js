import React from 'react'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import { useSelector } from 'react-redux';


const MainContainer = () => {
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies);
    if(!movies) return null;
    const mainMovie=movies[0];
    
    const {original_title,overview, id}=mainMovie;
 
  return (
    <div className='w-full bg-gradient-to-r from-black '>
      <VideoBackground  movieId={id}  />
      <VideoTitle title={original_title} overview={overview}/>
    </div>
  )
}

export default MainContainer;

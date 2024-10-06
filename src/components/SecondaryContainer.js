import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies=  useSelector((store)=>store.movies)

  if(!movies) return null;

  return (
    <>
    <div className="bg-black ">
      <div className=" md:-mt-40 relative z-20">
      <MovieList listTitle={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList listTitle={"Popular"} movies={movies.popularMovies}/>
      <MovieList listTitle={"Top Rated"} movies={movies.topRatedMovies}/>
     
    </div>
    </div></>
  )
}

export default SecondaryContainer;

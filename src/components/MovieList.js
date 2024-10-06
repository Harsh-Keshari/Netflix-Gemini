import React from 'react'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom';

const MovieList = ({listTitle,movies}) => {
  
    if(!movies) return null;
    
  return (
    <div>
        <div className='mx-2'>
            <h1 className='font-semibold px-3 py-2 text-lg md:text-2xl text-white'>{listTitle}</h1>
            <div className='flex  overflow-x-scroll no-scrollbar  '>
             {   
             movies.map((movie)=>
              <Link to={`/browse/details/${movie.id}`} key={movie.id} >  <MovieCard  posterPath={movie.poster_path}  /> </Link>
             )}
             
            </div>
        </div>
      
    </div>
  )
}

export default MovieList

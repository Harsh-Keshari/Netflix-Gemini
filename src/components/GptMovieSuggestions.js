import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
import { useState } from 'react'

const GptMovieSuggestions = () => {
  


    const gpt=useSelector((store)=>store.gpt)
    const {movieNames,movieResults}=gpt
    if(!movieNames) return null;

  return (
    <div className=' w-full pt-[55%] md:pt-[15%]  md:p-4 bg-black text-white bg-opacity-60 '>
       
        {movieNames.map((movieName,index)=>
        <MovieList key={movieName} listTitle={movieName} movies={movieResults[index]} />
        )}
      </div>
    
  )
}

export default GptMovieSuggestions

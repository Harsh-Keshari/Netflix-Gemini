import React from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import lang  from '../utils/languageConstants'
import { useRef } from 'react'
import geminiModel from '../utils/Gemini'
import { addGeminiMovies } from '../utils/gptSearchSlice'


const GptSearchBar = () => {
    const langKey=useSelector((store)=>store.config.lang)
    const searchText=useRef();
    const dispatch=useDispatch();

    //searching movie in tmdb
    const searchMovieTMDB=async(movie)=>{
        const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS)
        const json=await data.json();
        return json.results; // it will return promises 

    }

  const handleGeminiSearchClick=async()=>{
   
     
    const GemniniQuery="Act as a movie recommendation system and suggest me 5 movies based on the query"+searchText.current.value + ". Also separate them with comma like this example. Example Gadar,Don,Sholay,Kalki,Pushpa"
    const result = await geminiModel.generateContent(GemniniQuery);
    const response= await result.response;
    
    const text = response.text();
   
    const GeminiMovies=text.split(","); // movies are in the form of array
    
    const promiseArray=GeminiMovies.map((movie)=>(searchMovieTMDB(movie)))
    const tmdbResults= await Promise.all(promiseArray);
    
     dispatch(addGeminiMovies({movieNames:GeminiMovies,movieResults:tmdbResults}))

  }



  return (
    <>
   
    <div className='absolute top-[25%] md:top-[20%]  w-full flex justify-center   items-center'>
        <form className='bg-black rounded-xl p-5 ' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} type="text" placeholder={lang[langKey].getSearchPlaceholder} className=' m-3 px-3 w-[50vw] md:h-10 text-lg rounded-xl'></input>
            <button className='text-white bg-red-600 py-1 px-2 mx-2 rounded-lg md:h-10 w-20' onClick={handleGeminiSearchClick}>{lang[langKey].search}</button>
        </form>
      
    </div> </>
  )
}

export default GptSearchBar

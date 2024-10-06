import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { API_OPTIONS, BG_IMG, IMG_CDN_URL } from '../utils/constants';
import { addMovieDetail } from '../utils/moviesSlice';
import { clearTrailerVideo } from '../utils/moviesSlice';





const MovieDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const dispatch = useDispatch();
  const getMovieDetail = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, API_OPTIONS);
    const json = await data.json();
    dispatch(addMovieDetail(json));

  }
  useEffect(() => {

    getMovieDetail();

  }, []);



  const movie = useSelector((store) => store.movies.movieDetail)

  if (!movie) return null;


  const { title, original_language, overview, poster_path, release_date, runtime, vote_average } = movie;

  const handleWatchTrailer = () => {
    dispatch(clearTrailerVideo());
    navigate("watch");
  }
  const handleGoBack = () => {

    navigate("/browse")
  }

  return (
    <>
      <img alt="/" src={BG_IMG} className='h-screen w-screen object-cover fixed ' ></img>
      <div className='absolute top-5 left-10 md:top-28 md:left-48'>
        <div className=' w-[80%] h-[70%] m-5 text-white'>
          <div className=' m-3 bg-yellow bg-red-800 p-4 rounded-xl'>
            <h1 className='font-bold  text-lg md:text-2xl text-center'>{title}</h1>
          </div>
          <div className='  md:flex  m-2  h-[80%] text-sm md:text-xl p-8  bg-black bg-opacity-80 rounded-xl'>
            <div className=' rounded-xl '><img alt="/" src={IMG_CDN_URL + poster_path} className='w-full h-[300px]
          md:h-full rounded-xl object-fill md:object-contain '></img></div>
            <div className=' mx-2 w-[100%]'>
              <div className='p-2 italic font-extralight ' >{overview}</div>
              <div className='p-2'>
                <p className='font-bold '>Release Date :<span className='italic font-light'> {release_date}</span></p>
                <p className='font-bold'>Original Language : <span className='italic font-light'>{original_language}</span></p>
                <p className='font-bold'>Run Time :<span className='italic font-light'> {runtime} min</span></p>
                <p className='font-bold'>IMDB Rating : <span className='italic font-light'>{vote_average}</span></p>
                <div className='flex flex-row justify-end items-center'>
                <button className='bg-red-800  text-sm md:text-xl p-2 my-2 rounded-xl' onClick={handleWatchTrailer}>Watch Trailer</button>
                <span className='px-2'>
                  <button className='bg-red-800 text-sm md:text-xl p-2 m-1 rounded-xl' onClick={handleGoBack}>Go back</button>
                </span>
                </div>
               
              </div>
            </div>
          </div>

        </div></div></>
  )
}

export default MovieDetails

import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideo=useSelector((store)=>store.movies.trailerVideo);
  
  return (
    <>
    <div className="bg-gradient-to-r from-black pt-10 md:pt-0 " >
      <iframe
      
        className="w-full aspect-video  "
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?si=N_lw2QFpFOLmJT8v&autoplay=1&mute=1&controls=0`}
         title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        
        
        
        
       
      ></iframe>
    </div></>
  );
};

export default VideoBackground;

import React from 'react'
import { FaPlay } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' md:absolute w-[90%] sm:top-[20%]  md:top-[35%] md:left-16  md:w-[25%] text-wrap bg-gradient-to-r from-black p-4 rounded-xl '>
        <h1 className='text-lg font-semibold md:font-bold  md:text-3xl text-red-500 p-5'>&nbsp;&nbsp;{title}</h1>
        <p className='text-gray-200 text-sm md:text-lg italic'>{overview}</p>
        <div className='flex items-center  '>
            <button
             className='bg-white text-gray-800 border-gray-600 md:w-[100px] md:h-[50px] text-lg md:text-xl  rounded-lg  flex justify-center  px-2 items-center' 
             ><FaPlay /> &nbsp; Play</button>
              <button
             className='bg-slate-400 bg-opacity-50 text-white border-gray-600 rounded-md  md:h-[50px] text-xl text-nowrap px-2 my-5
             mx-2 flex justify-center items-center ' 
             ><FaInfoCircle/>&nbsp; More Info</button>
        </div>
      
    </div>
  )
}

export default VideoTitle

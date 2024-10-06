import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div>
      <div className='  md:mx-2 my-1  w-28 md:w-40   '>
        <img alt="img" src={IMG_CDN_URL+ posterPath} className='rounded-lg h-36 md:h-64'></img>
        
      </div>
    </div>
  )
}

export default MovieCard

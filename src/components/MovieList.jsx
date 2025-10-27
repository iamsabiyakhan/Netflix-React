import React from 'react'
import MovieCard from './MovieCard'
const MovieList = ({ title, movies }) => {
  
  return (
    movies && (
    <div className='p-4 pl-10'>
        <h1 className='text-lg font-bold mb-2 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
          <div className='flex'>
            {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
            
            ))}
        </div>   
        </div>
    </div>
    )
  )
}

export default MovieList
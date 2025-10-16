import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';
const SecondContainer = () => {
  const movies = useSelector((store)=> store.movies )
  if(!movies) return
  return  (
    movies.nowPlayingMovies &&(
    <div className='  bg-black'>
      <div  className='-mt-60 relative z-20 bg-black-40'>
        
       <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
       <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
       <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>

      </div>
    </div>
    )
  )
}
export default SecondContainer
import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

 const MainContainer = () => {
  const movies = useSelector((store)=>{
    return store.movies?.nowPlayingMovies
  })
  
  if(!movies) return
  const mainMovies = movies[2];
  console.log("main movies",mainMovies);
  const {original_title,overview,id} = mainMovies;
  return (
    <div>
       <VideoTitle title={original_title} overview={overview}/>
       <VideoBackground movieId={id}/>
    </div>
  )
}
export default MainContainer;

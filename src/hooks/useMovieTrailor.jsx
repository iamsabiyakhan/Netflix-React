
import { API_OPTIONS } from '../utils/constants';
import {addTrailorVideo} from '../utils/moviesSlicer'
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
const useMovieTrailor = (movieId) => { 
    const dispatch = useDispatch(); 
        const getMovieVideos = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US',API_OPTIONS);
      
        const json = await data.json();
        
        const filterData = json.results.filter((video)=>video.type==="Trailer");
       
        const trailor = filterData.length ? filterData[1]: json.results[0];
  
       dispatch(addTrailorVideo(trailor));
    }
    useEffect(()=>{
          getMovieVideos();
    },[])
}

export default useMovieTrailor
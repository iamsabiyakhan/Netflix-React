import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import {addUpcomingMovies} from '../utils/moviesSlicer'
import  { useEffect } from 'react'

const useUpcomingMovies =()=>{
   const dispatch = useDispatch();
  const upcomingMovies  = async()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_OPTIONS);
      console.log('data in upcoming movies',data);
      const json = await data.json();
        console.log('i am upcoming',json.results);
        dispatch(addUpcomingMovies(json.results));
      }
      useEffect(()=>{
        upcomingMovies();
      },[])
}

export default useUpcomingMovies;

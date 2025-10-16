
import { API_OPTIONS } from '../utils/constants';
import {addTrailorVideo} from '../utils/moviesSlicer'
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
const useMovieTrailor = (movieId) => { 
    const dispatch = useDispatch(); 
        const getMovieVideos = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US',API_OPTIONS);
        console.log("movie video data",data);
        const json = await data.json();
        console.log("json data",json);
        const filterData = json.results.filter((video)=>video.type==="Trailer");
        //  console.log("filtered data",filterData);
        const trailor = filterData.length ? filterData[1]: json.results[0];
    //    console.log("trailor",trailor);
       dispatch(addTrailorVideo(trailor));
    }
    useEffect(()=>{
          getMovieVideos();
    },[])
}

export default useMovieTrailor
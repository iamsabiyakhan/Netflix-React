import Header from './Header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from './MainContainer';
import SecondContainer from './SecondContainer';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
const Browse = () => {
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)
  useNowPlayingMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <>
     
      <Header/>
      {showGptSearch ? 
      <GptSearch /> :( <>
        <MainContainer/>
        <SecondContainer/>
      </>)}
       
    </>
  )
}

export default Browse
import React,{useEffect} from 'react'
import {onAuthStateChanged,signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlicer';
import {LOGO,SUPPORTED_LANGUAGES,USER_AVATAR} from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store=>store.user)
  const handleSignOut = ()=>{
      signOut(auth)
      .then(() => {
        navigate('/')
      }).catch((error) => {
        // An error happened.
        navigate('/error')
      });
  }
    useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
      const{uid,email,displayName, photoURL} = user;
      dispatch(addUser({
        uid:uid,
        email:email,
        displayName:displayName,
        photoURL:USER_AVATAR})
      );
        navigate('/browser')
      
      } else {
        // User is signed out
      dispatch(removeUser());
      navigate('/')
      }
    });
       return () => unsubscribe();
  },[])
  const handleGptSearch = ()=>{
    // Toggle GPT Search feature
    dispatch(toggleGptSearchView());
  }
  const handleLanguageChange = (e)=>{
    dispatch(changeLanguage(e.target.value));
  }
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-18 flex justify-between ">
      <img className = "w-44"  src={LOGO}/>
       {user &&
       <div className='flex p-4 gap-5'>
        {
          showGptSearch && 
          <select className='p-2 m-2 bg-gray-900 text-white'
          onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang)=>(
                <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>))}
          </select>
        }
        <button className='bg-green-600 rounded-lg text-white p-2' onClick={handleGptSearch}>
          {showGptSearch ? "Home Page" :"GPT Search"}</button>
        <img className="w-12 h-12" src={user?.photoURL}/>
        <button className='text-white font-bold'onClick={ handleSignOut}>sign out</button>
      </div>}
    </div>
  )
}

export default Header
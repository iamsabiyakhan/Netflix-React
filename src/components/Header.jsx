import React,{useEffect} from 'react'
import {onAuthStateChanged,signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlicer';
import {LOGO,USER_AVATAR} from '../utils/constants';

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
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-18 flex justify-between">
      <img className = "w-44"  src={LOGO}/>
       {user &&
       <div className='flex p-4 gap-5'>
        <img className="w-12 h-12" src={user?.photoURL}/>
        <button className='text-white font-bold'onClick={ handleSignOut}>sign out</button>
      </div>}
    </div>
  )
}

export default Header
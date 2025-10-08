import React ,{useState} from 'react'
import Header from './Header'



const Login = () => {
  const[isSignIn,setIsSignIn] = useState(false);
  const toggleSignUp =()=>{
      setIsSignIn(!isSignIn);
  }
  return (
    <>
         
         <Header/>
         {/*  */}
        <div className="absolute">
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/d482944d-eab4-4a64-89c9-a07a508a6e42/web/IN-en-20250929-TRIFECTA-perspective_4cf0c8a1-bd35-4d72-a49f-165021531dde_large.jpg"
              alt="backgound-image"/>
        </div>

        <form className="w-3/12 absolute p-12  bg-black/80 my-20 mx-auto right-0 left-0 text-white rounded-lg">
        <h1 className="font-bold text-3xl py-4">{isSignIn ? "SignIn":"SignUp"}</h1>

        <input
          type="text"
          placeholder="Name"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        {!isSignIn && <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />}

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />

        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
         {!isSignIn ? "Sign Up":"Sign In"}
        </button>
        <p className='text-white' onClick={toggleSignUp}>{isSignIn ? "New to Netflix? Sign Up" :"Already Registered? Sign In"}</p>
        </form>


    </>
  )
}

export default Login
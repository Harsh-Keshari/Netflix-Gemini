import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
import { LANUAGE_OPTIONS, LOGO } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSearchSlice';
import { changeLang } from '../utils/configSlice';
import { FaHome, FaSearch, FaSignOutAlt } from "react-icons/fa";
import { SiGooglegemini } from 'react-icons/si';
import { PiSignOut } from 'react-icons/pi';



const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user)
  const showGptSearch = useSelector((store) => store.gpt.gptSearchView)


  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {

        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
        navigate("/browse");

      } else {
        dispatch(removeUser());
        navigate("/");


      }
    });
    return () => unsubscribe();

  }, [])

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  }
  const handleLanguageChange = (e) => {
    dispatch(changeLang(e.target.value));
  }


  return (
    <div className='bg-black bg-opacity-70 md:bg-transparent flex justify-between md:flex  md:flex-row md:justify-between absolute bg-gradient-to-b from-black  py-2 w-full md:h-[13%]  '>
      <div className='flex justify-center'>
        <img src={LOGO} alt="/" className=' w-28 md:w-44  md:align-middle opacity-100' /></div>

      {user && <div className=' flex justify-center items-center md:flex md:items-center md:justify-center pr-1  md:pr-5'>
        {showGptSearch && (
          <select className='bg-gray-700 text-white h-[40%] rounded-lg text-sm md:text-lg px-4 m-4' onChange={handleLanguageChange}>
            {LANUAGE_OPTIONS.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
            ))}
          </select>)}
        {/* <FaSearch  /> */}
        <button onClick={handleGptSearchClick} className='bg-zinc-200 m-1 md:m-2 rounded-lg  h-[40%] text-gray-900 font-bold text-sm md:text-lg px-4'>
          {showGptSearch ?
            (
              <>
                <FaHome className="inline-block mr-2 text-gray-500" />
                Home
              </>
            )
            :
            (
              <>
                <SiGooglegemini className="inline-block mr-2 text-blue-500" />
                Gemini Search
              </>
            )}
        </button>
        <img alt="usericon" src={user.photoURL} className='md:m-2 h-6 md:h-8 ' />
        <button onClick={handleSignOut} className='bg-zinc-200 m-1 md:m-2 rounded-lg  h-[40%] text-sm md:text-lg px-4 font-bold text-gray-700'>
          <PiSignOut className="inline-block mr-1 text-gray-500" />
          Sign Out
        </button>
        
      </div>}

    </div>

  )
}

export default Header

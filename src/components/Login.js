
import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_IMG, PHOTO_URL } from '../utils/constants';

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PHOTO_URL,
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid, email, displayName, photoURL }));
          }).catch((error) => {
            setErrorMessage(error.message);
          });
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      // Sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // User signed in
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <div className='flex justify-center relative'>
      <Header />
      <div className='w-full'>
        <img src={BG_IMG} alt="Background" className='h-screen object-cover md:h-full md:w-full' />
      </div>
      <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 rounded-xl p-8 shadow-lg'>
        <form onSubmit={(e) => e.preventDefault()} className='flex flex-col'>
          <h1 className='font-bold text-2xl text-white text-center mb-4'>
            {isSignInForm ? 'Sign In' : 'Sign Up'}
          </h1>

          <div className='flex flex-col items-center'>
            {!isSignInForm && (
              <input
                ref={name}
                type="text"
                placeholder='Full Name'
                className='p-2 m-2 w-full rounded-lg bg-transparent border border-gray-700 text-white'
              />
            )}
            <input
              ref={email}
              type="email"
              placeholder='Email'
              className='p-2 m-2 w-full rounded-lg bg-transparent border border-gray-700 text-white'
            />
            <input
              ref={password}
              type="password"
              placeholder='Password'
              className='p-2 m-2 w-full rounded-lg bg-transparent border border-gray-700 text-white'
            />
            <p className='text-red-600 text-sm text-center'>{errorMessage}</p>

            <button
              className='bg-red-600 text-white m-2 w-full p-2 rounded-lg transition duration-200 hover:bg-red-700 '
              onClick={handleButtonClick}
            >
              {isSignInForm ? 'Sign In' : 'Sign Up'}
            </button>

            {isSignInForm && <p className='text-white font-medium'>OR</p>}
            {isSignInForm && (
              <button className='bg-gray-500 bg-opacity-70 text-white m-2 w-full p-2 rounded-lg transition duration-200 hover:bg-gray-600'>
                Use a sign-in code
              </button>
            )}

            <p className='text-white cursor-pointer text-center mt-4' onClick={toggleSignIn}>
              {isSignInForm ? 'New to Netflix ? Sign Up' : 'Already a user? Sign In Now'}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

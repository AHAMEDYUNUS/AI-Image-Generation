import React, { useContext, useEffect, useState } from 'react'
import {assets} from '../assets/assets'
import { AppContext } from '../context/AppContext'
import {backIn, motion} from 'framer-motion'
import {toast } from 'react-toastify'
import axios from 'axios'

const Login = () => {
  const [state, setState] = useState('Login')
  const {setShowLogin, setToken, setUser} = useContext(AppContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const onSubmitHandler = async (e)=>{
    e.preventDefault();
    try{
      let response;
      if(state === 'Login'){
        //const {data} = await axios.post(backendUrl+'/api/user/login`, {email, password})
        const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/login`, {email, password})
        console.log(data);

        if(data.success){
            setToken(data.token);
            setUser(data.user);
            localStorage.setItem('token', data.token);
            setShowLogin(false);
          } else{
              toast.error(data.message);
            }
    } else{
          const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/register`, {name, email, password})
         

          if(data.success){
            setToken(data.token);
            setUser(data.user);
            localStorage.setItem('token', data.token);
            setShowLogin(false);
            } else{
                toast.error(data.message);
              }
      }

    } catch(error){
        toast.error(error.message);
    }
  }



  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [setShowLogin]); 
  

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm
     bg-black/30 flex justify-center items-center'>
      
      <motion.form onSubmit={onSubmitHandler}
      initial={{opacity:0.2, y:50}}
      transition={{duration:0.3}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true}}
      
      className='relative p-10 rounded-xl bg-white text-slate-500'>
        <h1 className='text-center text-2xl text-neutral-700 font-medium'>{state}</h1>
        <p className='text-sm text-center'>Welcome back! Please sign in to continue</p>


        {state !== 'Login' && <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
            <img src={assets.profile_icon} alt='' width={30} className=''/>
            <input onChange={ e=> setName(e.target.value)} value={name} type="text" placeholder='Full Name' className='outline-none text-sm pl-3' required/>
        </div>}

        <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
            <img src={assets.email_icon} alt='' className='pl-2'/>
            <input onChange={ e=> setEmail(e.target.value)} value={email} type="email" placeholder='Email Id' className='outline-none text-sm pl-4' required/>
        </div>

        <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
            <img src={assets.lock_icon} alt='' className='pl-2'/>
            <input onChange={ e=> setPassword(e.target.value)} value={password} type="password" placeholder='Password' className='outline-none text-sm pl-5' required/>
        </div>

        <p className='text-sm text-blue-600 py-4 cursor-pointer'>Forget Password?</p>
        <button
          type='submit'
          className="bg-blue-600 w-full text-white py-2 rounded-full text-center cursor-pointer hover:bg-blue-700">
          {state === 'Login' ? 'Login' : 'Create Account'}
        </button>
        
        {/*Login logic*/}
        {state === 'Login' ?<p className='text-center mt-5 text-sm'>Don't have an account?
          <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Sign Up')}>Sign Up</span></p>
        :
        <p className='text-center mt-5 text-sm'>Already have an account?
        <span className='text-blue-600
         cursor-pointer' onClick={()=>setState('Login')}>Sign in</span></p>}

        <img onClick={() => {setShowLogin(false)}} src={assets.cross_icon} alt="" className='absolute top-5 right-5 cursor-pointer'/>
      
      </motion.form>
    </div>
  )
}

export default Login

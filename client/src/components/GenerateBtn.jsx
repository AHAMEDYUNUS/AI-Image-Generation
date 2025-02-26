import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const GenerateBtn = () => {

    const {user, setShowLogin} = useContext(AppContext)
    const navigate = useNavigate()
    const onClickHandler = () =>{
        if(user){
            navigate('/result')
        }else{
            setShowLogin(true)
        }}

  return (
    <motion.div 
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    className='pb-16 text-center'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl mt-4 
        font-semibold text-neutral-800 py-6 md:py-12'>See the magic. Try Now</h1>
        <button onClick={onClickHandler} className='sm:text-lg w-auto text-white inline-flex items-center gap-3 px-8 py-2.5 mt-8 bg-blue-700 rounded-full shadow-[6px_5px_1px_rgba(0,0,0,1)] active:shadow-[4px_2px_1px_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-0.5'>
            Generate Images
            <img src={assets.star_group} alt='' className='h-6'/>
        </button>
      
    </motion.div>
  )
}

export default GenerateBtn

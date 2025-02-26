import React from 'react'
import {stepsData} from '../assets/assets'
import {motion} from 'framer-motion'

const Steps = () => {
  return (
    <motion.div 
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    className='flex flex-col items-center justify-center my-32'>
      <h1 className='text-4xl sm:text-6
    xl lg:text-5xl font-semibold mb-2 text-center'>How it works?</h1>

    <p className='text-lg text-gray-600 mb-8 text-center'>Transform your words into stunning images</p>
    
    <div className='space-y-4 w-full max-w-3xl text-sm'>
      {stepsData.map((item, index)=>(
        <div key={index}
        className='flex items-center gap-4 p-5 px-8 bg-white shadow-[5px_5px] hover:shadow-[4px_4px] rounded-md cursor-pointer border border-neutral-500 hover:scale-[1.02] transition-all duration-300'>
          <img width={40} src={item.icon} alt=""/>
          <div>
            <h2 className='text-xl font-medium'>{item.title}</h2>
            <p className='text-gray-500'>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
    </motion.div>
  )
}

export default Steps

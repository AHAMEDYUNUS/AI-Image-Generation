import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
      <div className='flex flex-col items-center justify-center my-24 p-6 md:px-8'>
        <h1 className='text-3xl sm:text-4xl font-semibold'>Create AI images</h1>
        <p className='text-gray-500 mb-8'>Turn your imagination into visuals</p>
        
        <div className='flex flex-col md:flex-row gap-5 md:gap-14 items-center'>
            <img src={assets.sample_img_1} alt='' className='w-44 sm:w-40 md:w-40 lg:w-60 xl:w-80 rounded-lg'></img>
            <div>
                <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI-Powered Text to Image Generator</h2>
                <p className='text-gray-600 mb-4'>Easily bring your ideas to life with our free AI image generator.
                    whether you need stunning visuals or unique imagery, our tool transforms your text into
                    eye-catching images with just a few clicks. Imagine it, describe it and watch it come to life instantly.
                </p>
                <p className='text-gray-600 mb-4'>
                    Simply type in a text prompt, our AI will generate high quality images in seconds. From product visual to
                     character designs and potraits, even concepts that don't yet exist can be generated effortlessly. Powered by advanced AI technology
                     the creative possibilities are limitless!
                </p>
            </div>
        </div>
      </div>
  )
}

export default Description

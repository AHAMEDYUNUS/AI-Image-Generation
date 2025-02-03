import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-2 py-3 mt-20 xs:flex-col'>
      <img src={assets.logo} alt='' width={150}/>
      <p className='flex-1 border-gray-400 text-gray-500 text-sm pl-1 lg:pl-5 sm:text-[0.25]'>Copyright @Ahamed Yunus | All rights reserved.</p>
      <div className='flex gap-2.5'>
        <img src={assets.facebook_icon} alt='' width={35}/>
        <img src={assets.twitter_icon} alt='' width={35}/>
        <img src={assets.instagram_icon} alt='' width={35}/>

        
      </div>
    </div>
  )
}

export default Footer

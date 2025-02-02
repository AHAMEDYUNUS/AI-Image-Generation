import React from "react";
import { assets } from "../assets/assets";

const Header = ()=> {
    return (
        <div className="flex flex-col justify-center items-center text-center my-20 sm:my-10  lg:my-5">
            <div className="text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500 drop-shadow-md cursor-pointer">
                <p className="text-sm sm:text-base md:text-md lg:text-lg">Your Fantasized Words to Wondering Visuals</p>
                <img src={assets.star_icon}></img>
            </div>
            <h1 className="text-4xl max-w-[300px] sm:text-6xl sm:max-w-[590px] mx-auto mt-10 text-center">
                Turn your Text to <span className="text-blue-600">images</span>, in seconds
            </h1>
            <p className="text-center max-w-xl mx-auto mt-5">Unleash your creativity with AI, Turn your imagination into visual art in seconds - just type, and watch the magic happen.</p>

            <button className="sm:text-lg w-auto text-white flex items-center gap-3 px-8 py-2.5 mt-8 bg-blue-700 rounded-full shadow-[6px_5px_1px_rgba(0,0,0,1)] active:shadow-[6px_2px_1px_rgba(0,0,0,1)] active:translate-y-1">
                Generate images
                <img className="h-6" src={assets.star_group}></img>
            </button>
            <div className="flex flex-wrap items-center mt-10 gap-3">
                {Array(6).fill('').slice(0, window.innerWidth < 640 ? 4 : 6).map((item, index)=>(
                    <img className="rounded hover:scale-105 transition-all duration-300 cursor-pointer  max-sm:w-20 lg:w-20" 
                    src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2} 
                    alt={''} 
                    key={index} 
                    width={70}></img>
                ))}
            </div>
            <p className="text-neutral-600 font-normal mt-2">Generated images from GenifAI</p>


        </div>
    )
}
export default Header
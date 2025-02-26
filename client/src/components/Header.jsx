import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
import { ReactTyped } from "react-typed";
import { AppContext } from '../context/AppContext'
import { useNavigate } from "react-router-dom";

const Header = () => {

    const {user, setShowLogin} = useContext(AppContext)
    const navigate = useNavigate()
    const onClickHandler = () =>{
        if(user){
            navigate('/result')
        }else{
            setShowLogin(true)
        }

    }
    

    return (
        <motion.div className="flex flex-col justify-center items-center text-center my-20 sm:my-10  lg:my-5"
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <motion.div className="text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500 drop-shadow-md cursor-pointer"
                transition={{ duration: 2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <p className="text-sm sm:text-base md:text-md lg:text-lg">Your Fantasized Words to Wondering Visuals</p>
                <img src={assets.star_icon}></img>
            </motion.div>
            <motion.h1 className="text-4xl max-w-[300px] sm:text-6xl sm:max-w-[590px] mx-auto mt-10 text-center"
            >
                <ReactTyped strings={["Turn your Text to"]} typeSpeed={60} /><br /><span className="text-blue-500">images</span>, in seconds
            </motion.h1>
            <motion.p className="text-center max-w-xl mx-auto mt-5"
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{delay:1,duration:0.8}}
            >
                Unleash your creativity with AI, Turn your imagination into visual art in seconds - just type, and watch the magic happen.</motion.p>

            <motion.button onClick={onClickHandler}className="sm:text-lg w-auto text-white flex items-center gap-3 px-8 py-2.5 mt-8 bg-blue-700 rounded-full shadow-[6px_5px_1px_rgba(0,0,0,1)] active:shadow-[4px_2px_1px_rgba(0,0,0,1)] active:translate-y-2 active:translate-x-0.5"
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:1.3,duration:0.8}}
            >
                Generate images
                <img className="h-6" src={assets.star_group}></img>
            </motion.button>
            <motion.div className="flex flex-wrap items-center mt-10 gap-3"
            initial={{opacity:0, y:0}}
            animate={{opacity:1}}
            transition={{delay:1.5,duration:0.9}}
            >
                {Array(6).fill('').slice(0, window.innerWidth < 640 ? 4 : 6).map((item, index) => (
                    <img className="rounded hover:scale-105 transition-all duration-300 cursor-pointer  max-sm:w-20 lg:w-20"
                        src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2}
                        alt={''}
                        key={index}
                        width={70}></img>
                ))}
            </motion.div>
            <motion.p className="text-neutral-600 font-normal mt-2"
            initial={{opacity:0, y:0}}
            animate={{opacity:1}}
            transition={{delay:1.5,duration:0.9}}>Generated images from GenifAI</motion.p>


        </motion.div>
    )
}
export default Header
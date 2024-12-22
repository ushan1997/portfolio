
import { HERO_CONTENT } from "../constants/index";
import profilePic from "../assets/kevinRushProfile.png";
import { motion } from "motion/react"

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5, delay:0.5}}className="pb-16 text-6xl font-thin tracking-tight lg:mt-16">
              Ushan Gunaratne
            </motion.h1>
            <span className="bg-gradient-to-r from-purple-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Software Engineer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src={profilePic} alt="Kevin Rush" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

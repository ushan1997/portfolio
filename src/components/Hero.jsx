
import { HERO_CONTENT } from "../constants/index";
import profilePic from "../assets/profilePic.png";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <span className="pb-16 text-6xl font-bold tracking-tight lg:mt-16">
              Ushan Gunaratne
            </span>
            <span className="bg-gradient-to-r font-bold from-blue-300 via-slate-500 to-blue-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Software Engineer
            </span>
            <p className="my-2 max-w-xl py-6 font-bold tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img className="rounded-3xl" src={profilePic} alt="Kevin Rush" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

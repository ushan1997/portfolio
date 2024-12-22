import { RiReactjsLine } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaAngular } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { FaPython } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { CiCloudOn } from "react-icons/ci";

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJava className="text-7xl text-red-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoJavascript className="text-7xl text-yellow-400" />
        </div> 
       
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaAngular className="text-7xl text-red-700" />
        </div> 
        <div className="rounded-2xl border-4 border-blue-600 p-4">
          <FaPython className="text-7xl text-yellow-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiMongodb className="text-7xl text-green-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BsFiletypeSql className="text-7xl text-blue-500" />
        </div>
     
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <CiCloudOn className="text-7xl text-white" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaGit className="text-7xl text-orange-600" />
        </div>
      </div>
    </div>
  );
}

export default Technologies;

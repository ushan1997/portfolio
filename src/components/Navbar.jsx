import { FaLinkedin, FaGithub, FaMedium, FaHackerrank, FaStackOverflow } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="ml-5 flex flex-shrink-0 items-center"></div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
       <button onClick={()=> window.open("https://www.linkedin.com/in/ushan-gunaratne/")}><FaLinkedin /></button> 
       <button onClick={()=> window.open("https://github.com/ushan1997")}><FaGithub /></button> 
       <button onClick={()=> window.open("https://medium.com/@ushananuka5")}>   <FaMedium /></button> 
       <button onClick={()=> window.open("https://www.hackerrank.com/profile/ushananuka5")}>   <FaHackerrank /></button> 
       <button onClick={()=> window.open("https://stackoverflow.com/users/12374008/ushan-gunaratne")}>   <FaStackOverflow /></button> 
      </div>
    </nav>
  );
};

export default Navbar;

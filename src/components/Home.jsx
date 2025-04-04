import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import khubaibProfile from "../assets/profile.jpg";

export default function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-around items-center w-full lg:w-[90%] mx-auto p-5 bg-[rgb(14, 19, 32)] text-white">
      {/* Text Section */}
      <div className="flex flex-col w-full lg:w-1/2 gap-4 justify-center items-center text-center md:text-left">
        <h2 className="text-4xl font-bold">
          I'm a Full-Stack Developer  <span className="animate-wave">👋</span>
        </h2>
        <p className="text-lg">
  Hello, I'm <span className="text-purple-500">Khubaib Khan</span>—a passionate Full-Stack Developer.  
  I love building efficient, scalable applications and am actively seeking opportunities as a  
  <span className="text-purple-500"> JavaScript Developer</span> or any relevant role. Let’s create something impactful! 🚀
</p>


        
        {/* Social Icons */}
        <div className="flex gap-5">
          <a href="https://github.com/khubaib11" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl hover:scale-110 transition-transform duration-300 cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/khubaib-munawar-khan/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl hover:scale-110 transition-transform duration-300 cursor-pointer" />
          </a>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center  sm:justify-start">
          <a className="bg-purple-500 hover:bg-purple-700 text-white px-6 py-3 rounded-md text-center w-full sm:w-auto" href="mailto:khankhubaib089@gmail.com">
            Contact Me
          </a>
          <a className="bg-white hover:bg-gray-300 text-purple-500 px-6 py-3 rounded-md text-center w-full sm:w-auto" target="_blank" href="https://drive.google.com/file/d/13N9n97c_67GCBk2bgFjFxc7hyFkPI738/view?usp=sharing">
            Download CV
          </a>
        </div>
      </div>
      
      {/* Image Section */}
      <div className="relative w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] border-2 border-white rounded-full overflow-hidden mb-5">
        <img
          src={khubaibProfile}
          className="w-full h-full  object-cover object-top"
        />
      </div>
    </div>
  );
}

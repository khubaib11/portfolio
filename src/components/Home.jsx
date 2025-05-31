import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import khubaibProfile from "../assets/profile.jpg";
import resume from "/cv/Khubaib Khan Resume.pdf"

export default function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-around items-center w-full lg:w-[90%] mx-auto p-5 bg-[rgb(14, 19, 32)] text-white">
      {/* Text Section */}
      <div className="flex flex-col w-full lg:w-1/2 gap-4 justify-center items-center text-center md:text-left">
        <h2 className="text-3xl font-bold">
          Full-Stack Developer & AI/ML Enthusiast{" "}
          <span className="animate-wave">🤖🚀</span>
        </h2>
        <p className="text-lg mt-2">
          Hi, I'm <span className="text-purple-500">Khubaib Khan</span> — a
          passionate developer exploring the worlds of{" "}
          <span className="text-purple-500">Web Development</span> and{" "}
          <span className="text-purple-500">AI/Machine Learning</span>. I love
          building smart, scalable apps and am open to roles in{" "}
          <span className="text-purple-500">JavaScript</span> or AI-driven
          projects. Let’s build something impactful!
        </p>

        {/* Social Icons */}
        <div className="flex gap-5">
          <a
            href="https://github.com/khubaib11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-3xl hover:scale-110 transition-transform duration-300 cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/khubaib-munawar-khan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl hover:scale-110 transition-transform duration-300 cursor-pointer" />
          </a>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mt-4">
          <a
            className="bg-purple-500 hover:bg-purple-700 text-white px-6 py-3 sm:px-8 sm:py-4 md:text-lg rounded-md text-center w-full sm:w-auto"
            href="mailto:khankhubaib089@gmail.com"
          >
            Contact Me
          </a>
          {/* use local cv /home/khubaib/Programing/Projects/NewPortfolio/my-portfolio/src/assets/cv/Khubaib Khan Resume.pdf */}
          <a
            className="bg-white hover:bg-gray-300 text-purple-500 px-6 py-3 sm:px-8 sm:py-4 md:text-lg rounded-md text-center w-full sm:w-auto"
            target="_blank"
            rel="noopener noreferrer"
            href={resume}
            download="Khubaib Khan Resume.pdf"
          >
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

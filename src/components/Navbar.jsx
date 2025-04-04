import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-4 right-4 backdrop-blur-lg bg-[rgb(14, 19, 32)] shadow-lg p-4 flex items-center justify-between z-50 border-0 rounded-2xl">
      <div className="text-white text-3xl font-bold pl-4 md:text-2xl sm:text-xl">
        <span className="hidden md:inline">Khubaib Khan</span>
        <span className="md:hidden">KK<span className="text-4xl"> /</span></span>
      </div>
      <ul className="flex space-x-10 text-white text-lg md:space-x-6 sm:space-x-4">
        <li className="hidden md:block">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300 transition hover:underline hover:underline-offset-4 hover:decoration-[rgb(216_180_254)]">
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300 transition hover:underline hover:underline-offset-4 hover:decoration-[rgb(216_180_254)]">
            About
          </Link>
        </li>
        <li className="hidden md:block">
          <Link to="experience" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300 transition hover:underline hover:underline-offset-4 hover:decoration-[rgb(216_180_254)]">
            Experience
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300 transition hover:underline hover:underline-offset-4 hover:decoration-[rgb(216_180_254)]">
            Projects
          </Link>
        </li>
        <li className="hidden md:block">
          <Link to="courses" smooth={true} duration={500} className="cursor-pointer hover:text-gray-300 transition hover:underline hover:underline-offset-4 hover:decoration-[rgb(216_180_254)]">
            Courses
          </Link>
        </li>
       </ul>
    </nav>
  );
}

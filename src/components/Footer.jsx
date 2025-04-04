import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="my-5 py-10 text-white">
      
      <div className="flex flex-row justify-center gap-5 text-2xl mb-5">
        <a href="mailto:khankhubaib089@gmail.com">
          <FaEnvelope className="text-white hover:text-purple-500 transition-colors cursor-pointer" />
        </a>
        <a href="https://github.com/khubaib11" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white hover:text-purple-500 transition-colors cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/khubaib-munawar-khan/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white hover:text-purple-500 transition-colors cursor-pointer" />
        </a>
      </div>
      <p className="text-center text-white">&copy;2025 Khubaib Khan</p>
    </footer>
  );

  }

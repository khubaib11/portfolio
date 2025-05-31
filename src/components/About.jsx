import React from 'react'

export default function About() {
  return (
    <div className="lg:p-16 p-5 gap-12 w-full flex justify-center flex-col bg-[#101825] items-center">
      <h3 className="lg:text-3xl text-2xl font-bold text-amber-50">About Me</h3>
      <p className="text-secondary lg:text-lg text-sm text-amber-50 opacity-60 max-w-4xl text-center">
        Hey there! I'm <span className="text-purple-400">Khubaib Khan</span>, a Full-Stack Developer with a BSCS from Sukkur IBA.
        I have hands-on experience with the <span className="text-purple-400">MERN stack</span> — working with technologies like Node.js, Express, React, and Mongoose — to build efficient and scalable web applications.
        <br /><br />
        I'm also deeply interested in <span className="text-purple-400">AI and LLMs</span>. I've worked with models from Hugging Face, LLaMA, Gemini, and other open-source AI tools to explore intelligent app development and automation.
        <br /><br />
        Beyond web, I also develop <span className="text-purple-400">Android applications using Kotlin</span>, expanding my skills in mobile development and building complete, cross-platform solutions.
        <br /><br />
        I'm currently open to opportunities as a <span className="text-purple-400">JavaScript Developer</span>, AI/ML contributor, or any role where I can learn, grow, and make an impact.
      </p>
    </div>
  )
}

import React from "react";
import SheetAssesmentProject from "../assets/AASAS.png";
import eShop from "../assets/eShop.png";
import ASyS from "../assets/ASyS.png";
import blog from "../assets/blog.png";
import QuickFixAIImage from "../assets/quickfix.jpg";

export default function Projects() {
  return (
    <div className="overflow-hidden p-5 lg:p-10 gap-16 flex flex-col justify-center bg-[#101825]  text-white items-center">
      <h3 className="text-3xl font-bold">Projects</h3>
      <p className="text-secondary text-lg opacity-65">
        The following projects helped me a lot in grasping and mastering a ton
        of concepts about Front-End and Back-End.
      </p>

      <div className="flex justify-center p-5 gap-16 w-full rounded-xl flex-col sm:flex-row items-center bg-[#1d2532]">
        <div>
          <img
            alt="Automated Answer Sheet Assessment System screenshot"
            loading="lazy"
            width="200"
            height="250"
            className="w-140 lg:min-h-90 sm:min-h"
            src={SheetAssesmentProject}
          />
        </div>
        <div className="flex w-full lg:w-1/2 justify-center flex-col gap-5">
          <h1 className="text-2xl font-bold text-center">
            Automated Answer Sheet Assessment System
          </h1>
          <hr />
          <ul className="list-disc list-inside text-white">
            <li>
              Recognizes handwritten text accurately using advanced OCR
              technology.
            </li>
            <li>
              Automates grading with smart AI models for fair and thorough
              evaluation.
            </li>
            <li>Supports flexible grading based on customizable rubrics.</li>
            <li>Generates detailed reports summarizing scores and feedback.</li>
            <li>
              Offers a user-friendly and secure web platform for easy access.
            </li>
          </ul>

          <div className="flex gap-3 flex-wrap mt-2">
            {[
              "React.js",
              "MongoDB Atlas",
              "Node.js",
              "Express.js",
              "Firebase Auth",
              "Gemini",
              "GPT-4o-mini",
              "LLaMA 3.2",
              "H2O VL-Mississippi",
              "Python Flask",
            ].map((tech) => (
              <div
                key={tech}
                className="p-2 border-2 border-purple-300 text-purple-300 rounded-2xl"
              >
                {tech}
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-4">
            <a
              className="bg-white hover:bg-gray-300 text-purple-500  p-2 border-[1px] cursor-pointer border-white rounded-xl text-center"
              href="https://github.com/khubaib11/AUTOMATED-ANSWER-SHEET-ASSESSMENT-SYSTEM"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Link
            </a>
            <a
              className="bg-purple-500 hover:bg-purple-700 text-white p-2 border-[1px] cursor-pointer border-white rounded-xl text-center"
              href="https://drive.google.com/file/d/1032yXjqLLXUmuWLVeB6hNIX_gcOWnEvp/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Video Demo
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center p-5 gap-16 w-full rounded-xl flex-col sm:flex-row items-center bg-[#1d2532]">
  <div>
    <img
      alt="QuickFix AI Android App screenshot"
      loading="lazy"
      width="200"
      height="250"
      className="w-140 lg:min-h-90 sm:min-h"
      src={QuickFixAIImage} // Replace with your actual image import
    />
  </div>
  <div className="flex w-full lg:w-1/2 justify-center flex-col gap-5">
    <h1 className="text-2xl font-bold text-center">QuickFix AI (Android App)</h1>
    <hr />
    <ul className="list-disc list-inside text-white">
      <li>
        Developed a Kotlin-based Android app featuring five AI-powered tools.
      </li>
      <li>
        Integrated grammar correction functionality for real-time language enhancements.
      </li>
      <li>
        Enabled narrated short stories using dynamic TTS and AI-generated content.
      </li>
      <li>
        Implemented resume scoring system using GPT to give constructive feedback and ratings.
      </li>
      <li>
        Created smart social media post generator and reply suggestion tools for professional communication.
      </li>
      <li>
        Utilized OpenAI GPT APIs and Android Text-to-Speech (TTS) for seamless AI interactions.
      </li>
    </ul>

    <div className="flex gap-3 flex-wrap mt-2">
      {[
        "Kotlin",
        "Jetpack Compose",
        "OpenAI GPT",
        "Text-to-Speech (TTS)",
        "Android Studio",
        "Modern UI/UX",
        "AI Prompt Engineering",
        "GPT-4o",
      ].map((tech) => (
        <div
          key={tech}
          className="p-2 border-2 border-purple-300 text-purple-300 rounded-2xl"
        >
          {tech}
        </div>
      ))}
    </div>
{/* 
    <div className="flex gap-4 mt-4">
      <a
        className="bg-white hover:bg-gray-300 text-purple-500 p-2 border-[1px] cursor-pointer border-white rounded-xl text-center"
        href="https://github.com/your-username/quickfix-ai" // Replace with your actual GitHub link
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Link
      </a>
      <a
        className="bg-purple-500 hover:bg-purple-700 text-white p-2 border-[1px] cursor-pointer border-white rounded-xl text-center"
        href="https://your-demo-link.com" // Replace with your actual demo/video link
        target="_blank"
        rel="noopener noreferrer"
      >
        Video Demo
      </a>
    </div> */}
  </div>
</div>


      <div className="flex justify-center p-5 gap-16 w-full rounded-xl flex-col sm:flex-row items-center bg-[#1d2532]">
        <div>
          <img
            alt="E-commerce screenshot"
            loading="lazy"
            width="200"
            height="250"
            className="w-140 lg:min-h-90 sm:min-h "
            src={eShop}
          />
        </div>
        <div className="flex w-full lg:w-1/2 justify-center flex-col gap-5">
          <h1 className="text-2xl font-bold text-center">
            E-commerce Mobile Shop
          </h1>
          <hr />
          <div>
            <ul className="list-disc list-inside">
              <li>
                Developed an e-commerce w website with a user-friendly
                interface.
              </li>
              <li>Implemented React Router for seamless page navigation.</li>
              <li>
                Integrated cart functionality, allowing users to add and remove
                products.
              </li>
              <li>
                Improved state management and component reusability using React,
                and enhanced the UI with Bootstrap
              </li>
            </ul>
          </div>
          <div className="flex gap-3 flex-wrap">
            <div className="p-2 border-2 border-purple-300 text-purple-300 rounded-2xl">
              React.js
            </div>
            <div className="p-2 border-2 border-purple-300 text-purple-300 rounded-2xl">
              Bootstrap
            </div>
            <div className="p-2 border-2 border-purple-300 text-purple-300 rounded-2xl">
              JavaScript
            </div>
          </div>
          <div className="flex gap-4">
            <a
              className="bg-white hover:bg-gray-300 text-purple-500 p-2 border-[1px] cursor-pointer border-white rounded-xl"
              href="https://github.com/khubaib11/Mob_Shop"
            >
              <div>Github Link</div>
            </a>
          </div>
        </div>
      </div>

      

      <div className="flex justify-center p-5 gap-16 w-full rounded-xl flex-col sm:flex-row items-center bg-[#1d2532]">
        <div>
          <img
            alt="blog screenshot"
            loading="lazy"
            width="200"
            height="250"
            className="w-140 lg:min-h-90 "
            src={blog}
          />
        </div>

        <div className="flex w-full lg:w-1/2 justify-center flex-col gap-5">
          <h1 className="text-2xl font-bold text-center">My Blog Website</h1>
          <hr />
          <div>
            <ul className="list-disc list-inside">
              <li>
                Developing a blog website where users can authenticate and read
                blogs (Work in Progress).
              </li>
              <li>
                Implementing user authentication using bcrypt and JSON Web
                Tokens (JWT).
              </li>
              <li>
                Using React for the frontend and Node.js with Express for the
                backend.
              </li>
              <li>
                Structuring RESTful APIs with proper routing and security
                measures.
              </li>
            </ul>
          </div>

          <div className="flex gap-3 flex-wrap">
            <div className="p-2 border-2 border-purple-300 text-purple-300 rounded-2xl">
              React.js
            </div>
            <div className="p-2 border-2 border-purple-300 text-purple-300 rounded-2xl">
              Node.js
            </div>
            <div className="p-2 border-2 border-purple-300 text-purple-300 rounded-2xl">
              MongoDB
            </div>
            <div className="p-2 border-2 border-purple-300 text-purple-300 rounded-2xl">
              Express.js
            </div>
            <div className="p-2 border-2 border-purple-300 text-purple-300 rounded-2xl">
              Tailwind CSS
            </div>
            <div className="p-2 border-2 border-purple-300 text-purple-300 rounded-2xl">
              Bcrypt
            </div>
          </div>
          <div className="flex gap-4">
            <a
              className="bg-white hover:bg-gray-300 text-purple-500 p-2 border-[1px] cursor-pointer border-white rounded-xl"
              href="https://github.com/khubaib11/khubaib-blog"
            >
              <div>Github Link</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

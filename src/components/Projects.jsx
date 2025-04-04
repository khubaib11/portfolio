import React from "react";
import SheetAssesmentProject from "../assets/AASAS.png";
import eShop from "../assets/eShop.png";
import ASyS from "../assets/ASyS.png";
import blog from "../assets/blog.png";

export default function Projects() {
  return (
    <div className="overflow-hidden p-5 lg:p-10 gap-16 flex flex-col justify-center bg-[#101825]  text-white items-center">
      <h3 className="text-3xl font-bold">Projects</h3>
      <p className="text-secondary text-lg opacity-65">
        The following projects helped me a lot in grasping and mastering a ton
        of concepts about Front-End and Back-End.
      </p>

      {/* Project 1: GameJunction */}
      <div className="flex justify-center p-5 gap-16 w-full rounded-xl flex-col sm:flex-row items-center bg-[#1d2532]">
        <div>
          <img
            alt="Sheet Assessment screenshot"
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
          <ul className="list-disc list-inside">
            <li>
              Handwritten Text Recognition (HTR): Convert handwritten text into
              editable formats.
            </li>
            <li>
              Grading Automation: Automate grading with LLM-powered analysis.
            </li>
            <li>
              Error Detection & Feedback: Identify errors and provide feedback.
            </li>
            <li>
              Report Generation: Generate detailed reports for submissions.
            </li>
            <li>
              Efficiency & Accuracy: Reduce manual errors with automated
              grading.
            </li>
          </ul>
          <div className="flex gap-3 flex-wrap">
            <div className="p-2 border-2 border-purple-300 text-purple-300 rounded-2xl">
              React.js
            </div>
            <div className="p-2 border-2 border-purple-300 text-purple-300 rounded-2xl">
              Tailwind CSS
            </div>
            <div className="p-2 border-2 border-purple-300 text-purple-300 rounded-2xl">
              MongoDB
            </div>
            <div className="p-2 border-2 border-purple-300 text-purple-300 rounded-2xl">
              Node.js
            </div>
            <div className="p-2 border-2 border-purple-300 text-purple-300 rounded-2xl">
              Express.js
            </div>
            <div className="p-2 border-2 border-purple-300 text-purple-300 rounded-2xl">
              React Icons
            </div>
            <div className="p-2 border-2 border-purple-300 text-purple-300 rounded-2xl">
              Gemini
            </div>
            <div className="p-2 border-2 border-purple-300 text-purple-300 rounded-2xl">
              OCR
            </div>
          </div>
          <div className="flex gap-4">
            <a
              className="bg-green-700 p-2 border-[1px] cursor-pointer border-white rounded-xl"
              href="https://github.com/khubaib11/AUTOMATED-ANSWER-SHEET-ASSESSMENT-SYSTEM"
            >
              <div>Github Link</div>
            </a>
          </div>
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
                Developed an e-commerce w website with a user-friendly interface.
              </li>
              <li>Implemented React Router for seamless page navigation.</li>
              <li>
                Integrated cart functionality, allowing users to add and remove
                products.
              </li>
              <li>
              Improved state management and component reusability using React, and enhanced the UI with Bootstrap
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
              className="bg-green-700 p-2 border-[1px] cursor-pointer border-white rounded-xl"
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
            alt="User Authentication screenshot"
            loading="lazy"
            width="200"
            height="250"
            className="w-140 lg:min-h-90 sm:min-h"
            src={ASyS}
          />
        </div>
        <div className="flex w-full lg:w-1/2 justify-center flex-col gap-5">
          <h1 className="text-2xl font-bold text-center">
            user-Authentication-Website
          </h1>
          <hr />
          <div>
            <ul className="list-disc list-inside">
              <li>
                Developed a user authentication system using Node.js, MySQL,
                HBS, and Bootstrap.
              </li>
              <li>
                Implemented secure login, registration, and session management.
              </li>
              <li>
                Integrated password hashing and user role-based access control
                for enhanced security.
              </li>
            </ul>
          </div>

          <div className="flex gap-3 flex-wrap">
            <div className="p-2 border-2 border-purple-300 text-purple-300 rounded-2xl">
              MySQL
            </div>
            <div className="p-2 border-2 border-purple-300 text-purple-300 rounded-2xl">
              Node.js
            </div>
            <div className="p-2 border-2 border-purple-300 text-purple-300 rounded-2xl">
              HBS
            </div>
            <div className="p-2 border-2 border-purple-300 text-purple-300 rounded-2xl">
              Express
            </div>
            <div className="p-2 border-2 border-purple-300 text-purple-300 rounded-2xl">
              JavaScript
            </div>
            <div className="p-2 border-2 border-purple-300 text-purple-300 rounded-2xl">
              Bootstrap
            </div>
          </div>
          <div className="flex gap-4">
            <a
              className="bg-green-700 p-2 border-[1px] cursor-pointer border-white rounded-xl"
              href="https://github.com/khubaib11/user-Authentication-Website"
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
              className="bg-green-700 p-2 border-[1px] cursor-pointer border-white rounded-xl"
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

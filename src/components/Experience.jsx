import React from "react";
import sibaIcon from "../assets/siba.jpeg";
import freelancerIcon from "../assets/freelancer.jpeg";
import HelloWorldIcon from "../assets/helloWorldIcon.png";
import ScaleLogo from "../assets/scale logo.jpg";

export default function Experience() {
  return (
    <div className="lg:p-16 p-5 gap-12 w-full flex justify-center flex-col items-center">
      <h3 class="lg:text-3xl text-2xl font-bold text-amber-50">Experience</h3>

      <div className="flex justify-center p-5 gap-5 w-full rounded-xl flex-col bg-[#1d2532]">
        <div className="flex sm:flex-row flex-col sm:justify-start justify-center items-center gap-5">
          <img
            alt="Freelancing Icon"
            loading="lazy"
            width="50"
            height="50"
            className="rounded-2xl h-14 w-14"
            src={freelancerIcon}
          />
          <div className="flex gap-1 flex-col">
            <div className="font-bold text-white">
              Freelance Web Developer{" "}
              <span className="text-xs text-secondary mx-2 opacity-55">
                Freelancing
              </span>
            </div>
            <div className="text-white opacity-55">Self-Employed</div>
            <div className="text-white">
              Remote{" "}
              <span className="mx-3 text-sm text-secondary opacity-55">
                2024 - Present
              </span>
            </div>
          </div>
        </div>
        <div className="py-3 lg:px-7 px-3 lg:mx-5 font-medium leading-8 border-[1px] text-sm rounded-3xl border-secondary text-white bg-[rgb(14,19,32)]">
          <ul className="list-disc list-inside">
            <li>
              Gaining hands-on experience in web development using Node.js and
              React.
            </li>
            <li>
              Building and deploying full-stack applications for various
              clients.
            </li>
            <li>
              Enhancing problem-solving skills through real-world projects and
              continuous learning.
            </li>
            <li>
              Collaborating with clients to develop efficient and scalable web
              solutions.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center p-5 gap-5 w-full rounded-xl flex-col bg-[#1d2532]">
        <div className="flex sm:flex-row flex-col sm:justify-start justify-center items-center gap-5">
          <img
            alt="Company logo"
            loading="lazy"
            width="50"
            height="50"
            className="rounded-2xl h-14 w-14"
            src={ScaleLogo}
          />
          <div className="flex gap-1 flex-col">
            <div className="font-bold text-white">
              Prompt Engineer{" "}
              <span className="text-xs text-secondary mx-2 opacity-55">
                Remote Job
              </span>
            </div>
            <div className="text-white opacity-55">Scale AI</div>
            <div className="text-white">
              San Francisco, US{" "}
              <span className="mx-3 text-sm text-secondary opacity-55">
                Dec 2023 – Mar 2024
              </span>
            </div>
          </div>
        </div>
        <div className="py-3 lg:px-7 px-3 lg:mx-5 font-medium leading-8 border-[1px] text-sm rounded-3xl border-secondary text-white bg-[rgb(14,19,32)]">
          <ul className="list-disc list-inside">
            <li>
              Designed and engineered effective prompts to guide large language
              models (LLMs) in producing accurate and relevant outputs.
            </li>
            <li>
              Reviewed and analyzed AI-generated responses for correctness,
              especially in code-related tasks and technical topics.
            </li>
         
            <li>
              Collaborated on diverse projects requiring LLMs, including text
              classification, summarization, and code generation.
            </li>
            <li>
              Documented prompt strategies, failure cases, and tuning insights
              to improve team knowledge and project outcomes.
            </li>
            <li>
              Performed quality assurance on AI outputs, ensuring alignment with
              client expectations and task objectives.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center p-5 gap-5 w-full rounded-xl flex-col bg-[#1d2532]">
        <div className="flex sm:flex-row flex-col sm:justify-start justify-center items-center gap-5">
          <img
            alt="Company logo"
            loading="lazy"
            width="50"
            height="50"
            className="rounded-2xl h-14 w-14"
            src={HelloWorldIcon}
          />
          <div className="flex gap-1 flex-col">
            <div className="font-bold text-white">
              Website Automation and Scraping{" "}
              <span className="text-xs text-secondary mx-2 opacity-55">
                Internship
              </span>
            </div>
            <div className="text-white opacity-55">
              Hello World Technologies
            </div>
            <div className="text-white">
              Rahim Yar Khan, Punjab, Pakistan{" "}
              <span className="mx-3 text-sm text-secondary opacity-55">
                June 2023 - Aug 2023
              </span>
            </div>
          </div>
        </div>
        <div className="py-3 lg:px-7 px-3 lg:mx-5 font-medium leading-8 border-[1px] text-sm rounded-3xl border-secondary  text-white bg-[rgb(14,19,32)]">
          <ul className="list-disc list-inside">
            <li>
              Developed various automation scripts for streamlining repetitive
              tasks
            </li>
            <li>
              Built web scraping solutions using Puppeteer and Node.js to
              extract and collect data efficiently.
            </li>
            <li>
              Automated data processing and management workflows, improving
              efficiency and accuracy.
            </li>
            <li>
              Gained hands-on experience in JavaScript-based automation for
              managing and organizing large datasets.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center p-5 gap-5 w-full rounded-xl flex-col bg-[#1d2532]">
        <div className="flex sm:flex-row flex-col sm:justify-start justify-center items-center gap-5">
          <img
            alt="Company logo"
            loading="lazy"
            width="50"
            height="50"
            className="rounded-2xl h-14 w-14"
            src={sibaIcon}
          />
          <div className="flex gap-1 flex-col">
            <div className="font-bold text-white">
              Bachelor of Science in Computer Science{" "}
              <span className="text-xs text-secondary mx-2 opacity-55">
                Education
              </span>
            </div>
            <div className="text-white opacity-55">
              Sukkur Institute of Business Administration
            </div>
            <div className="text-white">
              Sukkur, Sindh, Pakistan{" "}
              <span className="mx-3 text-sm text-secondary opacity-55">
                Aug 2021 - June 2025
              </span>
            </div>
          </div>
        </div>
        <div className="py-3 lg:px-7 px-3 lg:mx-5 font-medium leading-8 border-[1px] text-sm rounded-3xl border-secondary  text-white bg-[rgb(14,19,32)]">
          <ul className="list-disc list-inside">
            <li>
              Gained proficiency in various programming languages, explored
              modern frameworks, and stayed updated with emerging technologies.
            </li>
            <li>
              Actively participating in coding competitions and technical
              training programs.
            </li>
            <li>
              Developing skills in Full Stack Development, Data structures, AI,
              Data Science and algorithms.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

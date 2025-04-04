import React from 'react'
import courses from "../data/courseData.json";

export default function Courses() {

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center  text-white mt-30 mb-20"> Courses & Certifications</h2>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-20  lg:w-320  lg:ml-30 ">
        {courses.map((course) => (
          <div key={course.id} className="text-white shadow-lg rounded-xl overflow-hidden bg-[#1d2532]">
            <img src={course.img} alt={course.name} className=" w-full lg:h-65 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{course.name}</h3>
              <p className="text-white  mt-15">{course.description}</p>
              <a
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-white text-purple-500 px-4 py-2 rounded-lg hover:text-purple-800 transition duration-300"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

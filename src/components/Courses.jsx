import React from 'react'
import c0 from "/img/c0.png";
import c1 from "/img/c1.png";
import c2 from "/img/c2.jpeg";
import c3 from "/img/c3.jpeg";
import c4 from "/img/c4.jpeg";
import c5 from "/img/c5.png";
export default function Courses() {

  const courses = [
    {
        "id":1,
        "name":"Developing Back-End Apps with Node.js and Express",
        "description":"Skills: NodeJS, back-end,Web Development,express",
        "link":"https://www.coursera.org/account/accomplishments/certificate/VULT8LFCH8RH",
        "img":c0
    },
    {
        "id":2,
        "name":"Database Structures and Management with MySQL",
        "description":"Skills: DBMS, DA, Data Management, MySQL",
        "link":"https://www.coursera.org/account/accomplishments/certificate/XY4QX92QXRZ3",
        "img":c1
    },
    {
        "id":3,
        "name":"Git for Developers Using Github",
        "description":"Skills: Version Control, Github, Developer tools, GIT",
        "link":"https://www.coursera.org/account/accomplishments/certificate/DKSC9J68GPXU",
        "img":c2
    },  
    {
        "id":4,
        "name":"Introduction to Back-End Development",
        "description":"Skills: HTML, CSS, JavaScript,React, APIs",
        "link":"https://www.coursera.org/account/accomplishments/certificate/5866Q9TZCS6N",
        "img":c3
    },
    {
        "id":5,
        "name":"Writing and Editing: Structure and Organization",
        "description":"Skills: Creativity,Time management,Persuasion,Writing",
        "link":"https://www.coursera.org/account/accomplishments/certificate/8N8JPPSZM6S3",
        "img":c4
    },
    {
        "id":6,
        "name":"Introduction to MongoDB",
        "description":"Skills: MongoDB Crud,Mongoose,NodeJS,MongoDB Aggregation",
        "link":"https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/586d5f6d-2f3c-417c-b169-37ab01c9966d-khubaib-khan-bcb87934-3d70-4c5b-8963-3197845848d2-certificate.pdf",
        "img":c5
    }
    
]
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

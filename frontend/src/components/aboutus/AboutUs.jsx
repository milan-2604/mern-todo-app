import React from "react";

function AboutUs() {
  return (
    <div className="w-full px-4 py-10 flex justify-center">
      <div className="max-w-3xl bg-white rounded-2xl shadow-md p-6 sm:p-8 md:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          About This Project
        </h1>

        <p className="text-gray-600 leading-relaxed mb-4">
          This project is a full-stack Todo application built using the{" "}
          <span className="font-medium text-gray-800">
            MERN stack (MongoDB, Express.js, React, and Node.js)
          </span>
          . It marks my first complete MERN stack project, where I transitioned
          from building frontend-only React applications to developing a full
          application with a dedicated backend and database.
        </p>

        <p className="text-gray-600 leading-relaxed mb-8">
          The goal of this project is to demonstrate my understanding of MERN
          stack fundamentals, including RESTful APIs, frontend–backend
          integration, state management, and basic authentication and CRUD
          operations. Special focus was placed on writing clean, maintainable
          code and following best practices commonly used in real-world
          applications.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">About Me</h3>

        <p className="text-gray-600 leading-relaxed mb-4">
          My name is{" "}
          <span className="font-medium text-gray-800">Milan Oli</span>, and I am
          an MCA student based in Dehradun, Uttarakhand. I have experience
          building projects with React and am currently expanding my skill set
          into full-stack development using the MERN stack.
        </p>

        <p className="text-gray-600 leading-relaxed">
          I enjoy learning by building real projects and continuously improving
          my understanding of modern web development technologies. This project
          represents an important milestone in my journey toward becoming a
          proficient full-stack developer.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;

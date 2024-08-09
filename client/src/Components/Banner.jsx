import React from "react";
import { Link } from "react-router-dom";
export default function Banner() {
  return (
    <>
      <div className="relative flex flex-col gap-6 p-10 lg:p-28  mx-auto bg-gradient-to-r from-blue-100 to-teal-100 shadow-lg rounded-lg ">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-700 opacity-25 rounded-lg"></div>
        <h1 className="text-4xl font-extrabold lg:text-7xl z-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500 p-4">
          Welcome to <span >GetSetExplore</span>
        </h1>
        <p className="text-gray-500 font-mono font-light text-sm sm:text-lg lg:text-xl z-10">
        At GetSetExplore, we offer in-depth articles and tutorials on web development, software engineering, and programming languages. Our goal is to help you build, innovate, and expand your skills, whether you're a seasoned developer or just starting out. Explore the complexities of modern technology with confidence through our expertly crafted content, and empower yourself to reach new heights in your career.
        </p>
        <Link
          to="/search"
          className="text-sm sm:text-lg text-white font-bold bg-teal-500 hover:bg-teal-600 py-2 px-4 rounded-full w-max z-10"
        >
          View All Posts
        </Link>
      </div>
    </>
  );
}
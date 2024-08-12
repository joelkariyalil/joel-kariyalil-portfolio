import React from 'react';
import { TITLE, HERO_CONTENT } from '../constants';
import profilePic from '../assets/file.png';

const Home = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="container mx-auto px-10 flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:mt-27">
          <h1 className="mb-10 text-6xl font-thin tracking-light">Joel Thomas Chacko</h1>
          <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
            {TITLE}
          </span>
          <p className="my-2 max-w-xl py-6 tracking-tighter">
            {HERO_CONTENT}
          </p>
          <a
            href="https://drive.google.com/file/d/19_rFdpVaHS3rvVt2UXReITacDMSdqZvT/view?usp=sharing"
            className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white font-medium text-lg rounded-md shadow-md transition duration-300 ease-in-out transform hover:bg-gradient-to-r hover:from-gray-600 hover:via-gray-700 hover:to-gray-800 hover:shadow-lg hover:scale-105"
          >
            View Resume
          </a>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:pt-2 lg:-mt-16 lg:p-8">
          <div className="relative">
            <img
              src={profilePic}
              alt="Joel Kariyalil"
              className="rounded-md shadow-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

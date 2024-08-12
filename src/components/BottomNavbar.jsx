import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaCopyright } from 'react-icons/fa';


const BottomNavbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-7'>
      <div className='flex flex-shrink-0 items-center'>
        <h1 className='text-1xl flex gap-3 items-center ml-20'><FaCopyright/>2024, MIT License, Joel Kariyalil</h1>
      </div>
      <div className='m-9 flex items-center gap-5 text-2xl'>
        <FaLinkedin/>
        <FaGithub/>
        <FaInstagram/>
        <FaYoutube/>
        <FaSquareXTwitter/>
      </div>
    </nav>
  )
}

export default BottomNavbar
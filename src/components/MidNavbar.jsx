import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const MidNavbar = () => {
  return (
    <div className='fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center bg-black p-4 rounded-r-lg z-50'>
      <a 
        href="https://github.com/joelkariyalil" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-white hover:text-cyan-300 mb-4 transition-transform duration-300 transform hover:translate-y-[-7px]"
      >
        <FaGithub size={30} />
      </a>
      <a 
        href="https://www.linkedin.com/in/joelkariyalil/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-white hover:text-cyan-300 mb-4 transition-transform duration-300 transform hover:translate-y-[-7px]"
      >
        <FaLinkedin size={30} />
      </a>
      <a 
        href="https://www.instagram.com/joelkariyalil/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-white hover:text-cyan-300 mb-4 transition-transform duration-300 transform hover:translate-y-[-7px]"
      >
        <FaInstagram size={30} />
      </a>
      <a 
        href="https://youtube.com/yourusername" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-white hover:text-cyan-300 mb-4 transition-transform duration-300 transform hover:translate-y-[-7px]"
      >
        <FaYoutube size={30} />
      </a>
      <a 
        href="https://twitter.com/yourusername" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-white hover:text-cyan-300 mb-4 transition-transform duration-300 transform hover:translate-y-[-7px]"
      >
        <FaSquareXTwitter size={30} />
      </a>
    </div>
  );
}

export default MidNavbar;

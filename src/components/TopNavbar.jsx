import React from 'react';



const TopNavbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-10'>
      <div className='mx-20 flex flex-shrink-0 items-center'>
        <h1 className='text-3xl font-bold text-white'>Portfolio</h1>
      </div>
      <div className='m-9 mx-20 flex items-center gap-5 text-2xl'>
        <div className="hidden lg:flex items-center gap-6 text-lg text-white">
          <a href="#home" className="hover:text-cyan-300 transition duration-300 bold">Home</a>
          <a href="#skills" className="hover:text-cyan-300 transition duration-300">Skills</a>
          <a href="#experience" className="hover:text-cyan-300 transition duration-300">Exp.</a>
          <a href="#opsrcmods" className="hover:text-cyan-300 transition duration-300">OpSrc Mods</a>
          <a href="#papers" className="hover:text-cyan-300 transition duration-300">Papers</a>
          <a href="#projects" className="hover:text-cyan-300 transition duration-300">Projects</a>
          <a href="#awards" className="hover:text-cyan-300 transition duration-300">Awards</a>
          <a href="#contact" className="hover:text-cyan-300 transition duration-300">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default TopNavbar
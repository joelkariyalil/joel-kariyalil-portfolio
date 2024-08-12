import React from 'react';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-12 lg:pb-20'>
      <div className='container mx-auto px-8'>
        <div className='flex flex-col items-center mb-16'>
          <h2 className='text-4xl font-bold tracking-tight text-white mb-11'>
            Projects
          </h2>
          <p className='max-w-xl text-lg text-gray-400 mb-11'>
            Here is a selection of projects I have worked on. Each project highlights various skills and technologies that contribute to their functionality.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {PROJECTS.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='relative p-6 border border-neutral-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 bg-neutral-900 group'
            >
              <div className='relative overflow-hidden rounded-lg'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-40 object-cover transition-transform transform group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-20 group-hover:opacity-30 transition-opacity'></div>
              </div>
              <div className='project-card-content mt-4 flex flex-col h-[250px]'> {/* Added class */}
                <div className='flex flex-col mb-2 h-[60px]'>
                  <h3 className='text-2xl font-semibold text-white'>{project.title}</h3>
                </div>
                <div className='flex flex-col flex-grow'> {/* Added class */}
                  <p className='text-gray-400'>{project.description}</p>
                </div>
                <div className='flex flex-wrap gap-2 mt-2'>
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className='bg-cyan-500 text-white px-3 py-1 rounded-md text-sm'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

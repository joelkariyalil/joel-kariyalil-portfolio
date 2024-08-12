import React from 'react';
import { OPSRCMODULES } from '../constants';

const OpSrcMods = () => {
  return (
    <div className='border-b border-neutral-900 pb-12 lg:pb-20'>
      <div className='container mx-auto px-8'>
        <div className='flex flex-col items-center mb-16'>
          <h2 className='text-4xl font-bold tracking-tight text-white mb-11'>
            Open Source Modules
          </h2>
          <p className='max-w-xl text-lg text-gray-400 mb-6 text-center mb-11'>
            Here is a collection of open-source modules I have developed. Each module showcases different technologies and serves various purposes to contribute to the community.
          </p>
        </div>
        <div className='flex justify-center'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8'>
            {OPSRCMODULES.map((module, index) => (
              <a
                key={index}
                href={module.link}
                target='_blank'
                rel='noopener noreferrer'
                className='relative p-6 border border-neutral-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 bg-neutral-900 group'
              >
                <div className='relative overflow-hidden rounded-lg'>
                  <img
                    src={module.image}
                    alt={module.title}
                    className='w-full h-[350px] object-cover transition-transform transform group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-20 group-hover:opacity-30 transition-opacity'></div>
                </div>
                <div className='mt-4 flex flex-col h-[200px]'> {/* Adjusted height */}
                  <div className='flex flex-col mb-2 h-[60px]'> {/* Consistent title height */}
                    <h3 className='text-2xl font-semibold text-white'>{module.title}</h3>
                  </div>
                  <div className='flex-grow'> {/* Adjusted flex-grow */}
                    <p className='text-gray-400'>{module.description}</p>
                  </div>
                  <div className='flex flex-wrap gap-2 mt-4'>
                    {module.technologies.map((tech, techIndex) => (
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
    </div>
  );
};

export default OpSrcMods;

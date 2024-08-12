import React from 'react';
import { EXPERIENCE } from '../constants';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-12 lg:pb-20'>
      <div className='container mx-auto px-8'>
        <div className='flex flex-col items-center mb-16'>
          <h2 className='text-4xl font-bold tracking-tight text-white mb-11'>
            Experience
          </h2>
          <p className='max-w-xl text-lg text-gray-300 mb-11'>
            Here is a timeline of my professional experience where I've been able to contribute to projects and have been recongnized for the same.
          </p>
        </div>
        <div className='relative'>
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='w-[2px] h-full bg-gray-700'></div>
          </div>
          {EXPERIENCE.map((exp, index) => {
            const { ref, inView } = useInView({ triggerOnce: true });

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-16`}
              >
                <div
                  className={`absolute ${index % 2 === 0 ? 'left-1/2' : 'right-1/2'} top-0 transform -translate-x-1/2  h-full bg-gray-700`}
                ></div>

                <div className={`relative ${index % 2 === 0 ? 'ml-8' : 'mr-8'}`}>
                  <div className='absolute top-0 left-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full'></div>
                  <div className={`w-full max-w-md ${index % 2 === 0 ? 'ml-8' : 'mr-8'}`}>
                    <div className='p-6 border border-neutral-800 rounded-lg shadow-lg bg-neutral-900'>
                      <h3 className='text-2xl font-semibold text-white'>{exp.title}</h3>
                      <p className='text-lg text-gray-300 mb-2'>{exp.company}</p>
                      <p className='text-sm text-gray-400 mb-4'>{exp.duration}</p>
                      <ul className='text-gray-400 mb-4 list-disc list-inside'>
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                      <div className='flex flex-wrap gap-2'>
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className='bg-cyan-500 text-white px-3 py-1 rounded-md text-sm'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;

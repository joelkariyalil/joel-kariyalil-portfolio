import React from 'react';
import { FaJava, FaPython, FaJsSquare, FaJenkins } from 'react-icons/fa';
import { TbLetterC } from 'react-icons/tb';
import { SiCplusplus, SiR, SiGit, SiVisualstudiocode, SiJetbrains, SiAmazonaws, SiReact, SiRedis, SiMysql, SiPostgresql, SiNextdotjs, SiNestjs, SiDocker, SiKubernetes, SiAnsible, SiRedhatopenshift } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { SKILLS } from '../constants';

const skillIcons = {
  C: <TbLetterC size={50} className='text-blue-600' />,
  'C++': <SiCplusplus size={50} className='text-blue-600' />,
  Java: <FaJava size={50} className='text-orange-600' />,
  Python: <FaPython size={50} className='text-yellow-600' />,
  R: <SiR size={50} className='text-blue-400' />,
  JavaScript: <FaJsSquare size={50} className='text-yellow-400' />,
  Git: <SiGit size={50} className='text-red-600' />,
  JetBrains: <SiJetbrains size={50} className='text-gray-600' />,
  VSCode: <SiVisualstudiocode size={50} className='text-blue-500' />,
  AWS: <SiAmazonaws size={50} className='text-orange-500' />,
  React: <SiReact size={50} className='text-cyan-400' />,
  Redis: <SiRedis size={50} className='text-red-500' />,
  MySQL: <SiMysql size={50} className='text-blue-600' />,
  PostgreSQL: <SiPostgresql size={50} className='text-blue-800' />,
  Nextjs: <SiNextdotjs size={50} className='text-white' />,
  NestJS: <SiNestjs size={50} className='text-red-600' />,
  Docker: <SiDocker size={50} className='text-blue-500' />,
  Kubernetes: <SiKubernetes size={50} className='text-blue-700' />,
  OpenShift: <SiRedhatopenshift size={50} className='text-red-600' />,
  Azure: <VscAzure size={50} className='text-blue-400' />,
  Jenkins: <FaJenkins size={50} className='text-orange-600' />,
  Ansible: <SiAnsible size={50} className='text-gray-700' />,
};

const Skills = () => {
  const allSkills = Object.values(SKILLS).flat();

  return (
    <div className='border-b border-neutral-900 pb-12 lg:pb-20'>
      <div className='container mx-auto px-8'>
        <div className='flex flex-col items-center mb-16'>
          <h2 className='text-4xl font-bold tracking-tight text-white mb-11'>
            Skills & Technologies
          </h2>
          <p className='max-w-xl text-lg text-gray-300 mb-11'>
            Here are some of the skills and technologies I work with. They represent a range of expertise across various domains.
          </p>
        </div>
        <div className='relative'>
          <div className='ml-11 mr-11 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-11 gap-11'>
            {allSkills.map((skill, index) => (
              <div
                key={index}
                className='relative flex items-center justify-center group'
                style={{
                  animation: `float 10s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 10}s`,
                }}
              >
                <div className='relative flex items-center justify-center'>
                  {skillIcons[skill]}
                  <div className='absolute bottom-0 left-0 w-full bg-black text-white text-center text-xs rounded-md p-1 opacity-0 group-hover:opacity-100 transition-opacity'>
                    {skill}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

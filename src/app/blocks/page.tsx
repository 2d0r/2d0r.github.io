'use client';

import { useState } from 'react';
import { LOREM_IPSUM } from '../lib/definitions';
import ProjectCard from '../ui/project-card';
import ProjectTools from '../ui/project-tools';

export default function Page() {

  const manyTwdors = new Array(100).fill('TWDOR').join(' ');
  const [ selectedProject, setSelectedProject ] = useState<string>('');

  const handleOnMouseOver = (projectId: string) => {
    setSelectedProject(projectId);
  }


  return (
    <main className='z-10 file:flex min-h-screen flex-col items-center bg-gradient-to-b from-blue-500 to-blue-300 overflow-scroll'>
      <div className='relative flex w-screen mt-[25vh]'>
        <div className='absolute inset-0 pointer-events-none z-30 bg-gradient-to-b from-transparent to-lime-950'></div>
        <div className='bg-white w-2/3 pt-[18vh] px-16 flex flex-col gap-16'>
          <ProjectCard title='Smart Organiser' text={LOREM_IPSUM} projectId='1' onMouseOver={handleOnMouseOver} selected={selectedProject} />
          <ProjectCard title='Music Game'    text={LOREM_IPSUM} projectId='2' onMouseOver={handleOnMouseOver} selected={selectedProject} />
          <ProjectCard title='Coaching Site' text={LOREM_IPSUM} projectId='3' onMouseOver={handleOnMouseOver} selected={selectedProject} />
          <ProjectCard title='Project title' text={LOREM_IPSUM} projectId='4' onMouseOver={handleOnMouseOver} selected={selectedProject} />
          <ProjectCard title='Project title' text={LOREM_IPSUM} projectId='5' onMouseOver={handleOnMouseOver} selected={selectedProject} />
        </div>
        <div className="flex flex-col relative">
          <div className='absolute inset-6 skew-y-[11deg] pt-6 text-xl text-white/20 font-bold tracking-wide'>{manyTwdors}</div>
          <div className='w-0 h-0 border-b-[4vw] border-r-[20vw] border-b-gray-100 border-r-transparent'></div>
          <div className='h-[200vh] bg-gray-100'></div>
        </div>
        {/* Side bar */}
        <div className='bg-white w-1/3 mt-[12vh] ml-[-10vw] skew-x-0 pt-[6vh] px-[6vh] flex flex-col gap-16'>
          <ProjectTools projectId='1' onMouseOver={handleOnMouseOver} selected={selectedProject}/>
          <ProjectTools projectId='2' onMouseOver={handleOnMouseOver} selected={selectedProject}/>
          <ProjectTools projectId='3' onMouseOver={handleOnMouseOver} selected={selectedProject}/>
          <ProjectTools projectId='4' onMouseOver={handleOnMouseOver} selected={selectedProject}/>
          <ProjectTools projectId='5' onMouseOver={handleOnMouseOver} selected={selectedProject}/>
        </div>
      </div>
    </main>
  );
}

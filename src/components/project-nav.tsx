'use client';

import { Project } from '@/lib/types';
import { imageLoader } from '@/lib/utils';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from "next/legacy/image";
import Link from 'next/link';
import '@/app/globals.css';

export default function ProjectNav({project1, project2} : {
  project1?: Project | null, project2?: Project | null,
}) {
  return (
    <div className='flex gap-4 w-full justify-between items-center mt-12 text-xl'>
      { project1 ?
        <Link href={`/${project1.id}`} className='flex flex-col md:flex-row gap-2 w-full highlight'>
          <span className='flex gap-2 items-center'>
            <ArrowLeftIcon fill='white' height={16} />{project1.title}
          </span>
          {/* <div className='relative h-24 w-24 rounded-full border border-white'>
            <Image src={project1.thumbnail} alt={`${project1.id}-thumbnail`} loader={imageLoader}
            className='rounded-full h-full w-full' layout='fill' />
          </div> */}
          
        </Link> 
        : <div></div>
      }
      { project2 ?
        <Link href={`/${project2.id}`} className='flex flex-col md:flex-row-reverse gap-2 w-full items-end highlight'>
          <span className='flex gap-2 items-center text-right'>
            {project2.title}<ArrowRightIcon fill='white' height={16} />
          </span>
          {/* <div className='relative h-24 w-24 rounded-full border border-white'>
            <Image src={project2.thumbnail || ''} alt={`${project2.id}-thumbnail`} loader={imageLoader}
            className='rounded-full h-full w-full' height={48} width={48} />
          </div> */}
        </Link>
        : <div></div>
      }
    </div>
  );
}

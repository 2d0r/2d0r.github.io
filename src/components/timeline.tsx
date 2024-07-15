'use client';

import { ArrowDownIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import '@/app/globals.css';
import { motion } from 'framer-motion';
import TimelineMoment from './timeline-moment';
import { timelineData } from '@/lib/data';

export default function Timeline() {
    return (<div className='w-full md:w-4/5 flex flex-col gap-8 relative my-8'>
        {/* The line */}
        <div className='absolute top-[24px] bottom-0  w-[1px] bg-white
        left-[24px] md:left-0 md:right-0 md:mx-auto'></div>
        { timelineData.map((el, index: number) => {
            return <TimelineMoment index={index + 1} key={index} />
        }) }
        {/* CV Download */}
        <motion.div className='w-full cursor-pointer'
        initial={{ y: 0 }} whileInView={{ y: 0 }} transition={{ duration: 1 }}>
            <Link className='w-full flex relative group highlight' href='/files/tudor-popescu-cv.pdf' download>
                <div className='md:w-1/2 h-full flex items-start md:justify-end pl-[72px] md:pl-0 md:pr-[36px]'>
                    <div className='text-left md:text-right mt-[12px]'>Download CV</div>
                </div>
                <div className='w-1/2 h-full hidden md:flex items-start md:pl-[36px] pl-[12px] mt-[12px] font-light md:font-normal'>2024</div>
                <div className='z-40 absolute rounded-full w-[48px] h-[48px] bg-white
                top-0 left-0 md:right-0 md:mx-auto 
                flex items-center justify-center group-hover:bg-yellow-300 group-hover:scale-105 transition'>
                    <ArrowDownIcon height={24} className='fill-blue-400' />
                </div>
            </Link>
        </motion.div>
    </div>)
}
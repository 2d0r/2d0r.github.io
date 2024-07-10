import { AcademicCapIcon, ArrowDownIcon, BriefcaseIcon } from '@heroicons/react/24/solid';
import TimelineCard from './timeline-card';
import Link from 'next/link';
import '@/app/globals.css';
import { motion } from 'framer-motion';

export default function Timeline() {
    return (<div className='w-4/5 flex flex-col gap-8 relative my-8'>
        <div className='absolute top-[24px] bottom-0 left-0 right-0 mx-auto w-[1px] bg-white'></div>
        <motion.div className='w-full flex relative' 
        initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            <div className='w-full h-full flex items-start'>
                <TimelineCard momentId={1} />
                <div className='h-[1px] bg-white w-[60px] mt-[24px]'></div>
            </div>
            <div className='w-full h-full flex items-center pl-[48px]'></div>
            <div className='z-40 absolute rounded-full w-[48px] h-[48px] bg-white
            left-0 right-0 top-0 mx-auto flex items-center justify-center'>
                <AcademicCapIcon height={24} className='fill-blue-400' />
            </div>
        </motion.div>
        <motion.div className='w-full flex relative'
        initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            <div className='w-full h-full flex items-start justify-end pr-[48px] pt-[12px]'>2021 - 2022</div>
            <div className='w-full h-full flex items-start'>
                <div className='h-[1px] bg-white w-[60px] mt-[24px]'></div>
                <TimelineCard momentId={2} />
            </div>
            <div className='z-40 absolute rounded-full w-[48px] h-[48px] bg-white
            left-0 right-0 top-0 mx-auto flex items-center justify-center'>
                <BriefcaseIcon height={24} className='fill-blue-400' />
            </div>
        </motion.div>
        <motion.div className='w-full flex relative'
        initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            <div className='w-full h-full flex items-start'>
                <TimelineCard momentId={3} />
                <div className='h-[1px] bg-white w-[60px] mt-[24px]'></div>
            </div>
            <div className='w-full h-full flex items-center pl-[48px] mt-[12px]'>2022</div>
            <div className='z-40 absolute rounded-full w-[48px] h-[48px] bg-white
            left-0 right-0 top-0 mx-auto flex items-center justify-center'>
                <AcademicCapIcon height={24} className='fill-blue-400' />
            </div>
        </motion.div>
        <motion.div className='w-full flex relative'
        initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} >
            <div className='w-full h-full flex items-center justify-end pr-[48px] mt-[12px]'>2022 - 2024</div>
            <div className='w-full h-full flex items-start '>
                <div className='h-[1px] bg-white w-[60px] mt-[24px]'></div>
                <TimelineCard momentId={4} />
            </div>
            <div className='z-40 absolute rounded-full w-[48px] h-[48px] bg-white
            left-0 right-0 top-0 mx-auto flex items-center justify-center'>
                <BriefcaseIcon height={24} className='fill-blue-400' />
            </div>
        </motion.div>
        <motion.div className=' w-full flex relative group highlight cursor-pointer'
        initial={{ y: 0 }} whileInView={{ y: 0 }} transition={{ duration: 1 }}>
            <div className='w-full h-full flex items-start justify-end pr-[36px]'>
                <Link href='/CV' className='w-1/3 text-right mt-[12px]'>Download CV</Link>
            </div>
            <div className='w-full h-full flex items-start pl-[36px] mt-[12px]'>2024</div>
            <div className='z-40 absolute rounded-full w-[48px] h-[48px] bg-white
            left-0 right-0 top-0 mx-auto flex items-center justify-center group-hover:bg-yellow-400 group-hover:scale-105 transition'>
                <ArrowDownIcon height={24} className='fill-blue-400' />
            </div>
        </motion.div>
    </div>)
}
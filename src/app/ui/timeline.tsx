import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/solid';
import TimelineCard from './timeline-card';

export default function Timeline() {
    return (<div className='w-4/5 flex flex-col gap-8 relative'>
        <div className='absolute top-[120px] left-0 right-0 mx-auto bottom-0 w-[1px] bg-white'></div>
        <div className='h-[240px] w-full flex relative'>
            <div className='
                z-50 absolute rounded-full w-[48px] h-[48px] bg-white
                left-0 right-0 top-0 bottom-0 m-auto flex items-center justify-center
            '><AcademicCapIcon height={24} className='fill-blue-400' /></div>
            <div className='w-full h-full flex items-center'>
                <TimelineCard momentId={1} />
                <div className='h-[1px] bg-white w-[60px]'></div>
            </div>
            <div className='w-full h-full flex items-center'></div>
        </div>
        <div className='h-[200px] w-full flex relative'>
            <div className='w-full h-full flex items-center'></div>
            <div className='w-full h-full flex items-center'>
                <div className='h-[1px] bg-white w-[60px]'></div>
                <TimelineCard momentId={2} />
            </div>
            <div className='
                z-50 absolute rounded-full w-[48px] h-[48px] bg-white
                left-0 right-0 top-0 bottom-0 m-auto flex items-center justify-center
            '><BriefcaseIcon height={24} className='fill-blue-400' /></div>
        </div>
        <div className='w-full flex relative'>
            <div className='w-full h-full flex items-center'>
                <TimelineCard momentId={3} />
                <div className='h-[1px] bg-white w-[60px]'></div>
            </div>
            <div className='w-full h-full flex items-center'></div>
            <div className='
                z-50 absolute rounded-full w-[48px] h-[48px] bg-white
                left-0 right-0 top-0 bottom-0 m-auto flex items-center justify-center
            '><AcademicCapIcon height={24} className='fill-blue-400' /></div>
        </div>
        <div className='h-[200px] w-full flex relative'>
            <div className='w-full h-full flex items-center'></div>
            <div className='w-full h-full flex items-center'>
                <div className='h-[1px] bg-white w-[60px]'></div>
                <TimelineCard momentId={4} />
            </div>
            <div className='
                z-50 absolute rounded-full w-[48px] h-[48px] bg-white
                left-0 right-0 top-0 bottom-0 m-auto flex items-center justify-center
            '><BriefcaseIcon height={24} className='fill-blue-400' /></div>
        </div>
        <div className='h-[120px] w-full flex'></div>
    </div>)
}
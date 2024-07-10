import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/16/solid';
import { timelineData } from '../lib/data';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import useDeviceDetection from '@/lib/use-device-detection';

export default function TimelineMoment ({ index } : { index: number }) {
    const timelineMoment = timelineData.find(moment => moment.index === index);
    const isOdd = index % 2 === 0 ? false : true;

    const device = useDeviceDetection();
    const timelineMomentVariant = device !== 'Mobile' ? {
        initial: {  opacity: 0, x: isOdd ? -10 : 10 },
        animate: () => ({ opacity: 1, x: 0, transition: { duration: 1 } }),
    } : {
        initial: {}, animate: {}
    };

    return (<>
        <motion.div className={clsx('w-full flex relative flex-row-reverse md:flex-row', !isOdd && 'md:flex-row-reverse')}
        initial='initial' whileInView='animate' viewport={{ once: true }}
        variants={timelineMomentVariant}>
            <div className={clsx('w-full md:w-1/2 h-full flex items-start flex-row-reverse md:flex-row', !isOdd && 'md:flex-row-reverse')}>

                {/* Card */}
                <div className='border border-white rounded-3xl w-full h-full flex flex-col p-4 gap-2'>
                    <div className='flex flex-col'>
                        <span className='font-semibold'>{timelineMoment?.title}</span>
                        <span className='font-medium'>
                            {timelineMoment?.location}
                            <span className='font-light md:invisible visible'>{timelineMoment?.years && ' • '}{timelineMoment?.years}</span>
                        </span>
                    </div>
                    <span className='font-normal'>{timelineMoment?.text}</span>
                </div>
                {/* Branch */}
                <div className='h-[1px] bg-white w-[60px] mt-[24px] ml-[24px] md:ml-0'></div>

            </div>

            {/* Years label */}
            <div className={clsx('hidden md:flex w-0 md:w-1/2 h-full px-[36px] pt-[12px]', isOdd ? 'justify-start' : 'justify-end' )}>{timelineMoment?.years}</div>

            {/* Icon Node */}
            <div className='z-40 absolute rounded-full w-[48px] h-[48px] bg-white
            left-0 md:right-0 top-0 md:mx-auto 
            flex items-center justify-center'>
                { timelineMoment?.type === 'education' ? 
                    <AcademicCapIcon height={24} className='fill-blue-400' /> :
                    <BriefcaseIcon height={24} className='fill-blue-400' />
                }
            </div>
        </motion.div>
    </>);
}
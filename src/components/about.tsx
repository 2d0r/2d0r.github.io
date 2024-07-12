'use client';

import Divider from '@/components/divider';
import Timeline from '@/components/timeline';
import { useActiveSectionContext } from '@/context/active-section-context';
import { aboutData } from '@/lib/data';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function AboutSection() {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection('About Me');
        }
    }, [inView, setActiveSection, timeOfLastClick]);
    
    return (<motion.section id='about' ref={ref} className='z-10 scroll-mt-28 flex flex-col items-center gap-8 w-full'
    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Divider heading='About Me' />
        <div dangerouslySetInnerHTML={{__html: aboutData.text}} className='text-center w-full md:w-3/5 px-8 md:px-0'
        ></div>
        <Timeline />
    </motion.section>)
}

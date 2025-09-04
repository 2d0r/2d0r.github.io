'use client';

import Divider from '@/components/divider';
import Timeline from '@/components/timeline';
import { useSessionContext } from '@/context/session-context';
import { aboutData } from '@/lib/data';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import '@/app/globals.css';

export default function AboutSection() {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });
    const { setActiveSection, timeOfLastClick } = useSessionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection('About Me');
        }
    }, [inView, setActiveSection, timeOfLastClick]);
    
    return (<motion.section id='about' ref={ref} className='z-10 scroll-mt-28 flex flex-col items-center gap-8 w-full'
    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Divider heading='About Me' />
        <div dangerouslySetInnerHTML={{__html: aboutData.text}} 
            className='text-center w-full md:w-4/5 md:px-8'
        ></div>
        <Timeline />
    </motion.section>)
}

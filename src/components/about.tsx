'use client';

import Divider from '@/components/divider';
import Timeline from '@/components/timeline';
import { useActiveSectionContext } from '@/context/active-section-context';
import { aboutData } from '@/lib/data';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function AboutSection() {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection('About Me');
        }
    }, [inView, setActiveSection, timeOfLastClick]);
    
    return (<section id='about' ref={ref} className='scroll-mt-28 flex flex-col items-center gap-8 w-full'>
        <Divider heading='About Me' />
        <div dangerouslySetInnerHTML={{__html: aboutData.text}} className='text-center w-3/5'></div>
        <Timeline />
    </section>)
}

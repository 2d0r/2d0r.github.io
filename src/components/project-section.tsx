'use client';

import Divider from '@/components/divider';
import { motion } from 'framer-motion';
import ProjectImage from './project-image';
import '../app/globals.css';
import clsx from 'clsx';
import { ProjectSectionType } from '@/lib/types';
import { useEffect } from 'react';

export default function ProjectSection({section, alignImage = 'right', layout = 'sides'} : {
    section: ProjectSectionType,
    alignImage?: ('left' | 'right' | 'bottom'),
    layout?: ProjectSectionType['layout'],
}) {

    useEffect(() => {
        // JavaScript code to insert 'Coming soon' span into all divs with class 'soon'
        setTimeout(() => {
            document.addEventListener('DOMContentLoaded', () => {
                // Select all divs with the class 'soon'
                const soonDivs = document.querySelectorAll('li.soon');
                
                // Iterate through each div and insert the span element
                soonDivs.forEach(div => {
                    const span = document.createElement('span');
                    span.textContent = ' Coming soon';
                    div.appendChild(span);
                });
            });
        }, 1000);
    }, []);

    return (
        <motion.section id={section.title.toLowerCase()} className='scroll-mt-28 flex flex-col items-center gap-8 w-full'
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
            <Divider heading={section.title} />
            {(layout === 'sides' || layout === 'wide') ? 
                <div className={clsx('w-full flex flex-col items-center',
                    layout === 'sides' && 'md:flex-row justify-between', 
                    (alignImage === 'left' && layout === 'sides') && 'md:flex-row-reverse',
                    section.text && 'gap-12'
                )}>
                    {/* Text */}
                    {section.text && <div dangerouslySetInnerHTML={{__html: section.text || ''}} 
                    className={clsx('w-full px-0 project-text', 
                        layout === 'sides' && 'md:w-1/2', layout === 'wide' && 'md:w-4/5 md:text-center',
                    )}></div>}
                    {/* Images */}
                    <div className={clsx('w-full flex flex-col gap-4', 
                        layout === 'sides' && 'md:w-1/2',
                        !section.text && 'md:w-full md:flex-wrap',
                    )}>
                    { section.images?.map((image, idx) => {
                        return <ProjectImage image={image} key={idx} layout={layout} />
                    })}
                    </div>
                </div>
            : layout === 'gallery' ?
                <div className='flex flex-wrap gap-8 justify-center'>
                    {/* Text */}
                    {section.text && <div dangerouslySetInnerHTML={{__html: section.text || ''}} 
                    className={clsx('w-full md:w-[24rem] md:h-[24rem] px-0 project-text flex items-center')}></div>}
                    {/* Images */}
                    { section.images?.map((image: string, idx) => {
                        return <div className='w-full md:w-[24rem]' key={idx}>
                            <ProjectImage image={image} layout={layout} />
                        </div>
                    })}
                </div>
            : <></>
            }
        </motion.section>
    );
}

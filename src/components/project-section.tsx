'use client';

import Divider from '@/components/divider';
import { motion } from 'framer-motion';
import ProjectImage from './project-image';
import '../app/globals.css';
import clsx from 'clsx';
import { ProjectSectionType } from '@/lib/types';

export default function ProjectSection({section, alignImage = 'right', layout = 'sides'} : {
    section: ProjectSectionType,
    alignImage?: ('left' | 'right' | 'bottom'),
    layout?: ProjectSectionType['layout'],
}) {
    return (
        <motion.section id={section.title.toLowerCase()} className='z-10 scroll-mt-28 flex flex-col items-center gap-8 w-full'
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

import React from 'react';
import localFont from 'next/font/local';
import '@/app/globals.css';
import ContactForm from '../components/contact';
import ProjectSection from '../components/projects';
import SkillsSection from '../components/skills';
import clsx from 'clsx';
import AboutSection from '@/components/about';

const museoModerno = localFont({ src: '../../public/fonts/museoModerno.ttf'});

export default function Page() {

    return (<>
        <div className={clsx('w-[min(900px,100%)] flex flex-col gap-8 items-center justify-start text-white font-regular mt-8', museoModerno.className)}>
            <ProjectSection />        
            <SkillsSection />
            <AboutSection />
            <ContactForm />
        </div>
    </>);
}
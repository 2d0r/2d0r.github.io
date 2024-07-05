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
        <div className={clsx('max-w-[900px] flex flex-col gap-8 items-center justify-start text-white font-regular', museoModerno.className)}>
            <ProjectSection />        
            <SkillsSection />
            <AboutSection />
            <ContactForm />
        </div>
    </>);
}
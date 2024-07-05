import React from 'react';
import localFont from 'next/font/local';
import '@/app/globals.css';
import { useState } from 'react';
import Hero from './ui/hero';
import Skills from './ui/skills';
import Link from 'next/link';
import Divider from './ui/divider';
import { aboutData, skillsData } from './lib/data';
import Timeline from './ui/timeline';
import ContactForm from './components/contact-form';
import Footer from './ui/footer';
import ProjectLineup from './ui/project-lineup';
import SkillsSection from './ui/skills-section';

const museoModerno = localFont({ src: '../../public/fonts/museoModerno.ttf'});

export default function Page() {

    return (<main className='z-10 file:flex min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-blue-300 overflow-scroll hide-scrollbar pt-12'>
        {/* Wrapper */}
        <div className={`max-w-[900px] flex flex-col gap-8 items-center justify-start text-white ${museoModerno.className} font-regular`}>
            <ProjectLineup />        
            <SkillsSection />
            <Divider heading='About Me' />
            <div dangerouslySetInnerHTML={{__html: aboutData.text}} className='text-center w-3/5'></div>
            <Timeline />
            <Divider heading='Contact' />
            <ContactForm />
        </div>
        <Footer />
    </main>);
}
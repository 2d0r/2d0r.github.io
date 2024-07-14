import React from 'react';
import '@/app/globals.css';
import ContactForm from '../components/contact';
import SkillsSection from '../components/skills';
import AboutSection from '@/components/about';
import Projects from '../components/projects';
import CloudAnimation from '@/components/cloud-animation';

export default function Page() {
    return (<>
        <Projects />        
        <SkillsSection linkToHeader={true} />
        <AboutSection />
        <ContactForm />
        <CloudAnimation clouds={3} />
    </>);
}
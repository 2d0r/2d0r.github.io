import React from 'react';
import '@/app/globals.css';
import ContactForm from '../components/contact';
import SkillsSection from '../components/skills';
import AboutSection from '@/components/about';
import Projects from '../components/projects';

export default function Page() {
    return (<>
        <Projects />        
        <SkillsSection />
        <AboutSection />
        <ContactForm />
    </>);
}
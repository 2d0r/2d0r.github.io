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
        <SkillsSection skills={[
            'React', 'Next.js', 'Tailwind', 'Typescript', 'Node.js', 'Redux', 'Python', 'GitHub', 'GitLab', 'Figma', 'Photoshop', 'Notion',
        ]} />
        <AboutSection />
        <ContactForm />
        <CloudAnimation clouds={3} />
    </>);
}
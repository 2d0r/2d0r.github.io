'use client';

import { useInView } from 'react-intersection-observer';
import Divider from './divider';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useEffect } from 'react';

export default function ContactForm () {

    const { ref, inView } = useInView({
        threshold: 0.5,
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection('Contact');
        }
    }, [inView, setActiveSection, timeOfLastClick]);
    
    return(<section id='contact' ref={ref} className='scroll-mt-28 flex flex-col items-center gap-8 w-full'>
        <Divider heading='Contact' />
        <div className='w-3/5' id='contact-form'>
            <form>
                <div className='gap-2 flex flex-col items-center w-full'>
                    <div className='flex flex-col gap-2 w-full'>
                        <label htmlFor='name'>Name</label>
                        <input name='name' type='text' placeholder='Who do I have the pleasure with?' required
                            className='w-full bg-transparent border border-white/70 rounded-xl p-2 placeholder:text-white/30 focus:outline-none focus:border-white' />
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <label htmlFor='name'>Email address</label>
                        <input name='name' type='email' placeholder='What is your email address?' required
                            className='w-full bg-transparent border border-white/70 rounded-xl p-2 placeholder:text-white/30 focus:outline-none focus:border-white' />
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <label htmlFor='name'>Message</label>
                        <textarea name='name' placeholder='What is your message?' required
                            className='w-full bg-transparent border border-white/70 rounded-xl p-2 placeholder:text-white/30 h-[100px] focus:outline-none focus:border-white' />
                    </div>
                    <button type='submit' className='bg-white p-2 min-w-[200px] mt-4 text-blue-300 rounded-xl enlarge'>Send</button>
                </div>
            </form>
        </div>
    </section>);
}
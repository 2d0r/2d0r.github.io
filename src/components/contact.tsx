'use client';

import { useInView } from 'react-intersection-observer';
import Divider from './divider';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

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
    
    return(<motion.section id='contact' ref={ref} className='w-full scroll-mt-28 flex flex-col items-center gap-8'
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}
    >
        <Divider heading='Contact' />
        <div className='w-[min(100%,400px)]' id='contact-form'>
            <form action={async (formData) => {
                const { data, error } = await sendEmail(formData);

                if (error) {
                    toast.error(error);
                    return;
                }

                toast.success('Email sent successfully');
            }}>
                <div className='gap-2 flex flex-col items-center w-full'>
                    {/* <div className='flex flex-col gap-2 w-full'>
                        <label htmlFor='name'>Name</label>
                        <input name='name' type='text' placeholder='Who do I have the pleasure with?' required
                            className='w-full bg-transparent border border-white/70 rounded-xl p-2 placeholder:text-white/30 focus:outline-none focus:border-white' />
                    </div> */}
                    <div className='flex flex-col gap-2 w-full'>
                        {/* <label htmlFor='name'>Email address</label> */}
                        <input name='senderEmail' type='email' placeholder='Email address' required //'What is your email address?'
                            className='w-full bg-transparent border border-white/70 rounded-xl p-2 placeholder:text-white/30 focus:outline-none focus:border-white' />
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        {/* <label htmlFor='name'>Message</label> */}
                        <textarea name='message' placeholder='Your message' required
                            className='w-full bg-transparent border border-white/70 rounded-xl p-2 placeholder:text-white/30 min-h-[140px] focus:outline-none focus:border-white' />
                    </div>
                    <SubmitBtn />
                </div>
            </form>
        </div>
    </motion.section>);
}
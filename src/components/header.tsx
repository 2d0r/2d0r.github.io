'use client';

import { useActiveSectionContext } from '@/context/active-section-context';
import { links } from '@/lib/data';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
    const { activeSection, setActiveSection, setTimeOfLastClick } =
        useActiveSectionContext();

    return (<header className='z-50 relative w-full font-body'>
        <motion.div 
            className='fixed top-0 left-1/2 -translate-x-1/2 h-[3.25rem] w-full 
            sm:top-6 sm:h-[3.25rem] sm:w-[28rem] sm:rounded-full
            rounded-none border backdrop-blur-lg border-b-white sm:border-white
            bg-white/10 text-white shadow-lg shadow-black/[0.03]'
            initial={{ x: '-50%', y: -100, opacity: 0 }}
            animate={{ x: '-50%', y: 0, opacity: 1 }}
        >
        </motion.div>
        <nav className='flex fixed top-0 left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
            <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-white sm:w-[initial] sm:flex-nowrap sm:gap-5'>
            {links.map((link) => (
                <motion.li
                className='h-3/4 flex items-center justify-center relative'
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                >
                <Link
                    className={clsx(
                    'flex w-full items-center justify-center px-3 py-3 hover:text-yellow-300 transition dark:text-white dark:hover:text-yellow-300',
                    {
                        'text-white dark:text-white':
                        activeSection === link.name,
                    }
                    )}
                    href={link.hash}
                    onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                    }}
                >
                    {link.name}

                    {link.name === activeSection && (
                    <motion.span
                        className='bg-white/10 rounded-full absolute inset-0 -z-10'
                        // className='border border-white rounded-full absolute inset-0 -z-10'
                        layoutId='activeSection'
                        transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                        }}
                    ></motion.span>
                    )}
                </Link>
                </motion.li>
            ))}
            </ul>
        </nav>
    </header>);
}

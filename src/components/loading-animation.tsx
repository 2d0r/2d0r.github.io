'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

export default function LoadingAnimation({wholePage = true} : {wholePage?: boolean}) {
  return (<div>
        {/* Background overlay */}
        <motion.div className={clsx(
            wholePage ? 'top-0 left-0 fixed w-full min-h-screen z-40 bg-gradient-to-b from-blue-500 to-blue-300'
            : 'w-full h-full',
        )}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* Loading animation */}
            <div className='flex flex-col gap-8 fixed w-full h-full justify-center items-center'>
                <motion.div
                    className='w-8 h-8 border border-white'
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 180, 180, 0],
                        borderRadius: ['20%', '20%', '50%', '50%', '20%'],
                    }}
                    transition={{
                        duration: 2,
                        ease: 'easeInOut',
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 0.5,
                    }}
                />
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 1, 0, 0] }}
                    transition={{ 
                        duration: 2, 
                        ease: 'easeInOut', 
                        repeat: Infinity, 
                        times: [0, 0.2, 0.5, 0.8, 1], 
                        repeatDelay: 0.5,  }}
                >Loading...</motion.span>
            </div>
        </motion.div>
    </div>)
}

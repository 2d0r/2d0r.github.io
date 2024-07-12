'use client';

import { imageLoader } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export default function CloudAnimation() {
    return (<>
        <div className='absolute z-0 top-0 bottom-0 w-full h-full opacity-20 overflow-hidden'>
            <motion.div className='absolute top-[40vh] left-0 w-full'
            initial={{ x: '-70%' }} animate={{ x: '100%' }} 
            transition={{ duration: 30, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}>
                <Image src={'/images/cloud-1.svg'} alt={'cloud-1'} width={400} height={100} loader={imageLoader} />
            </motion.div>
            <motion.div className='absolute top-[130vh] left-0 w-full'
            initial={{ x: '100%' }} animate={{ x: '-70%' }} 
            transition={{ duration: 30, repeat: Infinity, repeatType: 'loop', ease: 'linear', delay: 20 }}>
                <Image src={'/images/cloud-2.svg'} alt={'cloud-1'} width={400} height={100} loader={imageLoader} />
            </motion.div>
            <motion.div className='absolute top-[250vh] left-0 w-full'
            initial={{ x: '-70%' }} animate={{ x: '100%' }} 
            transition={{ duration: 30, repeat: Infinity, repeatType: 'loop', ease: 'linear', delay: 10 }}>
                <Image src={'/images/cloud-3.svg'} alt={'cloud-1'} width={400} height={100} loader={imageLoader} />
            </motion.div>
        </div>
    </>);
}

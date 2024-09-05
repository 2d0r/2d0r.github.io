'use client';

import { ProjectSectionType } from '@/lib/types';
import { imageLoader, loadImage } from '@/lib/utils';
import clsx from 'clsx';
import Image from "next/legacy/image";
import React, { useEffect, useState } from 'react';
import '@/app/globals.css';
import { XMarkIcon } from '@heroicons/react/16/solid';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { useWindowDimensions } from '@/lib/use-window-dimensions';
import LoadingAnimation from './loading-animation';

interface ProjectImageProps {
    image: string;
    layout?: ProjectSectionType['layout'];
}

export default function ProjectImage({ image, layout } : ProjectImageProps) {

    const [ imageDimensions, setImageDimensions ] = useState({height: 0, width: 0});
    const [ showModal, setShowModal ] = useState<boolean>(false);
    const [ imageIsOverflowing, setImageIsOverflowing ] = useState<boolean>(false);
    const [ loading, setLoading ] = useState<boolean>(true);

    const handleOnClick = () => {
        setShowModal(!showModal);
    }
    const handleXClick = () => {
        setShowModal(false);
    }

    // HOOKS

    useEffect(() => {
        loadImage(setImageDimensions, image);
    }, [image]);

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showModal]);

    // Compare image aspect ratio with window aspect ratio
    const { windowWidth, windowHeight } = useWindowDimensions();
    useEffect(() => {
        const [ W, H, w, h ] = [ windowWidth, windowHeight, imageDimensions.width, imageDimensions.height ];
        if (W && H) 
            // if (Math.sign(W / H - 1) !== Math.sign(w / h - 1) || w/h > W/H || w/h < W/H) {
            if ( w/h < W/H ) {
                setImageIsOverflowing(true);
            } else {
                setImageIsOverflowing(false);
            }
    }, [windowHeight, windowWidth, imageDimensions]);

    return (
        <div className={clsx(
            'relative w-full h-[24rem] flex items-start justify-start border-white border rounded-3xl overflow-auto hide-scrollbar',
            layout === 'wide' && 'md:h-[30rem] items-start',
            layout === 'sides' && 'md:w-[24rem]',
        )} onClick={handleOnClick}>
            { loading && <LoadingAnimation wholePage={false} />}
            <Image src={`/${image}`} alt={`${image.split('/')}-image`} loader={imageLoader}
            className='w-full h-auto object-cover z-20' layout='fill' width={0} height={0}
            onLoadingComplete={() => setLoading(false)}
             />
            {/* <img src={`/${image}`} alt={`${image.split('/').pop()}-image`}
                className={clsx(
                    imageDimensions.height > imageDimensions.width ? 'max-w-[100%] max-h-none' : 'max-h-[100%] max-w-none',
                    image.endsWith('.gif') ? 'object-cover h-full w-full' : 'object-contain'
                )}
            /> */}
            {/* Image modal */}
            <AnimatePresence>
            {showModal && 
                <div className='fixed inset-0 w-screen h-screen top-0 left-0 z-50 flex items-center justify-center bg-blue-300/70'>
                    <motion.div className={clsx('relative rounded-3xl border',
                        // isInverseRatio ? 'w-[90vw] h-auto' : 'sm:h-[80vh] sm:w-auto',
                        imageIsOverflowing ? 'h-[80vh] w-auto' : 'w-[90vw] h-auto',
                    )}
                    style={{ aspectRatio: `${imageDimensions.width}/${imageDimensions.height}`}}
                    initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}>
                        <Image src={`/${image}`} alt={`${image.split('/')}-image`} loader={imageLoader}
                        className='rounded-3xl object-contain overflow-clip w-auto h-auto border border-white' layout='fill'/>
                        {/* <XMarkIcon height={48} fill='white'/> */}
                    </motion.div>
                </div>
            }
            </AnimatePresence>
        </div>
    );
}

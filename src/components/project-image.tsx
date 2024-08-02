'use client';

import { ProjectSectionType } from '@/lib/types';
import { imageLoader, loadImage } from '@/lib/utils';
import clsx from 'clsx';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import '@/app/globals.css';

interface ProjectImageProps {
    image: string;
    layout?: ProjectSectionType['layout'];
}

export default function ProjectImage({ image, layout } : ProjectImageProps) {

    const [ imageDimensions, setImageDimensions ] = useState({height: 0, width: 0});
    useEffect(() => {
        loadImage(setImageDimensions, image);
        console.log(imageDimensions);
    }, []);

    return (
        <div className={clsx(
            'relative w-full h-[24rem] flex items-center justify-center border-white border rounded-3xl overflow-auto hide-scrollbar',
            layout === 'wide' && 'md:h-[30rem] items-start',
            layout === 'sides' && 'md:w-[24rem]',
        )}>
            <Image src={`/${image}`} alt={`${image.split('/')}-image`} loader={imageLoader}
            className='h-full w-full object-cover' objectFit='cover' layout='fill' />
            {/* <img
                src={`/${image}`}
                alt={`${image.split('/').pop()}-image`}
                className={clsx(
                    imageDimensions.height > imageDimensions.width ? 'max-w-[100%] max-h-none' : 'max-h-[100%] max-w-none',
                    image.endsWith('.gif') ? 'object-cover h-full w-full' : 'object-contain'
                )}
            /> */}
        </div>
    );
}

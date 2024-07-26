'use client';

import { ProjectSectionType } from '@/lib/types';
import { imageLoader } from '@/lib/utils';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import '@/app/globals.css';

interface ProjectImageProps {
    image: string;
    layout?: ProjectSectionType['layout'];
}

export default function ProjectImage({ image, layout } : ProjectImageProps) {
    return (
        <div className={clsx(
            'relative w-full h-[24rem] flex items-center justify-center border-white border rounded-3xl overflow-auto',
            layout === 'wide' && 'md:h-[30rem] items-start'
        )}>
            <Image src={`/${image}`} alt={`${image.split('/')}-image`} loader={imageLoader}
            className='h-full w-full object-cover' objectFit='cover' layout='fill' />
        </div>
    );
}

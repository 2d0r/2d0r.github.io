'use client';

import { imageLoader } from '@/lib/utils';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

interface ProjectImageProps {
    image: string;
    wide?: boolean;
}

export default function ProjectImage({ image, wide } : ProjectImageProps) {
    return (
        <div className={clsx('relative h-[24rem] flex items-center justify-center border-white border rounded-3xl overflow-clip',
            wide ? 'w-full' : 'w-full md:w-1/2',
        )}>
            <Image src={`/${image}`} alt={`${image.split('/')}-image`} loader={imageLoader}
            className='h-full w-full object-cover' objectFit='cover' layout='fill' />
        </div>
    );
}

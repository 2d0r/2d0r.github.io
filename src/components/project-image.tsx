'use client';

import { Project } from '@/lib/types'
import { imageLoader } from '@/lib/utils';
import Image from 'next/image'
import React from 'react'

interface ProjectImageProps {
    image: string;
}

export default function ProjectImage({ image } : ProjectImageProps) {
    return (<div className='relative w-full h-[30rem] flex items-center justify-center border-white border rounded-3xl overflow-clip
    mx-12'>
        <Image src={`/${image}`} alt={`${image.split('/')}-image`} loader={imageLoader}
        className='h-full w-full' objectFit='cover' layout='fill' />
    </div>)
}

import React from 'react';

interface HeroProps {
    content: string,
}

export default function Hero ({content}: HeroProps) {
    return (<div className='flex items-end justify-center content-center gap-[10px] h-[150px]'>
        {/* Skills Columns */}
        <div className='flex flex-col h-[120px] justify-between'>
            <div className='border-white border rounded-lg h-[55px] w-[55px]'></div>
            <div className='border-white border rounded-lg h-[55px] w-[55px]'></div>
        </div>
        {/* Center cards */}
        <div className='border-white border rounded-lg h-[120px] w-full'></div>
        <div className='border-white border rounded-lg h-[150px] w-full'></div>
        <div className='border-white border rounded-lg h-[120px] w-full'></div>
        {/* Skills Columns */}
        <div className='flex flex-col h-[120px] justify-between'>
            <div className='border-white border rounded-lg h-[55px] w-[55px]'></div>
            <div className='border-white border rounded-lg h-[55px] w-[55px]'></div>
        </div>
    </div>);
}
import React from 'react';

interface HeroProps {
    content: string,
}

export default function Hero ({content}: HeroProps) {
    return (<div className='flex items-center justify-center content-center gap-[10px] h-[150px]'>
        {/* Tools Columns */}
        <div className='flex flex-col h-[120px] justify-between'>
            <div className='border-white border rounded-lg h-[55px] w-[55px]'></div>
            <div className='border-white border rounded-lg h-[55px] w-[55px]'></div>
        </div>
        <div className='border-white border rounded-lg h-[120px] w-[120px]'></div>
        <div className='border-white border rounded-lg h-[150px] w-[150px]'></div>
        <div className='border-white border rounded-lg h-[120px] w-[120px]'></div>
        {/* Tools Columns */}
        <div className='flex flex-col h-[120px] justify-between'>
            <div className='border-white border rounded-lg h-[55px] w-[55px]'></div>
            <div className='border-white border rounded-lg h-[55px] w-[55px]'></div>
        </div>
    </div>);
}
import Image from 'next/image';
import { imageLoader } from '../lib/utils';
import { useState } from 'react';

export default function Tools ({ tools }: { tools: string[] }) {
    const toolsDisplay = tools.map(tool => {
        const [ showTooltip, setShowTooltip ] = useState<boolean>(false);

        return (<div className='relative'>
            <Image key={tool} src={`/logo/${tool}-w.png`} alt={tool} 
                height={48} width={48} loader={imageLoader} 
                onMouseOver={() => setShowTooltip(true)}
                onMouseOut={() => setShowTooltip(false)} 
            />
            {showTooltip && <div className='tooltip absolute top-[50px] left-auto right-auto bg-white/30 backdrop-blur-xl rounded-lg text-white px-2 py-1'>{tool}</div>}
        </div>);
    });

    return (<div className='flex flex-wrap items-start justify-center gap-12'>
        {toolsDisplay}
    </div>);
}
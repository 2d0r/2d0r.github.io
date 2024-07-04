import Image from 'next/image';

export default function Tools ({ tools }: { tools: string[] }) {
    const toolsDisplay = tools.map(tool => {
        return <Image key={tool} src={`@/logo/${tool}-w.png`} alt={tool} height={24} width={24} unoptimized />
    });

    return (<div className='flex flex-wrap items-start justify-center gap-8'>
        {toolsDisplay}
    </div>);
}
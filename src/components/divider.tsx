import { useSessionContext } from '@/context/session-context';
import clsx from 'clsx';

export default function Divider({ heading, className }: { 
    heading: string, className?: string 
}) {
    const { bgIsBlue } = useSessionContext();

    return (
        <div className={clsx(className, 'flex justify-center items-center w-full gap-2 my-4 transition-all duration-[3000ms] ease-in-out',
            bgIsBlue ? 'text-blue-200' : 'text-slate-400'
        )}>
            <div className={clsx('h-[1px] w-full transition-all duration-[3000ms] ease-in-out', 
                bgIsBlue ? 'bg-blue-200' : 'bg-slate-400')}></div>
            <div className='text-xl font-semibold w-auto text-center'>{heading}</div>
            <div className={clsx('h-[1px] w-full transition-all duration-[3000ms] ease-in-out', 
                bgIsBlue ? 'bg-blue-200' : 'bg-slate-400')}></div>
        </div>
    );
}
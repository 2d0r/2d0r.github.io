import { useSessionContext } from '@/context/session-context';
import { PaperAirplaneIcon } from '@heroicons/react/16/solid'
import clsx from 'clsx';
import React from 'react'
import { useFormStatus } from 'react-dom';

export default function SubmitBtn() {
    const { pending } = useFormStatus();
    const { bgIsBlue } = useSessionContext();

    return (
        <button type='submit' 
            className={clsx('mt-4 min-w-[200px] rounded-full bg-white hover:bg-yellow-300', 
            'p-2 flex items-center justify-center gap-2 group disabled:opacity-80',
            'animate-enlarge transition-all duration-[3s] ease-in-out',
            bgIsBlue ? 'hover:text-blue-400 text-blue-300' : 'hover:text-slate-500 text-slate-400')}
            style={{ transition: 'color 3s' }}
            disabled={pending}
        >
            { pending ? (
                <div className={clsx('h-5 w-5 animate-spin rounded-full border-b-2 border-l-2',
                    bgIsBlue ? 'border-b-blue-300' : 'border-b-slate-300', 'transition-all duration-[3000ms] ease-in-out'
                )}></div>
            ) : (<>
                Send
                <PaperAirplaneIcon height={18} className={clsx('group-hover:translate-x-1 transition-all',
                bgIsBlue ? 'fill-blue-300 group-hover:fill-blue-400' : 'fill-slate-400 group-hover:fill-slate-500')} 
                style={{ transition: 'fill 3s' }}/>
            </>)}
        </button>
    );
}
//fill='#8fc5ff' 
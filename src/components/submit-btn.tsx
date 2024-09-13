import { PaperAirplaneIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { useFormStatus } from 'react-dom';

export default function SubmitBtn() {
    const { pending } = useFormStatus();

    return (
        <button type='submit' 
            className='bg-white p-2 min-w-[200px] mt-4 text-blue-300 rounded-full enlarge 
            flex items-center justify-center gap-2 group disabled:opacity-80 hover:bg-yellow-200'
            disabled={pending}>
            { pending ? (
                <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-l-2 border-b-blue-300'></div>
            ) : (<>
                Send
                <PaperAirplaneIcon fill='#8fc5ff' height={18} className='group-hover:translate-x-1 transition-all' />
            </>)}
        </button>
    );
}

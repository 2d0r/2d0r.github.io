import clsx from 'clsx';

export default function Divider({ heading, className }: { 
    heading: string, className?: string 
}) {
    return (
    <div className={clsx(className, 'flex justify-center items-center w-full gap-2 text-blue-200 my-4')}>
        <div className='h-[1px] bg-blue-200 w-full'></div>
        <div className='text-xl font-semibold w-auto'>{heading}</div>
        <div className='h-[1px] bg-blue-200 w-full'></div>
    </div>);
}
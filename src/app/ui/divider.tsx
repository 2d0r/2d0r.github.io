export default function Divider({ heading }: { heading: string }) {
    return (
    <div className='flex justify-center items-center w-full gap-2'>
        <div className='h-[1px] bg-white w-full'></div>
        <div className='text-xl font-semibold w-auto'>{heading}</div>
        <div className='h-[1px] bg-white w-full'></div>
    </div>);
}
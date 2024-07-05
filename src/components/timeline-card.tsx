import { timelineData } from '../lib/data';

export default function TimelineCard ({ momentId } : { momentId: number }) {
    const timelineMoment = timelineData.find(moment => moment.id === momentId);

    return (<div className='border border-white rounded-3xl w-full h-full flex flex-col p-4 gap-2'>
        <div className='flex flex-col'>
            <span className='font-semibold'>{timelineMoment?.title}</span>
            <span className='font-medium'>{timelineMoment?.location}</span>
        </div>
        <span className='font-normal'>{timelineMoment?.text}</span>
    </div>);
}
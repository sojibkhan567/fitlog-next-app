"use client";
import { LuCalendarPlus2 } from 'react-icons/lu'

const AddTodaytBtn = () => {
    return (
        <button className='flex gap-3 items-center px-6 py-3 text-secondary font-bold bg-primary rounded-xl'>
            <LuCalendarPlus2 size={24} />
            Add to today&apos;s plan
        </button>
    )
}

export default AddTodaytBtn
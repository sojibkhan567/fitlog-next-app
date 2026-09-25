'use client';
import { FaRegBookmark } from 'react-icons/fa6'

const SaveLaterBtn = () => {
    return (
        <button className='flex gap-3 items-center px-6 py-3 font-medium border border-gray-400 rounded-xl'>
            <FaRegBookmark size={22} />
            Save for later
        </button>
    )
}

export default SaveLaterBtn
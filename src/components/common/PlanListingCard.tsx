import Image from 'next/image'
import Link from 'next/link'
import { FaCheck } from "react-icons/fa";
import { FaFireFlameCurved } from 'react-icons/fa6'
import { MdOutlineStarBorder, MdOutlineWatchLater } from 'react-icons/md'
import { RxCross1 } from "react-icons/rx";

const PlanListingCard = () => {
    return (
        <div className='bg-[#0b0d11] border border-gray-700 p-5 rounded-xl'>
            <div className='lg:flex justify-between items-center'>

                {/** left side content */}
                <div className='flex gap-7 '>
                    <div className="relative w-60 h-35 overflow-hidden rounded-xl">
                        <Image className="object-cover" src="/images/card-img.png" alt="img" fill />
                    </div>

                    <div className='space-y-2'>
                        <h1 className='text-3xl uppercase font-medium'>Russain Twist</h1>
                        <p className='text-gray-400'>Medichine Ball</p>
                        <div className="flex gap-6 text-gray-400 pt-2">
                            <div className="flex justify-center items-center gap-2">
                                <MdOutlineWatchLater className='text-primary' size={20} />
                                <p>25 min</p>
                            </div>
                            <div className="flex justify-center items-center gap-2">
                                <FaFireFlameCurved className='text-primary' size={18} />
                                <p>180 kcal</p>
                            </div>
                            <div className="flex justify-center items-center gap-2">
                                <MdOutlineStarBorder className='text-primary' size={20} />
                                <p>4.8</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/** right side content */}
                <div className='pr-6 md:mt-5 sm:mt-4'>
                    <div className='flex items-center gap-5'>
                        <Link href="/workouts/5">
                            <button className='px-6 py-2 border border-gray-700 rounded-full'>View Details</button>
                        </Link>
                        <button className='bg-primary text-secondary flex gap-2 items-center px-6 py-2 font-semibold border border-gray-700 rounded-full'>
                            <FaCheck />
                            Mark as Done
                        </button>
                        <button>
                            <RxCross1 size={22} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanListingCard
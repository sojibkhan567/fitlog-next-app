import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaRegBookmark } from 'react-icons/fa6'
import { LuCalendarPlus2 } from 'react-icons/lu'

const page = () => {
    return (
        <section className='pt-20 pb-25'>
            <div className='grid lg:grid-cols-2 xl:grid-cols-2 gap-15'>

                {/** left side image column */}
                <div className="relative h-162.5 rounded-2xl w-full overflow-hidden">
                    <Image className="object-cover" src="/images/card-img.png" alt="img" fill />
                </div>

                {/** right side details column */}
                <div className='space-y-3'>
                    {/** heding title */}
                    <h1 className='text-4xl font-bold uppercase'>Barbel press chest</h1>
                    <p className='text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti pariatur obcaecati mollitia vel quibusdam veniam corporis labore.</p>

                    {/** badge */}
                    <div className="flex gap-3 py-5">
                        <p className="px-5 py-0.5 rounded-full bg-primary text-secondary font-bold">Chest</p>
                        <p className="px-5 py-0.5 rounded-full bg-primary text-secondary font-bold">Arms</p>
                    </div>

                    {/** details table */}
                    <div className="bg-[#0d0f14] border border-gray-800 rounded-xl">
                        <div className="flex justify-between px-6 py-4 border-b border-gray-800">
                            <span className="font-medium text-gray-400 uppercase">Equipment</span>
                            <span className="text-gray-400 font-semibold">Barbel, Bench</span>
                        </div>
                        <div className="flex justify-between px-6 py-4 border-b border-gray-800">
                            <span className="font-medium text-gray-400 uppercase">Difficulty</span>
                            <span className="text-gray-400 font-semibold">Intermediate</span>
                        </div>
                        <div className="flex justify-between px-6 py-4 border-b border-gray-800">
                            <span className="font-medium text-gray-400 uppercase">Sets</span>
                            <span className="text-gray-400 font-semibold">4</span>
                        </div>
                        <div className="flex justify-between px-6 py-4 border-b border-gray-800">
                            <span className="font-medium text-gray-400 uppercase">Reps</span>
                            <span className="text-gray-400 font-semibold">6-8</span>
                        </div>
                        <div className="flex justify-between px-6 py-4 border-b border-gray-800">
                            <span className="font-medium text-gray-400 uppercase">Duration</span>
                            <span className="text-gray-400 font-semibold">25 min</span>
                        </div>
                        <div className="flex justify-between px-6 py-4 border-b border-gray-800">
                            <span className="font-medium text-gray-400 uppercase">Calories</span>
                            <span className="text-gray-400 font-semibold">180 kcal</span>
                        </div>
                        <div className="flex justify-between px-6 py-4">
                            <span className="font-medium text-gray-400 uppercase">Rating</span>
                            <span className="text-gray-400 font-semibold">4.8</span>
                        </div>
                    </div>

                    {/** instruction */}
                    <div className='mb-9'>
                        <h2 className='text-3xl py-6'>Instruction</h2>
                        <ol className='list-decimal px-4 space-y-3 text-gray-400'>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, at!</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, at!</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, at!</li>
                        </ol>
                    </div>

                    {/** btn list */}
                    <div className='flex gap-5'>
                        <Link href="/">
                            <button className='flex gap-3 items-center px-6 py-3 text-secondary font-bold bg-primary rounded-xl'>
                                <LuCalendarPlus2 size={24} />
                                Add to today's plan
                            </button>
                        </Link>
                        <Link href="/">
                            <button className='flex gap-3 items-center px-6 py-3 font-medium border border-gray-400 rounded-xl'>
                                <FaRegBookmark size={22} />
                                Save for later
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default page
"use client"
import { useWorkout } from '@/context/WorkoutContext'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {

    const { todaysPlan, savedPlan } = useWorkout();

    const pathName = usePathname();

    return (
        <nav className='py-5 border-b border-b-gray-700'>
            <div className='container mx-auto flex justify-between items-center'>

                {/** logo */}
                <div>
                    <Link href="/" className='flex gap-3 focus:outline-none'>
                        <Image src="/logo.png" alt="logo" width={30} height={30} />
                        <h1 className='text-2xl font-bold'>FITLOG</h1>
                    </Link>
                </div>

                {/** nav-links */}
                <div className='flex gap-5'>
                    <Link href="/">
                        <button className={`${pathName === "/" ? "bg-[#1A2312] text-primary" : " "} py-2 px-6 rounded-full cursor-pointer`}>Workouts</button>
                    </Link>
                    <Link href="/my-plans">
                        <button className={`${pathName === "/my-plans" ? "bg-[#1A2312] text-primary" : " "} py-2 px-6 rounded-full cursor-pointer`}>My Plan</button>
                    </Link>
                </div>

                {/** plan & saved btn */}
                <div className='flex gap-7'>
                    <Link href="/my-plans" className='flex gap-2 items-center'>
                        <p className='font-medium'>Plan</p>
                        <div className='h-7 w-7 flex justify-center items-center rounded-full bg-primary'>
                            <p className='text-secondary text-sm font-bold'>{todaysPlan.length}</p>
                        </div>
                    </Link>
                    <Link href="/my-plans" className='flex gap-2 items-center'>
                        <p className='font-medium'>Saved</p>
                        <div className='h-7 w-7 flex justify-center items-center rounded-full border'>
                            <p className='text-sm text-white font-bold'>{savedPlan.length}</p>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
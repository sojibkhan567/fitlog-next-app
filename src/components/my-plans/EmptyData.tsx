import Link from 'next/link'

const EmptyData = () => {
    return (
        <div className='h-87.5 bg-[#0b0d11] flex justify-center items-center border border-dashed border-gray-700 rounded-xl'>
            <div className='text-center'>
                <h1 className='text-4xl font-medium uppercase mb-2'>Nothing here yet</h1>
                <p className='text-gray-500 mb-7'>Browse the library and add a lift to get today moving.</p>
                <Link href="/">
                    <button className="rounded-full bg-primary px-6 py-3 font-bold text-secondary transition hover:bg-lime-400">
                        Go to Workouts
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default EmptyData
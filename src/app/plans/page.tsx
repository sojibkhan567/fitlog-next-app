import PlanListingCard from '@/components/common/PlanListingCard'


const MyPlansPage = () => {
    return (
        <section className='pt-20 pb-20'>
            {/** section title */}
            <div className='mb-8'>
                <h1 className='text-5xl font-bold pb-3 uppercase'>My Plan</h1>
                <p className='text-gray-400'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>
            
            {/** Statistics */}
            <div className='bg-[#0b0d11] px-10 py-10 border border-gray-700 rounded-xl'>
                <div className='flex gap-12 justify-between text-gray-400'>
                    <div className='w-full border-r border-r-gray-800'>
                        <p className='pb-3'>Exercise</p>
                        <h1 className='text-5xl font-bold text-primary'>2</h1>
                    </div>
                    <div className='w-full border-r border-r-gray-800'>
                        <p className='pb-3'>Minutes</p>
                        <h2 className='text-5xl font-bold text-white'>25</h2>
                    </div>
                    <div className='w-full'>
                        <p className='pb-3'>Calories</p>
                        <h2 className='text-5xl font-bold text-white'>190</h2>
                    </div>
                </div>
            </div>

            {/** Plan selection btn */}
            <div className='pt-12 pb-12'>
                <div className='flex justify-between items-center'>
                    <div className='bg-[#090b0f] flex items-center gap-8 py-1 px-2 rounded-xl border border-gray-700'>
                        <button className=' px-8 py-1.5 rounded-xl'>Today&apos;s Plan</button>
                        <button className='bg-[#10131a] px-8 py-1.5 border border-gray-700 rounded-xl'>Saved</button>
                    </div>

                    <div className="flex items-center gap-2">
                        <label htmlFor="sort" className="font-medium text-gray-500">Sort By</label>
                        <select
                            id="sort"
                            className="cursor-pointer rounded-lg border border-gray-700 px-4 py-2 text-sm font-medium text-gray-400 outline-none focus:outline-none"
                        >
                            <option className='bg-gray-900' value="rating">Rating</option>
                            <option className='bg-gray-900' value="pages">Number</option>
                            <option className='bg-gray-900' value="year">Published</option>
                        </select>
                    </div>
                </div>
            </div>

            {/** Plans list section */}
            <div className='grid gap-4'>
                <PlanListingCard />
                <PlanListingCard />
                <PlanListingCard />
                <PlanListingCard />
            </div>
        </section>
    )
}

export default MyPlansPage
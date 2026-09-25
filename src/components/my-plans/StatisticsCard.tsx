import { WorkoutDataType } from "@/types/WorkoutTpes"


const StatisticsCard = ({ workouts }: { workouts: WorkoutDataType[] }) => {
    // calculate total duration
    const totalMinute = workouts.reduce((accumulator, item) => accumulator + item.duration, 0);

    // caculate total calories
    const totalCalories = workouts.reduce((accumulator, item) => accumulator + item.caloriesBurned, 0);

    return (
        <div className='bg-[#0b0d11] px-10 py-10 border border-gray-700 rounded-xl'>
            <div className='flex gap-12 justify-between text-gray-400'>
                <div className='w-full border-r border-r-gray-800'>
                    <p className='pb-3'>Exercise</p>
                    <h1 className='text-5xl font-bold text-primary'>{workouts.length}</h1>
                </div>
                <div className='w-full border-r border-r-gray-800'>
                    <p className='pb-3'>Minutes</p>
                    <h2 className='text-5xl font-bold text-white'>{totalMinute}</h2>
                </div>
                <div className='w-full'>
                    <p className='pb-3'>Calories</p>
                    <h2 className='text-5xl font-bold text-white'>{totalCalories}</h2>
                </div>
            </div>
        </div>
    )
}

export default StatisticsCard
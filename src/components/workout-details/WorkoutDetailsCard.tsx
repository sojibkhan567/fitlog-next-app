
import { WorkoutDataType } from '@/types/WorkoutTpes'
import AddTodaytBtn from './AddTodaytBtn'
import SaveLaterBtn from './SaveLaterBtn'

type WorkoutDetailsCardProps = {
    workout: WorkoutDataType
}

const WorkoutDetailsCard = ({ workout }: WorkoutDetailsCardProps) => {
    return (
        <div className='space-y-3'>
            {/** heding title */}
            <h1 className='text-4xl font-bold uppercase'>{workout.name}</h1>
            <p className='text-gray-400'>{workout.description}</p>

            {/** badge */}
            <div className="flex gap-3 py-4">
                {workout.muscleGroups.map((muscleGroup, index) => (
                    <p key={index} className="px-5 py-0.5 rounded-full bg-primary text-secondary font-bold">{muscleGroup}</p>
                ))}
            </div>

            {/** Details table info */}
            <div className="bg-[#0d0f14] border border-gray-800 rounded-xl">
                <div className="flex justify-between px-6 py-3 border-b border-gray-800">
                    <span className="text-sm font-medium text-gray-400 uppercase">Equipment</span>
                    <span className="text-sm text-gray-400 font-semibold">{workout.equipment}</span>
                </div>

                <div className="flex justify-between px-6 py-3 border-b border-gray-800">
                    <span className="text-sm font-medium text-gray-400 uppercase">Difficulty</span>
                    <span className="text-sm text-gray-400 font-semibold">{workout.difficulty}</span>
                </div>

                <div className="flex justify-between px-6 py-3 border-b border-gray-800">
                    <span className="text-sm font-medium text-gray-400 uppercase">Sets</span>
                    <span className="text-sm text-gray-400 font-semibold">{workout.sets}</span>
                </div>

                <div className="flex justify-between px-6 py-3 border-b border-gray-800">
                    <span className="text-sm font-medium text-gray-400 uppercase">Reps</span>
                    <span className="text-sm text-gray-400 font-semibold">{workout.reps}</span>
                </div>

                <div className="flex justify-between px-6 py-3 border-b border-gray-800">
                    <span className="text-sm font-medium text-gray-400 uppercase">Duration</span>
                    <span className="text-sm text-gray-400 font-semibold">{workout.duration}</span>
                </div>

                <div className="flex justify-between px-6 py-3 border-b border-gray-800">
                    <span className="text-sm font-medium text-gray-400 uppercase">Calories</span>
                    <span className="text-sm text-gray-400 font-semibold">{workout.caloriesBurned}</span>
                </div>

                <div className="flex justify-between px-6 py-3">
                    <span className="text-sm font-medium text-gray-400 uppercase">Rating</span>
                    <span className="text-sm text-gray-400 font-semibold">{workout.rating}</span>
                </div>
            </div>

            {/** Instruction list */}
            <div className='mb-9'>
                <h2 className='text-3xl py-6'>Instruction</h2>
                <ol className='list-decimal px-4 space-y-3 text-gray-500'>
                    {workout.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </ol>
            </div>

            {/** btn list */}
            <div className='flex gap-5'>
                <AddTodaytBtn workout={workout} />
                <SaveLaterBtn workout={workout} />
            </div>
        </div>
    )
}

export default WorkoutDetailsCard
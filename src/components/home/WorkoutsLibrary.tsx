import React from 'react'
import LibraryCard from '../common/LibraryCard'
import { WorkoutDataType } from '@/types/WorkoutTpes';


// fetch all api data
const getWorkouts = async () => {
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await response.json();
    return data;
}

const WorkoutsLibrary = async () => {

    const workoutsData = await getWorkouts();
    //console.log(workoutsData)

    return (
        <section id="library" className="pb-20">
            <div className="mb-8">
                <h1 className="text-4xl text-white uppercase font-bold leading-tight mb-2">The Library</h1>
                <p className="text-gray-400">Twelve lifts covering every major muscle group.</p>
            </div>

            {/** Library crard list */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-3">
                {workoutsData.map((workout: WorkoutDataType, index: number) => (
                    <LibraryCard key={index} workout={workout} />
                ))}
            </div>
        </section>
    )
}

export default WorkoutsLibrary
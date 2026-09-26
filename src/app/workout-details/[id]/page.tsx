import WorkoutDetailsCard from '@/components/workout-details/WorkoutDetailsCard';
import WorkoutImageCard from '@/components/workout-details/WorkoutImageCard';
import { WorkoutDataType } from '@/types/WorkoutTpes';

type WorkoutDetailsPageProps = {
    params: Promise<{ id: number }>;
};

// fetch workout single data by id
const getSingleWorkout = async (id: number) => {
    const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
    const data = await response.json();
    return data;
}

const WorkoutDetailsPage = async ({ params }: WorkoutDetailsPageProps) => {
    const { id } = await params;

    const workout: WorkoutDataType = await getSingleWorkout(id);
    //console.log(workout)

    return (
        <section className='pt-20 pb-25'>
            <div className='grid lg:grid-cols-2 xl:grid-cols-2 gap-15'>
                {/** left side image column */}
                <WorkoutImageCard imgUrl={workout.image} />
                
                {/** right side details column */}
                <WorkoutDetailsCard workout={workout} />
            </div>
        </section>
    )
}

export default WorkoutDetailsPage;
'use client';
import { useWorkout } from '@/context/WorkoutContext';
import { WorkoutDataType } from '@/types/WorkoutTpes';
import { FaRegBookmark } from 'react-icons/fa6'
import { LuCheck } from 'react-icons/lu';
import { toast } from 'react-toastify';

const SaveLaterBtn = ({ workout }: { workout: WorkoutDataType }) => {
    const { savedPlan, addToSavedPlan } = useWorkout();

    // if item is already added
    const alreadyAdded = savedPlan.some(
        (item) => item.id === workout.id
    );

    // handle item added method
    const handleSavedBtn = () => {
        if (alreadyAdded) {
            toast.error("This workout is already in saved plan.");
            return;
        }

        const success = addToSavedPlan(workout);

        if (success) {
            toast.success("Workout added to today's plan!");
        } else {
            toast.error("Already added to the today's plan.")
        }
    }

    return (
        <button 
        onClick={handleSavedBtn}
        className='flex gap-3 items-center px-6 py-3 font-medium border border-gray-400 rounded-xl'>
            {alreadyAdded ? (
                <LuCheck size={24} />
            ) : (
                <FaRegBookmark size={24} />
            )}
            {alreadyAdded
                ? "Already Added"
                : "Saved Plan"
            }

        </button>
    )
}

export default SaveLaterBtn
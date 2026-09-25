"use client";
import { useWorkout } from '@/context/WorkoutContext';
import { WorkoutDataType } from '@/types/WorkoutTpes';
import { LuCalendarPlus2, LuCalendarX2, LuCheck } from 'react-icons/lu'
import { toast } from 'react-toastify';

const AddTodaytBtn = ({ workout }: { workout: WorkoutDataType }) => {
    const { todaysPlan, addToTodaysPlan } = useWorkout();

    // if item is already added
    const alreadyAdded = todaysPlan.some(
        (item) => item.id === workout.id
    );

    // check full of item list
    const planFull = todaysPlan.length >= 5;

    // handle item added method
    const handleAddBtn = () => {
        if (alreadyAdded) {
            toast.error("This workout is already in today's plan.");
            return;
        }

        if (planFull) {
            toast.error("Today's plan can contain a maximum of 5 lifts.");
            return;
        }

        const success = addToTodaysPlan(workout);

        if (success) {
            toast.success("Workout added to today's plan!");
        } else {
            toast.error("Already added to saved plan.")
        }
    };

    return (
        <button
            onClick={handleAddBtn}
            className={`flex gap-3 items-center px-6 py-3 rounded-xl font-bold ${alreadyAdded || planFull
                ? "cursor-not-allowed bg-gray-900 text-gray-400 border border-gray-700"
                : "text-secondary bg-primary"
                }`
            }
        >
            {alreadyAdded ? (
                <LuCheck size={24} />
            ) : planFull ? (
                <LuCalendarX2 size={24} />
            ) : (
                <LuCalendarPlus2 size={24} />
            )}
            {alreadyAdded
                ? "Already Added"
                : planFull
                ? "Plan Full (5/5)"
                : "Add to Today's Plan"
            }
        </button>
    )
}

export default AddTodaytBtn
"use client";

import { WorkoutDataType } from "@/types/WorkoutTpes";
import { createContext, useContext, useState, ReactNode } from "react";

type WorkoutContextType = {
    todaysPlan: WorkoutDataType[];
    addToTodaysPlan: (workout: WorkoutDataType) => boolean;
    removeFromTodaysPlan: (id: number) => boolean;

    savedPlan: WorkoutDataType[];
    addToSavedPlan: (workout: WorkoutDataType) => boolean;
    removeFromSavedPlan: (id: number) => boolean;
};

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

export const WorkoutProvider = ({ children }: { children: ReactNode }) => {
    const [todaysPlan, setTodaysPlan] = useState<WorkoutDataType[]>([]);
    const [savedPlan, setSavedPlan] = useState<WorkoutDataType[]>([]);

    /** Add to today's plan method */
    const addToTodaysPlan = (workout: WorkoutDataType): boolean => {
        // Check duplicate
        const alreadyExists =
            todaysPlan.some((item) => item.id === workout.id) ||
            savedPlan.some((item) => item.id === workout.id);

        if (alreadyExists) {
            return false;
        }

        setTodaysPlan((prev) => [...prev, workout]);
        return true;
    };

    // Remove today's plan method
    const removeFromTodaysPlan = (id: number): boolean => {
        const exists = todaysPlan.some((workout) => workout.id === id);
        if (!exists) {
            return false;
        }
        setTodaysPlan((prev) =>
            prev.filter((workout) => workout.id !== id)
        );
        return true;
    };

    /** Add to saved plan method */
    const addToSavedPlan = (workout: WorkoutDataType): boolean => {
        // Check duplicate
        const alreadyExists =
            todaysPlan.some((item) => item.id === workout.id) ||
            savedPlan.some((item) => item.id === workout.id);

        if (alreadyExists) {
            return false;
        }

        setSavedPlan((prev) => [...prev, workout]);
        return true;
    };

    // Remove saved plan method
    const removeFromSavedPlan = (id: number): boolean => {
        const exists = savedPlan.some((workout) => workout.id === id);
        if (!exists) {
            return false;
        }
        setSavedPlan((prev) =>
            prev.filter((workout) => workout.id !== id)
        );
        return true;
    };

    return (
        <WorkoutContext.Provider
            value={{
                todaysPlan,
                addToTodaysPlan,
                removeFromTodaysPlan,
                savedPlan,
                addToSavedPlan,
                removeFromSavedPlan,
            }}
        >
            {children}
        </WorkoutContext.Provider>
    );
};

// context use hook
export const useWorkout = () => {
    const context = useContext(WorkoutContext);
    if (!context) {
        throw new Error("useWorkout must be used inside Workout Provider");
    }
    return context;
};
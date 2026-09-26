"use client";

import { WorkoutDataType } from "@/types/WorkoutTpes";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type WorkoutContextType = {
    todaysPlan: WorkoutDataType[];
    addToTodaysPlan: (workout: WorkoutDataType) => boolean;
    removeFromTodaysPlan: (id: number) => boolean;

    savedPlan: WorkoutDataType[];
    addToSavedPlan: (workout: WorkoutDataType) => boolean;
    removeFromSavedPlan: (id: number) => boolean;

    isLoaded: boolean;
};

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

export const WorkoutProvider = ({ children }: { children: ReactNode }) => {
    const [todaysPlan, setTodaysPlan] = useState<WorkoutDataType[]>([]);
    const [savedPlan, setSavedPlan] = useState<WorkoutDataType[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    /* ---- LOAD Data FROM localStorage ---- */
    useEffect(() => {
        try {
            const storedTodays = localStorage.getItem("todaysPlanData");
            const storedSaved = localStorage.getItem("savedPlanData");

            if (storedTodays) setTodaysPlan(JSON.parse(storedTodays));
            if (storedSaved) setSavedPlan(JSON.parse(storedSaved));
        } catch (error) {
            console.error("Failed to load plans from localStorage:", error);
        } finally {
            setIsLoaded(true);
        }
    }, []);

    /*---- SAVE Today's data in localStorage ----*/
    useEffect(() => {
        if (!isLoaded) return;
        try {
            localStorage.setItem("todaysPlanData", JSON.stringify(todaysPlan));
        } catch (error) {
            console.error("Failed to save today's plan:", error);
        }
    }, [todaysPlan, isLoaded]);

    /*---- SAVE saved data in localStorage ----*/
    useEffect(() => {
        if (!isLoaded) return;
        try {
            localStorage.setItem("savedPlanData", JSON.stringify(savedPlan));
        } catch (error) {
            console.error("Failed to save saved plan:", error);
        }
    }, [savedPlan, isLoaded]);


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
                isLoaded,
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
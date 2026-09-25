"use client";

import PlanListingCard from '@/components/common/PlanListingCard'
import EmptyData from '@/components/my-plans/EmptyData';
import PlansSelectionTab from '@/components/my-plans/PlansSelectionTab'
import SortingPlanTab from '@/components/my-plans/SortingPlanTab'
import StatisticsCard from '@/components/my-plans/StatisticsCard'
import { useWorkout } from '@/context/WorkoutContext';
import { useMemo, useState } from 'react';

type TabType = "today" | "saved";
type SortType = "duration" | "calories" | "rating";

const MyPlansPage = () => {
    const { todaysPlan, savedPlan } = useWorkout();

    const [activeTab, setActiveTab] = useState<TabType>("today");
    const [sortBy, setSortBy] = useState<SortType>("duration");

    // Select data according to active tab
    const currentPlans = activeTab === "today" ? todaysPlan : savedPlan;

    // Sort data for tab selection
    const sortedWorkoutsData = useMemo(() => {
        return [...currentPlans].sort((a, b) => {
            if (sortBy === "duration") {
                return a.duration - b.duration;
            }
            if (sortBy === "calories") {
                return a.caloriesBurned - b.caloriesBurned;
            }
            if (sortBy === "rating") {
                return b.rating - a.rating;
            }
            return 0;
        });
    }, [currentPlans, sortBy]);

    return (
        <section className='pt-15 pb-20'>
            {/** section title */}
            <div className='mb-8'>
                <h1 className='text-5xl font-bold pb-3 uppercase'>My Plan</h1>
                <p className='text-gray-400'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>

            {/** Statistics */}
            <StatisticsCard workouts={currentPlans} />

            {/** Plan selection btn */}
            <div className='pt-12 pb-12'>
                <div className='flex justify-between items-center'>
                    <PlansSelectionTab
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />

                    <SortingPlanTab
                        sortBy={sortBy}
                        setSortBy={setSortBy}
                    />
                </div>
            </div>

            {/** Plans list section */}
            <div className='grid gap-4'>
                {sortedWorkoutsData.length === 0 ? (
                    <EmptyData />
                ) : (
                    sortedWorkoutsData.map((workout) => (
                        <PlanListingCard
                            key={workout.id}
                            workout={workout}
                            activeTab={activeTab}
                        />
                    ))
                )}
            </div>
        </section>
    )
}

export default MyPlansPage
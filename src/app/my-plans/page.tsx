"use client";

import PlanListingCard from '@/components/common/PlanListingCard'
import PlansSelectionTab from '@/components/my-plans/PlansSelectionTab'
import SortingPlanTab from '@/components/my-plans/SortingPlanTab'
import StatisticsCard from '@/components/my-plans/StatisticsCard'
import { useWorkout } from '@/context/WorkoutContext';
import { useState } from 'react';

type TabType = "today" | "saved";
type SortType = "rating" | "number" | "published";

const MyPlansPage = () => {
    const { todaysPlan, savedPlan } = useWorkout();

    const [activeTab, setActiveTab] = useState<TabType>("today");
    const [sortBy, setSortBy] = useState<SortType>("rating");

    // Select data according to active tab
    const currentPlans = activeTab === "today" ? todaysPlan : savedPlan;

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

                    <SortingPlanTab />
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
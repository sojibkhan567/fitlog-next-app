"use client";

type SortType = "duration" | "calories" | "rating";

type SortingPlanProps = {
    sortBy: SortType;
    setSortBy: (sort: SortType) => void;
};

const SortingPlanTab = ({ sortBy, setSortBy }: SortingPlanProps) => {
    return (
        <div className="flex items-center gap-2">
            <label htmlFor="sort" className="font-medium text-gray-500">Sort By</label>
            <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortType)}
                className="cursor-pointer rounded-lg border border-gray-700 px-4 py-2 text-sm font-medium text-gray-400 outline-none focus:outline-none"
            >
                <option className='bg-gray-900' value="duration">Duration</option>
                <option className='bg-gray-900' value="calories">Calories</option>
                <option className='bg-gray-900' value="rating">Rating</option>
            </select>
        </div>
    )
}

export default SortingPlanTab
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
            {/* Chevron */}
            <svg
                className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m6 9 6 6 6-6"
                />
            </svg>
        </div>
    )
}

export default SortingPlanTab
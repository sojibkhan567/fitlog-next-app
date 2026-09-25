import React from 'react'

const SortingPlanTab = () => {
  return (
      <div className="flex items-center gap-2">
          <label htmlFor="sort" className="font-medium text-gray-500">Sort By</label>
          <select
              id="sort"
              className="cursor-pointer rounded-lg border border-gray-700 px-4 py-2 text-sm font-medium text-gray-400 outline-none focus:outline-none"
          >
              <option className='bg-gray-900' value="rating">Rating</option>
              <option className='bg-gray-900' value="pages">Number</option>
              <option className='bg-gray-900' value="year">Published</option>
          </select>
      </div>
  )
}

export default SortingPlanTab
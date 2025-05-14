import React from 'react';
import { useSearchParams } from 'react-router-dom';

const SortOption = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortChange = (e) => {
    const sortBy = e.target.value;
    const newParams = new URLSearchParams(searchParams.toString());

    if (sortBy) {
      newParams.set('sortBy', sortBy);
    } else {
      newParams.delete('sortBy');
    }

    setSearchParams(newParams);
  };

  return (
    <div className="mb-4 flex items-center justify-end">
      <label htmlFor="sort" className="mr-2 text-sm text-gray-700 font-medium">
        Sort by:
      </label>
      <select
        id="sort"
        onChange={handleSortChange}
        value={searchParams.get('sortBy') || ''}
        className="border border-gray-300 px-3 py-1.5 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
      >
        <option value="">Default</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  );
};

export default SortOption;

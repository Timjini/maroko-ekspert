import { useState } from 'react';

interface Filter {
  type?: string;
  city?: string;
  include?: string;
  duration?: string;
  price?: string;
}

const TourSidebar = ({ onSearch }: { onSearch: (filters: Filter) => void }) => {
  const [filters, setFilters] = useState<Filter>({
    type: '',
    city: '',
    include: '',
    duration: '',
    price: '',
  });

  const handleTagClick = (tag: string, value: string) => {
    const newFilters = { ...filters, [tag]: value };
    setFilters(newFilters);
    onSearch(newFilters);
  };

  const handleReset = () => {
    const resetFilters = { type: '', city: '', include: '', duration: '', price: '' };
    setFilters(resetFilters);
    onSearch(resetFilters);
  };

  return (
    <div className="w-64 bg-gray-100 p-4 shadow-md">
      <h2 className="text-xl font-semibold mb-4">Filter Tours</h2>

      {/* Filter by Type */}
      <div className="mb-4">
        <h3 className="font-semibold">Type</h3>
        <div className="space-x-2">
          {['excursion', 'tour', 'adventure'].map((value) => (
            <button
              key={value}
              className={`px-3 py-1 rounded-full text-sm border ${
                filters.type === value ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
              }`}
              onClick={() => handleTagClick('type', value)}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      {/* Filter by City */}
      <div className="mb-4">
        <h3 className="font-semibold">City</h3>
        <div className="space-x-2">
          {['Marrakech', 'Agadir', 'Essaouira'].map((value) => (
            <button
              key={value}
              className={`px-3 py-1 rounded-full text-sm border ${
                filters.city === value ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
              }`}
              onClick={() => handleTagClick('city', value)}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      {/* Filter by Include */}
      <div className="mb-4">
        <h3 className="font-semibold">Include</h3>
        <div className="space-x-2">
          {['Breakfast', 'Lunch', 'Dinner'].map((value) => (
            <button
              key={value}
              className={`px-3 py-1 rounded-full text-sm border ${
                filters.include === value ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
              }`}
              onClick={() => handleTagClick('include', value)}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      {/* Filter by Duration */}
      <div className="mb-4">
        <h3 className="font-semibold">Duration</h3>
        <div className="space-x-2">
          {['Half Day', 'Full Day', 'Multiple Days'].map((value) => (
            <button
              key={value}
              className={`px-3 py-1 rounded-full text-sm border ${
                filters.duration === value ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
              }`}
              onClick={() => handleTagClick('duration', value)}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      {/* Filter by Price */}
      <div className="mb-4">
        <h3 className="font-semibold">Price</h3>
        <div className="space-x-2">
          {['Under $50', '$50-$100', 'Over $100'].map((value) => (
            <button
              key={value}
              className={`px-3 py-1 rounded-full text-sm border ${
                filters.price === value ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
              }`}
              onClick={() => handleTagClick('price', value)}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      {/* Reset Filters Button */}
      <button
        onClick={handleReset}
        className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default TourSidebar;

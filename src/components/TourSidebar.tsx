import { useState } from 'react';
import MainButton from './MainButton';
// import { useNavigate } from 'react-router-dom';
import { Filter } from '../types/tour';

const TourSidebar = ({ onSearch }: { onSearch: (filters: Filter) => void }) => {
  // const navigate = useNavigate();

  const [filters, setFilters] = useState<Filter>({
    type: '',
    include: '',
    duration: '',
    price: '',
  });
  

  const [isOpen, setIsOpen] = useState(false);

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  const handleTagClick = (tag: string, value: string) => {
    const newFilters = { ...filters, [tag]: value };
    setFilters(newFilters);
    onSearch(newFilters);
  };

  const handleReset = () => {
    const resetFilters = { type: '', include: '', duration: '', price: '' };
    setFilters(resetFilters);
    onSearch(resetFilters);
  };

  // const handleCityClick = (city: string) => {
  //   navigate(`/cities/${city.toLowerCase()}`);
  //   handleTagClick('city', city);
  // };

  return (
    <>
      <button
        onClick={toggleFilter}
        className="md:hidden mt-4 px-4 py-2 bg-gray-900 text-white rounded-md h-12 mx-auto"
      >
        Filter
      </button>

      <div
        className={`fixed inset-0 bg-white p-6 z-50 transform sideBar ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform md:static md:translate-x-0 md:w-64 md:block bg-gray-100 shadow-md`}
      >
        <div className="flex justify-between items-center mb-6 md:hidden">
          <h2 className="text-xl font-semibold">Filter Tours</h2>
          <button onClick={toggleFilter} className="text-gray-500 text-2xl">
            &times;
          </button>
        </div>

        {['Type', 'Include', 'Duration', 'Price'].map((category) => {
          const options = {
            Type: ['excursion', 'tour', 'adventure'],
            // City: ['Marrakech', 'Agadir', 'Essaouira'],
            Include: ['Breakfast', 'Lunch', 'Dinner'],
            Duration: ['Half Day', 'Full Day', 'Multiple Days'],
            Price: ['Under $50', '$50-$100', 'Over $100'],
          }[category];

          return (
            <div key={category} className="mb-4">
              <h3 className="font-semibold mb-2">{category}</h3>
              <div className="flex flex-col space-y-2">
                  {options?.map((value) => (
                  <button
                    key={value}
                    className={`px-3 py-1 rounded-full text-sm border ${
                      filters[category.toLowerCase() as keyof Filter]?.includes(value)
                        ? 'bg-gray-900 text-white'
                        : 'bg-white text-gray-900'
                    }`}
                    // onClick={() =>
                    //   category === 'City' ? handleCityClick(value) : handleTagClick(category.toLowerCase() as keyof Filter, value)
                    // }
                    onClick={()=> handleTagClick(category.toLowerCase() as keyof Filter, value)}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
          );
        })}

        <MainButton title="Reset Filters" onClick={handleReset} />
      </div>

      {isOpen && (
        <div
          onClick={toggleFilter}
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
        ></div>
      )}
    </>
  );
};

export default TourSidebar;

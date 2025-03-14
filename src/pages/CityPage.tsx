import  { useState, useEffect } from 'react';
import TourSidebar from '../components/TourSidebar';
import useGetTours  from '../hooks/useGetTours';
import Card from '../components/Card';
import { useParams } from 'react-router-dom';

interface Tour {
  _id: string;
  type: string;
  city: string;
  include: string;
  duration: string;
  price: number;
  title_en: string;
  content_en: string;
  image_url?: string;
}

interface Filter {
  type?: string;
  city?: string;
  include?: string;
  duration?: string;
  price?: string;
}

const CityPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const { tours, loading, error } = useGetTours({ city: slug });
    const [filteredTours, setFilteredTours] = useState<Tour[]>(tours);
  
    const handleSearch = (filters: Filter) => {
      let filtered = tours;
    
      if (filters.type) {
        filtered = filtered.filter((tour) =>
          tour.type?.toLowerCase().includes(filters.type?.toLowerCase() ?? '')
        );
      }
      if (filters.city) {
        filtered = filtered.filter((tour) =>
          tour.city?.toLowerCase().includes(filters.city?.toLowerCase() ?? '')
        );
      }
      if (filters.include) {
        filtered = filtered.filter((tour) =>
          tour.include?.toLowerCase().includes(filters.include?.toLowerCase() ?? '')
        );
      }
      if (filters.duration) {
        filtered = filtered.filter((tour) =>
          tour.duration?.toLowerCase().includes(filters.duration?.toLowerCase() ?? '')
        );
      }
      if (filters.price) {
        filtered = filtered.filter((tour) => {
          if (filters.price === 'Under $50') return tour.price < 50;
          if (filters.price === '$50-$100') return tour.price >= 50 && tour.price <= 100;
          if (filters.price === 'Over $100') return tour.price > 100;
          return true;
        });
      }
    
      setFilteredTours(filtered);
    };
    
  
    useEffect(() => {
      setFilteredTours(tours);
    }, [tours]);


    console.log("fetched tours.",filteredTours.length)
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
  
    return (
      <div className="flex pt-24 min-h-screen">
        <TourSidebar onSearch={handleSearch} />
  
        <div className="flex-1 p-4">
          <h1 className="text-2xl font-semibold mb-4">Available Tours</h1>
          {filteredTours.length > 0  ? ( <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTours.map((tour) => (
              <Card
              key={tour._id}
              title={tour.title_en}
              city={tour.city}
              content={tour.content_en.slice(0, 150)+ '...'}
              price={tour.price}
              imageUrl={tour.image_url || ""}
              _id= {tour._id}
            />
            ))}
          </div>) : (
            <div className='flex flex-row justify-center mx-auto content-center align-middle'>
              <h1 className="text-xl font-semibold mb-4">No tours Found !</h1>
            </div>
          )}

        </div>
      </div>
    );
  };
  
  export default CityPage;
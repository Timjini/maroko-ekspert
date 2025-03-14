import  { useState, useEffect } from 'react';
import useGetTours  from '../hooks/useGetTours';

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

const useFetchTours = (city:string | undefined) => {
    const { tours, loading, error } = useGetTours({ city: city });
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

    return { filteredTours, loading, error, handleSearch };

   
  };
  
  export default useFetchTours;
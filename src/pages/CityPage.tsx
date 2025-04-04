import TourSidebar from '../components/TourSidebar';
import Card from '../components/Card';
import { useParams } from 'react-router-dom';
import useFetchTours from '../hooks/useFetchTours';
import { formatMediaImage } from '../utils';


const CityPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const { filteredTours, loading, error,handleSearch  } = useFetchTours(slug);
    const currentCity = slug;


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
  
    return (
      <div className="toursContainer flex flex-col md:flex-row pt-20 min-h-screen">
        <TourSidebar onSearch={handleSearch} />
  
        <div className="flex-1 p-4 mt-12">
          <h1 className="text-2xl font-semibold mb-4 text-center capitalize">{currentCity || "Available Tours"}</h1>
          {filteredTours.length > 0  ? ( <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTours.map((tour) => (
              <Card
              key={tour._id}
              title={tour.title_en}
              city={tour.city}
              content={tour.description_en.slice(0, 150)+ '...'}
              price={tour.price}
              imageUrl={formatMediaImage(tour?.imageUrls[0]) || ""}
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
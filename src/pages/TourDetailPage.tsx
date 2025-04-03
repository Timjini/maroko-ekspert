// import React from 'react';
import { useParams } from 'react-router-dom';
import useGetTours from '../hooks/useGetTours';
import { formatMediaImage } from '../utils';
import SimilarExcursionCard from '../components/SimilarExcursionCard';
// import MainButton from '../components/MainButton';

const TourDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { tours, similarExcursions, loading, error } = useGetTours({ _id: slug });


  console.log("similarExcursions", similarExcursions);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (tours.length === 0) return <div>No tour found.</div>;

  const tour = tours[0];

  return (
    <div className=" mx-auto py-36 px-4 md:px-32 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <img
            src={formatMediaImage(tour?.imageUrls[0]) || 'default-image-url.jpg'}
            alt={tour.title_en}
            className="w-full h-96 object-cover rounded-lg"
          />
          <div dangerouslySetInnerHTML={{ __html: tour.content_en }} />
        </div>

        <div>
          <h1 className="text-4xl font-bold text-gray-900">{tour.title_en}</h1>
          <p className="text-md text-gray-500 mt-2">{tour.city}</p>

          <div className="flex justify-between items-center my-8">
            <div>
              <h3 className="text-lg font-semibold">Excursion</h3>
              <p className="text-gray-600">{tour.duration} hours</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Meals</h3>
              <p className="text-gray-600">Included</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Beverages</h3>
              <p className="text-gray-600">Not Included</p>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-sm mb-6">
            <h3 className="text-xl font-semibold mb-4">Details</h3>
            <table className="w-full text-gray-700">
              <tbody>
                <tr>
                  <td className="py-2 font-medium">Location</td>
                  <td>{tour.city}</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Timing</td>
                  <td>{tour.timing}</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Price</td>
                  <td>€{tour.price.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
            Get An Offer
          </button>

          <h3 className="text-xl font-semibold mt-10 mb-4">More Excursions</h3>
          <div className="flex flex-col gap-4">
            {similarExcursions.map((excursion) => (
              <SimilarExcursionCard
                key={excursion._id}
                _id={excursion._id}
                title={excursion.title_en}
                duration={excursion.duration}
                price={excursion.price}
                imageUrls={excursion.imageUrls}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetailPage;
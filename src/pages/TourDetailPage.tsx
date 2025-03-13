import React from 'react';
import { useParams } from 'react-router-dom';
import useGetTours from '../hooks/useGetTours';
import MainButton from '../components/MainButton';

const TourDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { tours, loading, error } = useGetTours({ _id: slug });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (tours.length === 0) return <div>No tour found.</div>;

  const tour = tours[0];

  return (
    <div className="container mx-auto pt-36 px-4 min-h-screen">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <img
            src={tour.imageUrl || 'default-image-url.jpg'}
            alt={tour.title_en}
            className="w-full h-96 object-cover rounded-md"
          />
           <div className="my-8">
            <p className="text-gray-600 leading-pretty">
              {tour.content_en}
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold">{tour.title_en}</h2>
          <p className="text-sm text-gray-500 mt-2">{tour.city}</p>

          <div className="flex gap-8 my-6">
            <div>
              <h3 className="font-semibold">Excursion</h3>
              <p className="text-gray-600">{tour.duration} hours</p>
            </div>
            <div>
              <h3 className="font-semibold">Meals</h3>
              <p className="text-gray-600">
                Included
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Beverages</h3>
              <p className="text-gray-600">
                Not Included
              </p>
            </div>
          </div>

          <div className="border-t border-b py-6">
            <h3 className="text-xl font-bold mb-4">Details</h3>
            <table className="w-full">
              <tbody>
                <tr className="border-b">
                  <td className="py-3 font-semibold">LOCATION</td>
                  <td className="py-3">{tour.city}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 font-semibold">TIMING</td>
                  <td className="py-3">{tour.timing}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 font-semibold">PRICE</td>
                  <td className="py-3">€{tour.price.toFixed(2)}</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold">Book Now</td>
                  <td className="py-3">
                    <MainButton title="Book Now" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* More Excursions */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">More Excursions</h3>
            <ul className="list-disc pl-5 space-y-2">
              {/* {tour.relatedTours?.map((excursion: any, index: number) => (
                <li key={index} className="text-gray-600">
                  {excursion.title}
                  {excursion.subItems && (
                    <ul className="list-circle pl-5 mt-2">
                      {excursion.subItems.map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))} */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetailPage;
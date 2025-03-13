import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import mainApi from '../api'; // Assuming you have an API utility
import useGetTours from '../hooks/useGetTours';

interface TourDetailProps {
  title: string;
  city: string;
  content: string;
  price: number;
  imageUrl: string;
  _id: string;
}

const TourDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { tours, loading, error } = useGetTours();

  console.log("tour------>",tours);

  useEffect(() => {
    const fetchTour = async () => {
      if (slug) {
        try {
          setLoading(true);
          const response = await mainApi.getAllTours({ _id: slug }); 
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchTour();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <img src={tours[0]?.imageUrl} alt={tours[0]?.title} className="w-full h-96 object-cover rounded-md" />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold">{tours[0]?.title}</h2>
          <p className="text-sm text-gray-500">{tours[0]?.city}</p>
          <p className="mt-4">{tours[0]?.content}</p>
          <div className="mt-4">
            <span className="font-semibold">Price: ${tours[0]?.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetailPage;

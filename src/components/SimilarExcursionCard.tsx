// src/components/SimilarExcursionCard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatMediaImage } from '../utils';

interface SimilarExcursionCardProps {
  _id: string;
  title: string;
  duration: string;
  price: number;
  imageUrls: string[];
}

const SimilarExcursionCard: React.FC<SimilarExcursionCardProps> = ({ 
  _id, 
  title, 
  duration, 
  price, 
  imageUrls,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/tours/${_id}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer transition-all duration-200"
    >
      <img 
        className="object-cover w-full rounded-t-lg h-48 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" 
        src={formatMediaImage(imageUrls[0]) || '/default-tour-image.jpg'} 
        alt={title}
      />
      <div className="flex flex-col justify-between p-4 leading-normal w-full">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <div className="flex flex-col space-y-1">
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">{duration}</span>
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">{price}</span>€
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimilarExcursionCard;
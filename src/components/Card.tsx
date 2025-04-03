// src/components/Card.tsx
import React from 'react';
import MainButton from './MainButton';
import { useNavigate } from 'react-router-dom';
import { CardProps } from '../types/tour';

const Card: React.FC<CardProps> = ({ title, city, content, price, imageUrl, _id }) => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(`/tours/${_id}`);
    };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
      <img src={imageUrl} alt={title} className="w-full h-72 object-cover rounded-md" />
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="text-sm text-gray-500">{city}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <div className="mt-4">
        <span className="font-semibold">Price: ${price}</span>
      </div>
      <MainButton title={title} onClick={handleClick} />
    </div>
  );
};

export default Card;

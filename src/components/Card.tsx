// src/components/Card.tsx
import React from 'react';
import MainButton from './MainButton';

interface CardProps {
  title: string;
  city: string;
  content: string;
  price: number;
  imageUrl: string;
  _id: string;
}

const Card: React.FC<CardProps> = ({ title, city, content, price, imageUrl, _id }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="text-sm text-gray-500">{city}</p>
      <p className="mt-2">{content}</p>
      <div className="mt-4">
        <span className="font-semibold">Price: ${price}</span>
      </div>
      <MainButton title={title} />
    </div>
  );
};

export default Card;

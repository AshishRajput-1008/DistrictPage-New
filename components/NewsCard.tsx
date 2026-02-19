import React from 'react';
import Image from 'next/image';

interface NewsCardProps {
  image: string;
  category: string;
  author: string;
  date: string;
  title: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ image, category, author, date, title }) => {
  return (
    <div className="bg-white overflow-hidden cursor-pointer news-card-hover group">
      <div className="relative w-full h-[280px]">
        <Image 
          src={image} 
          alt={title}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="p-4 pt-3">
        <div className="flex gap-2 text-[12px] text-gray-500 mb-2">
          <span className="text-gray-700 font-medium">{category}</span>
          <span>|</span>
          <span>{author}</span>
          <span>|</span>
          <span>{date}</span>
        </div>
        <h2 className="text-[17px] font-medium text-gray-900 leading-[1.5] group-hover:text-blue-600 transition-colors">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default NewsCard;

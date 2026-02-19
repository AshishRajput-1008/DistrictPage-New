import React from 'react';
import NewsCard from './NewsCard';

const NewsGrid = () => {
  const newsData = [
    {
      image: 'https://images.unsplash.com/photo-1554224311-beee1bc96c2d?w=600&h=400&fit=crop',
      category: 'राजनीती',
      author: 'विल्यिदुर मिहाईई',
      date: '7 मई, 2019',
      title: 'चीन के शेयर बाजार में उथल-पुथल के पीछे की राजनीति'
    },
    {
      image: 'https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?w=600&h=400&fit=crop',
      category: 'राजनीती',
      author: 'विल्यिदुर मिहाईई',
      date: '7 मई, 2019',
      title: 'पेरिल्लुवेनिया का बढता राजनीतिक माहौल 2020 के चुनाव के लिए तैयार हो रहा है।'
    },
    {
      image: 'https://images.unsplash.com/photo-1555074834-ed1c9800f87d?w=600&h=400&fit=crop',
      category: 'राजनीती',
      author: 'विल्यिदुर मिहाईई',
      date: '7 मई, 2019',
      title: 'वित्तीय ट्रेडिंग प्लेटफॉर्म चुनने समय किन बातों का ध्यान रखना चाहिए?'
    },
    {
      image: 'https://images.unsplash.com/photo-1614029655965-2464911905a4?w=600&h=400&fit=crop',
      category: 'राजनीती',
      author: 'विल्यिदुर मिहाईई',
      date: '7 मई, 2019',
      title: '2020 के राष्ट्रपति पद के उम्मीदवारों का संक्षिप्त परिचय'
    }
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-5 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {newsData.map((news, index) => (
          <NewsCard key={index} {...news} />
        ))}
      </div>
    </div>
  );
};

export default NewsGrid;

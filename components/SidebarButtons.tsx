'use client';

import React from 'react';

const SidebarButtons = () => {
  const buttons = ['क्रोम', 'होस्टिंग', 'सेवा', 'खरीदना'];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden xl:block">
      {buttons.map((button, index) => (
        <button
          key={index}
          className="bg-white border border-gray-200 px-4 py-3 cursor-pointer text-[13px] font-medium text-gray-800 block transition-all duration-300 hover:bg-gray-900 hover:text-white hover:border-gray-900"
          style={{ 
            marginBottom: index < buttons.length - 1 ? '2px' : '0'
          }}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default SidebarButtons;

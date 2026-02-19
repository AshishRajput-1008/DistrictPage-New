import React from 'react';

const Navigation = () => {
  const navItems = [
    { label: 'समाचार', href: '#', color: 'text-red-600' },
    { label: 'तकनीकी', href: '#', hasDropdown: true },
    { label: 'संस्कृति', href: '#', hasDropdown: true },
    { label: 'मनोरेजन', href: '#', hasDropdown: true },
    { label: 'खेल', href: '#', hasDropdown: true },
    { label: 'यात्रा', href: '#' },
    { label: 'संगीत', href: '#' },
    { label: 'अधिक', href: '#', hasDropdown: true },
  ];

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-[1400px] mx-auto px-5">
        <div className="flex justify-between items-center">
          <ul className="flex">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href} 
                  className={`block px-5 py-4 text-[16px] font-medium transition-colors hover:text-red-600 ${
                    item.color || 'text-gray-700'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <span className="ml-1 text-[10px]">▼</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
          <button className="py-4 px-5 text-gray-600 hover:text-blue-600 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

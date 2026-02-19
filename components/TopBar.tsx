import React from 'react';
import { Facebook, Instagram, Youtube, User } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-black text-white py-2">
      <div className="max-w-[1400px] mx-auto px-5 flex justify-between items-center text-[13px]">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
            <span className="font-rubik">9.7 °C</span>
            <span>जल्दा इउडियाल</span>
          </div>
          <div className="hidden md:block">
            मंगलवार, 6 जनवरी, 2026
          </div>
          {/* <div className="hidden lg:flex gap-5">
            <a href="#" className="hover:text-blue-400 transition-colors">जीवन शैली</a>
            <a href="#" className="hover:text-blue-400 transition-colors">यात्रा</a>
            <a href="#" className="hover:text-blue-400 transition-colors">टीवी</a>
            <a href="#" className="hover:text-blue-400 transition-colors">संगीत</a>
            <a href="#" className="hover:text-blue-400 transition-colors">खेल</a>
            <a href="#" className="hover:text-blue-400 transition-colors">संस्कृति</a>
            <a href="#" className="hover:text-blue-400 transition-colors">खेत</a>
            <a href="#" className="hover:text-blue-400 transition-colors">तकनीकी</a>
          </div> */}
        </div>
        <div className="flex items-center gap-8">
          <div className="flex gap-3 text-lg">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Facebook size={16} strokeWidth={2} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Instagram size={16} strokeWidth={2} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@SadaivSatyaMedia/" className="hover:text-blue-400 transition-colors">
              <Youtube size={16} strokeWidth={2} />
            </a>
          </div>
          <a href="#" className="flex items-center gap-1 hover:text-blue-400 transition-colors">
            <User size={16} strokeWidth={2} /> 
            <span>लॉग इन करें / शामिल हों</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
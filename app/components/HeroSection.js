// app/components/HeroSection.js
'use client'; // 1. Added for interactivity

import Link from 'next/link';
import { useState } from 'react'; // 2. Imported for managing search input
import { useRouter } from 'next/navigation'; // 3. Imported for handling search redirect

// --- Animation Components (Copied from Footer Logic) ---

const imageSources = [
  '/footer1.jpeg', '/footer2.jpeg', '/footer3.jpeg', '/footer4.jpeg',
  '/footer5.jpeg', '/footer6.jpeg', '/footer7.jpeg', '/footer8.jpeg',
];

const ImageColumn = ({ images, animationClass }) => {
  const doubledImages = [...images, ...images];
  return (
    <div className="relative h-full w-1/8 overflow-hidden"> 
      <div className={`flex flex-col gap-2 ${animationClass}`}>
        {doubledImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="" // Alt text is empty as these are decorative
            className="h-28 w-full shrink-0 rounded-lg object-cover shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};

const imagesCol1 = [...imageSources.slice(0), ...imageSources.slice(0, 0)];
const imagesCol2 = [...imageSources.slice(1), ...imageSources.slice(0, 1)];
const imagesCol3 = [...imageSources.slice(2), ...imageSources.slice(0, 2)];
const imagesCol4 = [...imageSources.slice(3), ...imageSources.slice(0, 3)];
const imagesCol5 = [...imageSources.slice(4), ...imageSources.slice(0, 4)];
const imagesCol6 = [...imageSources.slice(5), ...imageSources.slice(0, 5)];
const imagesCol7 = [...imageSources.slice(6), ...imageSources.slice(0, 6)];
const imagesCol8 = [...imageSources.slice(7), ...imageSources.slice(0, 7)];

// --- Main Hero Section Component ---

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  // 4. Algorithm to handle the search submission
  const handleSearch = (e) => {
    e.preventDefault(); // Prevents the page from reloading
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="relative bg-[#1F1F1F] h-[70vh] min-h-[600px] overflow-hidden">
      
      {/* 5. Replaced static image with the animation */}
      <div className="absolute left-1/2 top-1/2 h-[230%] w-[200%] -translate-x-1/2 -translate-y-1/2 opacity-[0.4] pointer-events-none rotate-45 z-0">
        <div className="flex h-full w-full gap-2">
            <ImageColumn images={imagesCol1} animationClass="[animation:scrollDown_40s_linear_infinite]" />
            <ImageColumn images={imagesCol2} animationClass="[animation:scrollUp_40s_linear_infinite]" />
            <ImageColumn images={imagesCol3} animationClass="[animation:scrollDown_40s_linear_infinite]" />
            <ImageColumn images={imagesCol4} animationClass="[animation:scrollUp_40s_linear_infinite]" />
            <ImageColumn images={imagesCol5} animationClass="[animation:scrollDown_40s_linear_infinite]" />
            <ImageColumn images={imagesCol6} animationClass="[animation:scrollUp_40s_linear_infinite]" />
            <ImageColumn images={imagesCol7} animationClass="[animation:scrollDown_40s_linear_infinite]" />
            <ImageColumn images={imagesCol8} animationClass="[animation:scrollUp_40s_linear_infinite]" />
            <ImageColumn images={imagesCol5} animationClass="[animation:scrollDown_40s_linear_infinite]" />
            <ImageColumn images={imagesCol6} animationClass="[animation:scrollUp_40s_linear_infinite]" />
            <ImageColumn images={imagesCol7} animationClass="[animation:scrollDown_40s_linear_infinite]" />
            <ImageColumn images={imagesCol8} animationClass="[animation:scrollUp_40s_linear_infinite]" />
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F] via-[#2c2c2c9b]/70 to-transparent z-10"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-start text-left z-20">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl max-w-2xl">
          Crafting Spaces, <span className="text-[#D2B76B] font-serif">One Tile at a Time</span>
        </h1>
        <p className="mt-6 max-w-xl text-xl text-gray-200">
          Discover a curated collection of the world&apos;s finest tiles, designed to bring your vision of luxury and elegance to life.
        </p>
        
        <form onSubmit={handleSearch} className="mt-10 flex w-full max-w-md rounded-lg shadow-lg">
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="e.g., 'modern kitchen tiles'"
            className="flex-grow bg-gray-200 text-gray-800 placeholder-gray-500 py-3 px-6 rounded-l-lg border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
          />
          <button 
            type="submit"
            className="bg-[#D2B76B] cursor-pointer text-black font-serif font-extrabold py-3 px-8 rounded-r-lg hover:bg-[#d4b45a] transition duration-300 text-lg"
          >
            Search Product
          </button>
        </form>

      </div>
    </div>
  );
}
'use client'
import React from 'react';
import Image from 'next/image'; // Import the Next.js Image component

// To use this component, make sure you have React and Tailwind CSS set up in your project.
// You can export this as the default component for your "About" page route.

// --- Helper Components for a cleaner structure ---

// Icon component for the "Our Philosophy" section
const PhilosophyIcon = ({ icon, title, description }) => (
  <div className="text-center p-4 transition-all duration-300 hover:bg-gray-800/50 rounded-lg">
    <div className="flex items-center justify-center h-16 w-16 mx-auto mb-4 rounded-full bg-transparent border-2 border-stone-600 text-stone-400">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-stone-200 mb-2">{title}</h3>
    <p className="text-stone-400 leading-relaxed text-sm">{description}</p>
  </div>
);

// Section Header component for consistent styling
const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-sm font-bold uppercase tracking-widest text-stone-500 mb-2">{subtitle}</h2>
    <h3 className="text-4xl md:text-5xl font-serif text-stone-200">{title} <span className='text-[#D2B76B]'>Philosophy</span></h3>
  </div>
);


export default function AboutPage() {
  return (
    <div className="text-white font-sans antialiased">
      
      {/* --- Hero Section --- */}
      <div className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 w-full h-full bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/about.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight">
            The Art of <span className='text-[#D2B76B]'>Surface</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-stone-300 max-w-2xl mx-auto">
            Discover the story behind Oval Tile Palace, where every tile is a masterpiece of design and craftsmanship.
          </p>
        </div>
      </div>

      <div className="container bg-[#1F1F1F]">

        {/* --- Our Story Section with Overlapping Layout --- */}
        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <div className="relative w-full h-[50vh] rounded-lg overflow-hidden shadow-2xl">
                {/* FIX 1: Replaced <img> with next/image <Image> component */}
                <Image
                  src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?t=st=1755593075~exp=1755596675~hmac=674f308edd2978cef15a6eddf49d3e53cf4d1146d210b3c0800d69337ecacf85&w=1060"
                  alt="Our Story"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-2 -mt-12 lg:mt-0 lg:-ml-16 z-10">
              <div className="bg-[#121212] p-8 md:p-12 rounded-lg shadow-lg">
                <h2 className="text-sm font-bold uppercase tracking-widest text-stone-500 mb-2">Our Story</h2>
                <h3 className="text-3xl font-serif text-stone-200 mb-4">A <span className='text-[#D2B76B]'>Legacy</span> in Tile</h3>
                <p className="text-stone-400 mb-4 leading-relaxed">
                  {/* FIX 2: Escaped the apostrophe in "world's" */}
                  Founded with a passion for exquisite design, Oval Tile Palace began as a small boutique with a grand vision: to bring the world&apos;s finest tiles to discerning clients. Our journey has been one of exploration and an unwavering commitment to beauty.
                </p>
                <p className="text-stone-400 leading-relaxed">
                  Today, we are a leading name in the industry, known for our curated collections and exceptional service.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Our Philosophy Section --- */}
        <div className="mb-24 bg-[#121212] mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <SectionHeader subtitle="Core Values" title="Our" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <PhilosophyIcon 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m-9 9h18" /></svg>}
              title="Global Curation"
              description="We travel the globe to hand-select materials that tell a unique story of origin and artistry."
            />
            <PhilosophyIcon 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              title="Uncompromising Quality"
              description="Every tile undergoes rigorous quality control, ensuring it meets our exacting standards for durability and perfection."
            />
            <PhilosophyIcon 
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>}
              title="Timeless Design"
              description="Our collection balances cutting-edge styles with timeless classics, ensuring enduring appeal."
            />
          </div>
        </div>

 

      </div>
    </div>
  );
}
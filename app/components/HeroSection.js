import Link from 'next/link';
import Image from 'next/image'; // 1. Import the Image component

export default function HeroSection() {
  return (
    <div className="relative bg-gray-900 h-[70vh] min-h-[600px]">
      <div className="absolute inset-0">
        {/* 2. Replaced <img> with <Image /> for performance */}
        <Image
          src="https://cdn.pixabay.com/photo/2017/03/28/12/10/chairs-2181947_1280.jpg"
          alt="A luxurious modern bathroom with beautiful tiles"
          layout="fill"
          objectFit="cover"
          priority // Helps with loading performance for LCP elements
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-start text-left">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl max-w-2xl">
          Crafting Spaces, <span className="text-amber-400">One Tile at a Time</span>
        </h1>
        <p className="mt-6 max-w-xl text-xl text-gray-200">
          {/* 3. Fixed the apostrophe error */}
          Discover a curated collection of the world&apos;s finest tiles, designed to bring your vision of luxury and elegance to life.
        </p>
        <div className="mt-10">
          <Link href="/products" className="bg-amber-500 text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-amber-400 transition duration-300 text-lg shadow-lg">
            Explore Our Collection
          </Link>
        </div>
      </div>
    </div>
  );
}
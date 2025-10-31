'use client'
import HeroSection from './components/HeroSection';
import ProductCard from './components/ProductCard';
import { products } from './data/products';
import Link from 'next/link';
import Image from 'next/image'; // Import the Next.js Image component
import { SparklesIcon, ChatBubbleLeftRightIcon, Squares2X2Icon } from '@heroicons/react/24/outline';


const TestimonialCard = ({ quote, author, location }) => (
  <div className="bg-[#121212] p-8 rounded-lg shadow-lg relative h-full flex flex-col">
    <svg className="absolute top-4 left-4 w-10 h-10 text-gray-700" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M9.333 22.583c0 2.25-1.042 3.375-3.125 3.375-2.083 0-3.125-1.125-3.125-3.375 0-2.167 1.042-3.25 3.125-3.25 2.083 0 3.125 1.083 3.125 3.25zM25.333 22.583c0 2.25-1.042 3.375-3.125 3.375-2.083 0-3.125-1.125-3.125-3.375 0-2.167 1.042-3.25 3.125-3.25 2.083 0 3.125 1.083 3.125 3.25zM12.5 6.25h-10v10h10v-10zM28.5 6.25h-10v10h10v-10z"></path>
    </svg>
    <blockquote className="text-gray-300 italic z-10 relative flex-grow">&ldquo;{quote}&rdquo;</blockquote>
    <div className="mt-4 text-right">
      <p className="font-semibold text-[#D2B76B]">- {author}</p>
      <p className="text-sm text-gray-400">{location}</p>
    </div>
  </div>
);

export default function HomePage() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className='font-serif'>
      <HeroSection />

      {/* Featured Products Section */}
      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-2">Featured Products</h2>
          <p className="text-center text-[#D2B76B] mb-12">Handpicked selections for the modern home.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products" className="bg-[#D2B76B] text-black font-bold py-3 px-8 rounded-lg hover:bg-[#d4b45a] transition duration-300">
              View All Products
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#1F1F1F]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
              The TileVana Difference
            </h2>
            <p className="mt-4 text-lg text-[#D2B76B] max-w-3xl mx-auto">
              We are more than just a tile store. We are partners in crafting beautiful, enduring spaces.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1: Unmatched Quality */}
            <div className="bg-[#121212] p-8 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-amber-500/10 transition-all duration-300 text-center">
              <div className="mb-5 inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#D2B76B]/10">
                <SparklesIcon className="h-8 w-8 text-[#D2B76B]" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Unmatched Quality</h3>
              <p className="text-gray-400">
                We source only the finest materials from around the world to ensure durability and timeless beauty.
              </p>
            </div>

            {/* Card 2: Expert Guidance */}
            <div className="bg-[#121212] p-8 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-amber-500/10 transition-all duration-300 text-center">
              <div className="mb-5 inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#D2B76B]/10">
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-[#D2B76B]" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Expert Guidance</h3>
              <p className="text-gray-400">
                Our experienced team is here to help you choose the perfect tiles for your project, big or small.
              </p>
            </div>

            {/* Card 3: Vast Selection */}
            <div className="bg-[#121212] p-8 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-amber-500/10 transition-all duration-300 text-center">
              <div className="mb-5 inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#D2B76B]/10">
                <Squares2X2Icon className="h-8 w-8 text-[#D2B76B]" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Vast Selection</h3>
              <p className="text-gray-400">
                From classic ceramic to luxurious marble, find the style that perfectly fits your vision and budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration Gallery Section */}
      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Inspiration Gallery</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="grid gap-4">
                <Image width={500} height={700} className="h-auto w-full rounded-lg shadow-lg" src="https://images.pexels.com/photos/3741317/pexels-photo-3741317.jpeg" alt="Modern bathroom with elegant tilework"/>
                <Image width={500} height={300} className="h-auto w-full rounded-lg shadow-lg" src="https://img.freepik.com/free-photo/3d-rendering-modern-luxury-hotel-office-reception-meeting-lounge_105762-2015.jpg?t=st=1755545882~exp=1755549482~hmac=947a727d891d945bdb719a68feb23600a94aae15d34a75b8d0e22f4b951bfd34&w=1060" alt="Luxury hotel reception with marble tile floor"/>
            </div>
            <div className="grid gap-4">
                <Image width={500} height={350} className="h-auto w-full rounded-lg shadow-lg" src="https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-2234.jpg" alt="Spacious living room with glossy floor tiles"/>
                <Image width={500} height={700} className="h-auto w-full rounded-lg shadow-lg" src="https://plus.unsplash.com/premium_photo-1674773521430-67912c885d46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2ljaGVuJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D" alt="Sleek kitchen interior with modern backsplash tiles"/>
            </div>
             <div className="grid gap-4">
                <Image width={500} height={700} className="h-auto w-full rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1671663606281-44682198255a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFjY2VudCUyMGludGVyaW9yJTIwZGVzaWduJTIwd2l0aCUyMHRpbHN8ZW58MHx8MHx8fDA%3D" alt="Accent interior design featuring decorative tiles"/>
                <Image width={500} height={350} className="h-auto w-full rounded-lg shadow-lg" src="https://img.freepik.com/free-photo/modern-beadroom-hotel_1150-17926.jpg?t=st=1755546160~exp=1755549760~hmac=d5eb67231326d63172ea09845d69a00f4156082e176f42fa25d42c9c56bea3a8&w=1060" alt="Modern hotel bedroom with stylish floor tiles"/>
            </div>
             <div className="grid gap-4">
                <Image width={500} height={350} className="h-auto w-full rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1723468353909-cfac1564d0e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGtpdGNoZW4lMjBpbnRlcmlvciUyMGRlc2lnbiUyMHdpdGglMjB0aWxzfGVufDB8fDB8fHww" alt="Kitchen design with patterned wall tiles"/>
                <Image width={500} height={500} className="h-auto w-full rounded-lg shadow-lg" src="https://img.freepik.com/premium-photo/bedroom-interior-3d-rendering-photo_580184-16.jpg?ga=GA1.1.541790130.1754208209&semt=ais_hybrid&w=740&q=80" alt="3D rendering of a bedroom interior with tiled accents"/>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#1F1F1F]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="The quality of the tiles is outstanding, and the customer service was top-notch. Our new kitchen floor looks amazing!"
              author="Aisha Khan"
              location="Lahore"
            />
            <TestimonialCard 
              quote="TileVana has an incredible selection. We found the perfect mosaic tiles for our bathroom, and they completely transformed the space."
              author="Amjad"
              location="Karachi"
            />
            <TestimonialCard 
              quote="Professional, helpful, and high-quality products. I highly recommend them to anyone looking for premium tiles."
              author="Mubasir"
              location="DHA, Lahore"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Ready to Start Your Project?</h2>
          <p className="mt-4 max-w-2xl mx-auto">Let our experts help you find the perfect tiles to bring your vision to life. Get in touch for a free consultation.</p>
          <div className="mt-8">
            <Link href="/contact" className="bg-[#D2B76B] text-black hover:bg-[#d4b45a] transition duration-300 font-bold py-3 px-8 rounded-lg ">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
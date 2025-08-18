'use client'
import HeroSection from './components/HeroSection';
import ProductCard from './components/ProductCard';
import { products } from './data/products';
import Link from 'next/link';

const CategoryCard = ({ name, image }) => (
  <div className="relative rounded-lg overflow-hidden group shadow-lg">
    <img src={image} alt={name} className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500" />
    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-end p-6">
      <h3 className="text-2xl font-bold text-white">{name}</h3>
    </div>
    <Link href="/products" className="absolute inset-0" aria-label={`View ${name} tiles`}></Link>
  </div>
);

const TestimonialCard = ({ quote, author, location }) => (
  <div className="bg-gray-800 p-8 rounded-lg shadow-lg relative">
     <svg className="absolute top-4 left-4 w-10 h-10 text-gray-700" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M9.333 22.583c0 2.25-1.042 3.375-3.125 3.375-2.083 0-3.125-1.125-3.125-3.375 0-2.167 1.042-3.25 3.125-3.25 2.083 0 3.125 1.083 3.125 3.25zM25.333 22.583c0 2.25-1.042 3.375-3.125 3.375-2.083 0-3.125-1.125-3.125-3.375 0-2.167 1.042-3.25 3.125-3.25 2.083 0 3.125 1.083 3.125 3.25zM12.5 6.25h-10v10h10v-10zM28.5 6.25h-10v10h10v-10z"></path>
    </svg>
    <p className="text-gray-300 italic z-10 relative">"{quote}"</p>
    <div className="mt-4 text-right">
      <p className="font-semibold text-amber-400">- {author}</p>
      <p className="text-sm text-gray-400">{location}</p>
    </div>
  </div>
);

export default function HomePage() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      <HeroSection />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">The TileVana Difference</h2>
            <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">We are more than just a tile store. We are partners in crafting beautiful, enduring spaces.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-amber-400 mb-2">Unmatched Quality</h3>
              <p className="text-gray-400">We source only the finest materials from around the world to ensure durability and timeless beauty.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-amber-400 mb-2">Expert Guidance</h3>
              <p className="text-gray-400">Our experienced team is here to help you choose the perfect tiles for your project, big or small.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-amber-400 mb-2">Vast Selection</h3>
              <p className="text-gray-400">From classic ceramic to luxurious marble, find the style that perfectly fits your vision and budget.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-2">Featured Products</h2>
          <p className="text-center text-gray-400 mb-12">Handpicked selections for the modern home.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products" className="bg-amber-500 text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-amber-400 transition duration-300">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Inspiration Gallery Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Inspiration Gallery</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="grid gap-4">
                <img className="h-auto max-w-full rounded-lg shadow-lg" src="https://placehold.co/500x700/8b5e34/ffffff?text=Kitchen" alt=""/>
                <img className="h-auto max-w-full rounded-lg shadow-lg" src="https://placehold.co/500x400/a9a9a9/fff?text=Living+Room" alt=""/>
            </div>
            <div className="grid gap-4">
                <img className="h-auto max-w-full rounded-lg shadow-lg" src="https://placehold.co/500x400/f0f0f0/333?text=Bathroom" alt=""/>
                <img className="h-auto max-w-full rounded-lg shadow-lg" src="https://placehold.co/500x700/36454F/ffffff?text=Outdoor" alt=""/>
            </div>
             <div className="grid gap-4">
                <img className="h-auto max-w-full rounded-lg shadow-lg" src="https://placehold.co/500x700/006a4e/ffffff?text=Accent+Wall" alt=""/>
                <img className="h-auto max-w-full rounded-lg shadow-lg" src="https://placehold.co/500x400/fdfbf5/a69a81?text=Entryway" alt=""/>
            </div>
             <div className="grid gap-4">
                <img className="h-auto max-w-full rounded-lg shadow-lg" src="https://placehold.co/500x400/e8e4e1/3b3b3b?text=Commercial" alt=""/>
                <img className="h-auto max-w-full rounded-lg shadow-lg" src="https://placehold.co/500x700/f5f5f5/333?text=Bedroom" alt=""/>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="The quality of the tiles is outstanding, and the customer service was top-notch. Our new kitchen floor looks amazing!"
              author="Aisha Khan"
              location="Mumbai"
            />
            <TestimonialCard 
              quote="TileVana has an incredible selection. We found the perfect mosaic tiles for our bathroom, and they completely transformed the space."
              author="Rohan Mehta"
              location="Delhi"
            />
            <TestimonialCard 
              quote="Professional, helpful, and high-quality products. I highly recommend them to anyone looking for premium tiles."
              author="Priya Sharma"
              location="Bangalore"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-500 text-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Ready to Start Your Project?</h2>
          <p className="mt-4 max-w-2xl mx-auto">Let our experts help you find the perfect tiles to bring your vision to life. Get in touch for a free consultation.</p>
          <div className="mt-8">
            <Link href="/contact" className="bg-gray-900 text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-800 transition duration-300">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
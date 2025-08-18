'use client'
import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="group border border-gray-700 rounded-lg overflow-hidden bg-gray-800 hover:shadow-2xl hover:shadow-amber-500/10 transition-shadow duration-300">
      <Link href={`/products/${product.id}`}>
        <div className="relative w-full h-64 bg-gray-700">
           <img
            src={product.image}
            alt={product.name}
            className="absolute w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/eee/ccc?text=Image+Not+Found`; }}
           />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white truncate">{product.name}</h3>
          <p className="text-gray-400 mt-1">{product.category}</p>
          <div className="mt-4 flex justify-between items-center">
            <p className="text-xl font-bold text-white">${product.price}</p>
            <span className="text-amber-500 font-semibold">View Details &rarr;</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
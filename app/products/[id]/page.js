'use client';
import { products } from '../../data/products';
// import Image from 'next/image';
import { useState } from 'react';

export default function ProductDetailPage({ params }) {
  const product = products.find(p => p.id === params.id);
  const [mainImage, setMainImage] = useState(product?.gallery[0] || product?.image);

  if (!product) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Image Gallery */}
          <div>
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg mb-4 bg-gray-800">
               <img
                src={mainImage}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/800x600/eee/ccc?text=Image+Not+Found`; }}
               />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.gallery.map((img, index) => (
                <div key={index} className={`relative h-24 w-full rounded-md overflow-hidden cursor-pointer border-2 hover:border-blue-500 transition-all ${mainImage === img ? 'border-blue-500' : 'border-transparent'}`} onClick={() => setMainImage(img)}>
                  <img
                    src={img}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">{product.name}</h1>
            <p className="text-2xl font-semibold text-blue-500 mt-4">${product.price}</p>
            <p className="text-gray-300 mt-6 leading-relaxed">{product.description}</p>
            
            <div className="mt-8 border-t border-gray-700 pt-6">
              <h3 className="text-lg font-semibold text-white mb-4">Specifications</h3>
              <div className="grid grid-cols-2 gap-4 text-gray-300">
                <div><strong>Category:</strong> {product.category}</div>
                <div><strong>Finish:</strong> {product.finish}</div>
                <div><strong>Size:</strong> {product.size}</div>
              </div>
            </div>

            <div className="mt-8">
                <button className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                    Request a Quote
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
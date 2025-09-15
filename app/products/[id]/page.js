// app/products/[id]/page.js

'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { products } from '../../data/products';

export default function ProductDetailPage() {
  const params = useParams();
  const product = products.find(p => p.id === params.id);

  // This state holds the URL of the image to be shown in the large display area.
  const [mainImage, setMainImage] = useState(null);

  // This effect sets the initial image when the page loads.
  useEffect(() => {
    if (product) {
      setMainImage(product.gallery[0] || product.image);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl mt-2">Loading Product...</h1>
        </div>
      </div>
    );
  }

  const galleryImages = product.gallery || [];

  return (
    <div className="bg-gray-900 py-12 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* --- IMAGE GALLERY --- */}
          <div>
            {/* Main Image Display */}
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg mb-4 bg-gray-800">
              
              {/* ✅✅✅ THIS IS THE MOST IMPORTANT PART ✅✅✅ */}
              {/* The 'src' must come from the 'mainImage' state variable. */}
              {mainImage && (
                <img
                  src={mainImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/800x600/333/ccc?text=Image+Not+Found`; }}
                />
              )}
            </div>
            
            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 gap-2">
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  className={`relative h-24 w-full rounded-md overflow-hidden cursor-pointer border-2 hover:border-blue-500 transition-all ${mainImage === img ? 'border-blue-500' : 'border-transparent'}`}
                  
                  // ✅ When you click this div, it updates the 'mainImage' state with the new image URL ('img').
                  onClick={() => setMainImage(img)}
                >
                  <img
                    src={img}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* --- PRODUCT INFO --- */}
          <div className="text-white">
            <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
            <p className="text-2xl font-semibold text-blue-500 mt-4">{product.price}</p>
            <p className="text-gray-300 mt-6 leading-relaxed">{product.description}</p>
            
            <div className="mt-8 border-t border-gray-700 pt-6">
              <h3 className="text-lg font-semibold mb-4">Specifications</h3>
              <div className="grid grid-cols-2 gap-4 text-gray-300">
                <div><strong>Category:</strong> {product.mainCategory}</div>
                <div><strong>Type:</strong> {product.subCategory}</div>
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
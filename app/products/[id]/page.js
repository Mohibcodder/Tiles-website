// app/products/[id]/page.js

'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { products } from '../../data/products';

export default function ProductDetailPage() {
  const params = useParams();
  const product = products.find(p => p.id === params.id);

  const [mainImage, setMainImage] = useState(null);

  // --- NEW STATE FOR LIGHTBOX ---
  // To track if the lightbox is open
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  // To track the index of the image shown in the lightbox
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const galleryImages = product ? product.gallery || [] : [];

  useEffect(() => {
    if (product) {
      setMainImage(product.gallery[0] || product.image);
    }
  }, [product]);

  // --- NEW LIGHTBOX HANDLER FUNCTIONS ---
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
  };
  
  // --- NEW WHATSAPP HANDLER FUNCTION ---
  const handleRequestQuote = () => {
    if (!product) return;
    const phoneNumber = '923214190776';
    const productUrl = window.location.href; 
    const message = `give more info ${productUrl}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };


  if (!product) {
    return (
      <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl mt-2">Loading Product...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#1F1F1F] py-12 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          <div>
            <div 
              className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg mb-4 bg-[#121212] cursor-pointer"
              onClick={() => openLightbox(galleryImages.indexOf(mainImage))}
            >
              {mainImage && (
                <img
                  src={mainImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/800x600/333/ccc?text=Image+Not+Found`; }}
                />
              )}
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  className={`relative h-24 w-full rounded-md overflow-hidden cursor-pointer border-2 hover:border-[#D2B76B] transition-all ${mainImage === img ? 'border-[#D2B76B]' : 'border-transparent'}`}
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
            <p className="text-2xl font-semibold text-[#D2B76B] mt-4">{product.price}</p>
            <p className="text-gray-300 mt-6 leading-relaxed">{product.description}</p>
            
            <div className="mt-8 border-t border-[#D2B76B] pt-6">
              <h3 className="text-xl font-semibold text-[#D2B76B] mb-4">Specifications</h3>
              <div className="grid grid-cols-2 gap-4 text-gray-300">
                <div><strong>Category:</strong> {product.mainCategory}</div>
                <div><strong>Type:</strong> {product.subCategory}</div>
                <div><strong>Size:</strong> {product.size}</div>
              </div>
            </div>

            <div className="mt-8">
              {/* ✅ UPDATED: Replaced button with a new one that calls the WhatsApp handler */}
              <button 
                onClick={handleRequestQuote}
                className="w-full bg-[#D2B76B] cursor-pointer text-black font-bold py-3 px-6 rounded-lg hover:bg-[#d1b15b] transition duration-300"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- ✅ NEW: LIGHTBOX MODAL --- */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-4 cursor-pointer right-6 text-white text-4xl font-bold hover:text-gray-300 transition-colors"
          >
            &times;
          </button>

          {/* Previous Button */}
          <button 
            onClick={showPrevImage}
            className="absolute cursor-pointer left-4 md:left-10 text-white text-3xl p-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75"
          >
            &#10094;
          </button>
          
          {/* Image Container */}
          <div className="relative w-11/12 h-5/6 md:w-3/4 md:h-5/6">
            <img 
              src={galleryImages[currentImageIndex]} 
              alt="Product View"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Next Button */}
          <button 
            onClick={showNextImage}
            className="absolute cursor-pointer right-4 md:right-10 text-white text-3xl p-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75"
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
}
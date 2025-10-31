'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

// Component ka naam file ke naam se match karein
export default function ProductsClientLogic() {
  // --- STATE MANAGEMENT ---
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState('');
  const [activeSubFilter, setActiveSubFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // --- DYNAMIC FILTER OPTIONS ---
  const mainCategories = [...new Set(products.map(p => p.mainCategory))];

  let subFilterOptions = [];
  if (activeCategory) {
    const allSubCategories = products
      .filter(p => p.mainCategory === activeCategory)
      .flatMap(p => Array.isArray(p.subCategory) ? p.subCategory : [p.subCategory]); // ✅ support array
    subFilterOptions = [...new Set(allSubCategories)];
  }

  // --- HOOKS ---
  const searchParams = useSearchParams();

  useEffect(() => {
    const initialSearch = searchParams.get('search');
    if (initialSearch) {
      setSearchTerm(initialSearch);
    }
  }, [searchParams]);

  useEffect(() => {
    let tempProducts = products;

    if (activeCategory) {
      tempProducts = tempProducts.filter(p => p.mainCategory === activeCategory);
    }

    if (activeSubFilter) {
      tempProducts = tempProducts.filter(p =>
        Array.isArray(p.subCategory)
          ? p.subCategory.includes(activeSubFilter)  // ✅ agar array hai
          : p.subCategory === activeSubFilter       // ✅ agar string hai
      );
    }

    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      tempProducts = tempProducts.filter(product => {
        const subCats = Array.isArray(product.subCategory) ? product.subCategory : [product.subCategory];
        return (
          product.name.toLowerCase().includes(lowercasedTerm) ||
          product.mainCategory.toLowerCase().includes(lowercasedTerm) ||
          subCats.some(sub => sub.toLowerCase().includes(lowercasedTerm)) // ✅ array ke liye
        );
      });
    }


    setFilteredProducts(tempProducts);

  }, [activeCategory, activeSubFilter, searchTerm]);

  // --- HANDLER FUNCTIONS ---
  const handleCategoryClick = (category) => {
    setActiveCategory(prev => prev === category ? '' : category);
    setActiveSubFilter('');
  };

  const handleSubFilterClick = (filter) => {
    setActiveSubFilter(prev => prev === filter ? '' : filter);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="bg-[#121212] min-h-screen text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Our <span className='text-[#D2B76B]'>Collection</span></h1>
          <p className="mt-4 text-lg text-gray-400">Discover our curated selection of premium surfaces.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-1/4 xl:w-1/5">
            <div className="sticky top-24 bg-[#1F1F1F] p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold mb-4 border-b border-[#D2B76B] pb-3">Categories</h2>
              <ul className="space-y-2">
                {mainCategories.map(category => (
                  <li key={category}>
                    <button
                      onClick={() => handleCategoryClick(category)}
                      className={`cursor-pointer w-full text-left px-4 py-3 rounded-lg transition-all duration-300 text-base font-medium ${activeCategory === category ? 'bg-[#D2B76B] shadow-[#D2B76B]/30 shadow-lg text-black' : 'hover:bg-[#ead7a48a]'}`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <main className="w-full lg:w-3/4 xl:w-4/5">
            <div className="mb-8">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search by name, category, or type..."
                className="w-full px-4 py-3 bg-[#1F1F1F] text-white border-2 border-[#e8d29795] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D2B76B] focus:border-[#D2B76B] transition-all"
              />
            </div>

            {activeCategory && subFilterOptions.length > 0 && (
              <div className="bg-[#1F1F1F] p-4 rounded-xl mb-8 shadow-lg">
                <h3 className="text-lg font-semibold mb-3 text-gray-300">Refine Your Search</h3>
                <div className="flex flex-wrap items-center gap-3">
                  {subFilterOptions.map(option => (
                    <button
                      key={option}
                      onClick={() => handleSubFilterClick(option)}
                      className={`cursor-pointer px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeSubFilter === option ? 'bg-[#D2B76B] shadow-[#D2B76B]/30 shadow-lg text-black' : 'bg-[#ead7a48a] hover:bg-[#e3c4708a] text-gray-200'}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-gray-800 rounded-xl">
                <p className="text-2xl text-gray-400">No Products Found</p>
                <p className="text-gray-500 mt-2">Please adjust your filters or try a different search term.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
import { Suspense } from 'react';
import ProductGridAndFilters from '../components/ProductGridAndFilters';

// Ek simple loading component fallback ke liye
const Loading = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center">
      <p className="text-white text-xl">Loading Products...</p>
    </div>
  );
};

export default function ProductsPage() {
  return (
    <Suspense fallback={<Loading />}>
      <ProductGridAndFilters />
    </Suspense>
  );
}
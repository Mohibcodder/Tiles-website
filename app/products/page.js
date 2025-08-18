  import ProductCard from '../components/ProductCard';
  import { products } from '../data/products';

  export default function ProductsPage() {
    return (
      <div className="bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white">Our Collection</h1>
            <p className="mt-2 text-lg text-gray-400">Browse our extensive range of high-quality tiles.</p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    );
  }


export default function AboutPage() {
  return (
    <div className="bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">About TileVana</h1>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Founded on the principles of quality, integrity, and design, TileVana has been a leading provider of premium tiles for over two decades.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-96 rounded-lg overflow-hidden">
            <img
              src="https://placehold.co/800x600/2d3748/4a5568?text=Our+Showroom"
              alt="TileVana Showroom"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
            <p className="text-gray-400 mb-4">
              Our mission is to empower homeowners, designers, and builders to create beautiful, lasting spaces. We believe that the right tile can transform a house into a home, and we are dedicated to providing an unparalleled selection of high-quality products to bring your vision to life.
            </p>
            <p className="text-gray-400">
              We travel the world to source the finest ceramic, porcelain, and natural stone tiles, ensuring that every product in our collection meets our rigorous standards for durability and aesthetic appeal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
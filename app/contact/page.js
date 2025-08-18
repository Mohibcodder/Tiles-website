import Image from 'next/image'; // 1. Import the Image component

export default function ContactPage() {
  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
          {/* 2. Fixed the apostrophe error */}
          <p className="mt-4 text-lg text-gray-400">We&apos;d love to hear from you. Reach out with any questions or to start your project.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-6">Send a Message</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" required />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Message</label>
                <textarea id="message" name="message" rows="5" className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" required></textarea>
              </div>
              <button type="submit" className="w-full bg-amber-600 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-amber-700 transition duration-300">
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white">Visit Our Showroom</h3>
              <p className="text-gray-400 mt-2">123 Tile Street, Cityville, 12345</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Email Us</h3>
              <p className="text-gray-400 mt-2">info@tilevana.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Call Us</h3>
              <p className="text-gray-400 mt-2">(123) 456-7890</p>
            </div>
            <div>
              <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden relative">
                {/* 3. Replaced <img> with <Image /> */}
                <Image src="https://placehold.co/800x400/2d3748/4a5568?text=Map+Placeholder" alt="Map to showroom" layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
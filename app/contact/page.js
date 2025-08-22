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
              <p className="text-gray-400 mt-2">Ferozpur Road, Lahore</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Email Us</h3>
              <p className="text-gray-400 mt-2">ovaltiles@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Call Us</h3>
              <p className="text-gray-400 mt-2">+92 321 4190776</p>
            </div>
            <div>
              <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27218.6819020243!2d74.2933416!3d31.4826352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904d6f2b72e73%3A0xeca0f3a2e9477b9!2sFerozepur%20Rd%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1693412312345"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
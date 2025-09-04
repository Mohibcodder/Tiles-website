'use client'
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
              <Link href="/" className=" font-bold text-white" onClick={() => setIsOpen(false)}>
              <img
                width="200px"
                height="200px"
                src="/logo-bg.png"
                alt="Logo"
                className=""
              />

            </Link>
            <p className="mt-2 text-gray-400">Your source for premium quality tiles for every space.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-200">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/products" className="text-gray-400 hover:text-white">Products</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-200">Contact Us</h4>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>Ferozpur Road, Lahore</li>
              <li>Email: ovaltiles@gmail.com</li>
              <li>Phone: +92 321 4190776</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-200">Follow Us</h4>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white">Pinterest</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Oval Tiles. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
// app/components/Footer.js
'use client'
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import ImageColumn from './ImageColumn';

// Main image array
const imageSources = [
  '/footer1.jpeg', '/footer2.jpeg', '/footer3.jpeg', '/footer4.jpeg',
  '/footer5.jpeg', '/footer6.jpeg', '/footer7.jpeg', '/footer8.jpeg',
];

// 8 unique columns ke liye 8 shuffled image arrays
const imagesCol1 = [...imageSources.slice(0), ...imageSources.slice(0, 0)];
const imagesCol2 = [...imageSources.slice(1), ...imageSources.slice(0, 1)];
const imagesCol3 = [...imageSources.slice(2), ...imageSources.slice(0, 2)];
const imagesCol4 = [...imageSources.slice(3), ...imageSources.slice(0, 3)];
const imagesCol5 = [...imageSources.slice(4), ...imageSources.slice(0, 4)];
const imagesCol6 = [...imageSources.slice(5), ...imageSources.slice(0, 5)];
const imagesCol7 = [...imageSources.slice(6), ...imageSources.slice(0, 6)];
const imagesCol8 = [...imageSources.slice(7), ...imageSources.slice(0, 7)];


export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#1F1F1F] text-white border-t border-[#3e3e3e]">
      
      {/* --- FINAL CHANGE --- */}
      {/* Container size ko 400% tak barha diya hai takay har haal mein corners cover hon */}
      <div className="absolute left-1/2 top-1/2 h-[340%] w-[200%] -translate-x-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none rotate-45">
        <div className="flex h-full w-full gap-2">
            <ImageColumn images={imagesCol1} animationClass="[animation:scrollDown_40s_linear_infinite]" />
            <ImageColumn images={imagesCol2} animationClass="[animation:scrollUp_40s_linear_infinite]" />
            <ImageColumn images={imagesCol3} animationClass="[animation:scrollDown_40s_linear_infinite]" />
            <ImageColumn images={imagesCol4} animationClass="[animation:scrollUp_40s_linear_infinite]" />
            <ImageColumn images={imagesCol5} animationClass="[animation:scrollDown_40s_linear_infinite]" />
            <ImageColumn images={imagesCol6} animationClass="[animation:scrollUp_40s_linear_infinite]" />
            <ImageColumn images={imagesCol7} animationClass="[animation:scrollDown_40s_linear_infinite]" />
            <ImageColumn images={imagesCol8} animationClass="[animation:scrollUp_40s_linear_infinite]" />
            <ImageColumn images={imagesCol5} animationClass="[animation:scrollDown_40s_linear_infinite]" />
            <ImageColumn images={imagesCol6} animationClass="[animation:scrollUp_40s_linear_infinite]" />
            <ImageColumn images={imagesCol7} animationClass="[animation:scrollDown_40s_linear_infinite]" />
            <ImageColumn images={imagesCol8} animationClass="[animation:scrollUp_40s_linear_infinite]" />
            <ImageColumn images={imagesCol5} animationClass="[animation:scrollDown_40s_linear_infinite]" />
            <ImageColumn images={imagesCol6} animationClass="[animation:scrollUp_40s_linear_infinite]" />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F] via-[#2c2c2c9b]/70 to-transparent z-10"></div>
      <div className="relative z-10 container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="font-bold text-white">
              <img
                width="120px"
                height="120px"
                src="/logo-bg.png"
                alt="Logo"
              />
            </Link>
            <p className="mt-2 text-gray-300">Your source for premium quality tiles for every space.</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-200">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/products" className="text-gray-300 hover:text-[#D2B76B]">Products</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-[#D2B76B]">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-[#D2B76B]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-200">Contact Us</h4>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-300 hover:text-[#D2B76B]">Ferozpur Road, Lahore</li>
              <li className="text-gray-300 group">
                Email :
                <a href="mailto:ovaltiles@gmail.com" className="hover:text-[#D2B76B] group-hover:underline ml-1">
                  ovaltiles@gmail.com
                </a>
              </li>
              <li className="text-gray-300 group">
                Phone :
                <a href="tel:+923214190776" className="hover:text-[#D2B76B] group-hover:underline ml-1">
                  +92 321 4190776
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-200">Follow Us</h4>
            <div className="flex mt-4 space-x-4 text-xl">
              <a href="https://www.facebook.com/profile.php?id=61579746032696" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#D2B76B]">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/ovaltiles/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#D2B76B]">
                <FaInstagram />
              </a>
              <a href="https://www.tiktok.com/@ovaltiles" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#D2B76B]">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[#3e3e3e] pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} <span className='text-[#D2B76B]'>Oval Tiles</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
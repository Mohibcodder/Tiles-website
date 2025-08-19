'use client';
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 flex items-center gap-2 z-50">
      {/* Text Badge */}
      <span className="bg-white text-green-600 font-semibold px-3 py-1 rounded-full shadow-md animate-bounce hidden sm:block">
        Let’s Talk
      </span>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/923214190776" 
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition duration-300"
      >
        {/* Pulse Effect */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
        
        <FaWhatsapp size={28} className="relative z-10" />
      </a>
    </div>
  );
}

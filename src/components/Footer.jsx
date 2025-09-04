import React from 'react';
import "../../style/Footer.css";
const Footer = () => {
  return (
    <footer className="bg-[#b28682] text-[#F1DDDB] py-4 relative flex overflow-hidden">
      <img src="/ad.png" alt="ali-daanish" className='w-26 h-fit flex mx-auto' />
      <div className="container mx-auto text-center space-y-2 my-auto w-fit">
        <p className="text-lg">&copy; 2025 . All rights reserved.</p>
        <p className="text-sm">Designed with love by Ali Daanish</p>
      </div>
      
      {/* Dekorasi Bunga di Footer */}
      <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-[url('/path/to/flower.png')] bg-no-repeat bg-contain opacity-20"></div>
      
      {/* Animasi Love */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className="absolute text-pink-300 text-3xl animate-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${(Math.random() * 3) + 2}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
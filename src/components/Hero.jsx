'use client';
import { useState } from 'react';
import { Menu, X, Share2 } from 'lucide-react';

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-[https://i.ibb.co.com/6RXDLhfy/image-6344322.png] bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://i.ibb.co.com/6RXDLhfy/image-6344322.png)',
        //   backgroundSize: 'cover',
        //   backgroundPosition: 'center',
        }}
      />

      {/* Navbar */}
     

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          {/* Main Heading */}
          <div className="space-y-6 mb-12">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block">CREATIVE</span>
              <span className="block">DEVELOPER</span>
              <span className="block text-orange-500">SINCE 2020</span>
            </h1>
          </div>

          {/* Subheading */}
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-lg text-slate-300">
              Over the last 5y, I've empowered +9 companies
            </p>
            <p className="text-base text-slate-400 leading-relaxed">
              Developing user-centric interfaces that captivate and engage audiences and make a real impact.
            </p>
          </div>

        </div>
      </div>

     
    </div>
  );
}
{/* <a href="https://ibb.co.com/zh6PDc0m"><img src="" alt="image-6344322" border="0" /></a> */}
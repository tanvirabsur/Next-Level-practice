import Image from 'next/image';
import React from 'react';

/**
 * @file AchievementsSection.jsx
 * @description Tailwind CSS দিয়ে তৈরি অ্যাওয়ার্ডস এবং রেকগনিশন সেকশন, যা ইউজার কর্তৃক প্রদত্ত ছবির লেআউট অনুকরণ করে।
 * এটি ডার্ক থিম এবং সম্পূর্ণ রেসপনসিভ।
 */

// Data for the achievements
const achievementsData = [
  {
    title: 'Hackaton',
    subtitle: '1er Lugar AI Challenge',
    type: 'nacional',
  },
  {
    title: 'Code Challenge',
    subtitle: '1ro Lugar 2023',
    type: 'Regional',
  },
  {
    title: 'UISEK Hackaton',
    subtitle: 'Finalistas 2022',
    type: 'Nacional',
  },
];

// Laurel Leaf SVG Component (Customized to match the image's aesthetic)


const AchievementItem = ({ title, subtitle, type }) => (
  <div className="flex items-center justify-center w-full max-w-sm">
    {/* Left Laurel */}
    <div className="hidden sm:block">
        <Image height={50} width={50} alt='pamiro' src={'/Premio.png'}></Image>
    </div>

    {/* Text Content - Center Aligned */}
    <div className="flex flex-col items-center text-center mx-4">
      {/* Title (e.g., Hackaton) */}
      <p className="text-xl font-semibold text-white tracking-wider whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </p>
      
      {/* Subtitle (e.g., 1er Lugar AI Challenge) - Made with a gradient for a premium look */}
      <h4 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300 my-1">
        {subtitle}
      </h4>
      
      {/* Type Tag (e.g., nacional) */}
      <span className="inline-block text-xs uppercase tracking-widest px-2 py-0.5 mt-1 rounded-sm bg-gray-800 text-gray-400">
        {type}
      </span>
    </div>

    {/* Right Laurel */}
    <div className="hidden sm:block">
        <Image height={50} width={50} alt='pamiro' src={'/Premio (1).png'}></Image>
    </div>
  </div>
);

export default function AchievementsSection() {
  return (
    // Section Container (using a slightly darker background for separation)
    <section className="bg-gray-900 border-t border-gray-800 py-10 md:py-16 font-inter">
      
      <div className="container mx-auto max-w-7xl px-4">
        
        {/* The main row of achievements */}
        {/* On mobile, it will be stacked (col-1), on desktop it will show 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
          {achievementsData.map((achievement, index) => (
            <AchievementItem key={index} {...achievement} />
          ))}
        </div>
      </div>
      
    </section>
  );
}

import React from 'react';
import { Linkedin, Github, Twitter, Figma, Link, ArrowRight } from 'lucide-react';

/**
 * @file SocialMediaLinks.jsx
 * @description Tailwind CSS দিয়ে তৈরি একটি সম্পূর্ণ ডার্ক-থিমড ড্যাশবোর্ড-স্টাইলের সেকশন।
 * এটি Next.js ল্যান্ডিং পেজের জন্য উপযুক্ত এবং মূল ইমেজটির লেআউট অনুকরণ করে।
 * * প্রয়োজনীয়তা: এই কম্পোনেন্টটি ব্যবহার করতে আপনার Next.js প্রোজেক্টে 'lucide-react' ইনস্টল করা থাকতে হবে।
 * npm install lucide-react
 */

// --- Reusable Components ---

const LinkButton = ({ name, icon: Icon, url, style, isIconOnly = false }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={`
      flex items-center justify-center p-3 rounded-xl text-white font-semibold transition-all duration-200 shadow-md transform hover:scale-[1.02]
      ${style} ${isIconOnly ? 'aspect-square' : 'min-h-[48px]'}
    `}
  >
    <Icon className={`w-5 h-5 ${!isIconOnly ? 'mr-2' : ''}`} />
    {!isIconOnly && <span>{name}</span>}
  </a>
);

const DashboardCard = ({ title, subtitle, children, className = '', hasImage = false }) => (
  <div className={`
    relative overflow-hidden rounded-3xl p-6 transition-all duration-300
    bg-gray-800/80 backdrop-blur-md border border-gray-700/50 shadow-2xl 
    ${className}
  `}>
    {hasImage && <div className="absolute inset-0 z-0">{children}</div>}
    
    <div className={`relative z-10 ${hasImage ? 'h-full flex flex-col justify-end' : ''}`}>
      <p className={`text-xs uppercase tracking-widest ${hasImage ? 'text-gray-200' : 'text-gray-500'}`}>{title}</p>
      <h3 className={`text-xl font-bold mt-0.5 ${hasImage ? 'text-white text-3xl' : 'text-white'}`}>{subtitle}</h3>
      {!hasImage && <div className="mt-4">{children}</div>}
    </div>
  </div>
);

// --- Card Content Data ---

const linksData = [
  { name: 'LinkedIn', icon: Linkedin, url: '#', style: 'bg-blue-600 hover:bg-blue-700' },
  { name: 'Figma', icon: Figma, url: '#', style: 'bg-indigo-600 hover:bg-indigo-700' },
  { name: 'Twitter', icon: Twitter, url: '#', style: 'bg-gray-700 hover:bg-gray-600' },
  { name: 'GitHub', icon: Github, url: '#', style: 'bg-gray-700 hover:bg-gray-600' },
  { name: 'Dribbble', icon: Link, url: '#', style: 'bg-pink-600 hover:bg-pink-700 col-span-2' },
];

const PlaceholderImage = ({ src, alt, className = '' }) => (
  <img 
    src={src} 
    alt={alt} 
    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${className}`}
  />
);

// --- Main Component ---

export default function SocialMediaLinks() {
  const imageUrls = {
    techStack: 'https://placehold.co/400x600/1E293B/ffffff?text=Tech+Logos+%26+Tools', // Placeholder
    aboutMe: 'https://placehold.co/400x300/4F46E5/ffffff?text=Abstract+Art', // Placeholder
    lastProduct: 'https://placehold.co/400x500/0F172A/ffffff?text=Product+Demo+%26+Dev', // Placeholder
    figma: 'https://placehold.co/400x200/0F172A/ffffff?text=Figma+Preview', // Placeholder
  };
  
  return (
    // Outer Container (Full Dark Background)
    <section className="p-4 md:p-8 lg:p-12 bg-gray-950 font-inter flex justify-center">
      
      {/* Dashboard Grid Wrapper */}
      <div className="w-full max-w-7xl grid grid-cols-4 md:grid-cols-4 gap-6 auto-rows-fr">
        
        {/* 1. Tech Stack Card (MIS FAVORITOS) */}
        <div className="group col-span-4 md:col-span-2 min-h-[300px] md:min-h-[500px] row-span-2">
            <DashboardCard 
                title="MIS FAVORITOS" 
                subtitle="Tecnologias y herramientas" 
                className="h-full bg-gray-800/90 hover:bg-gray-700/80 transition-all duration-300 p-0"
                hasImage={true}
            >
                {/* Placeholder Image for Tech Collage */}
                <PlaceholderImage 
                    src={imageUrls.techStack} 
                    alt="Technology collage" 
                    className="opacity-70 group-hover:opacity-100"
                />
            </DashboardCard>
        </div>

        {/* 2. Social Media Links Card (LINKS) */}
        <div className="col-span-4 md:col-span-2">
            <DashboardCard 
                title="LINKS" 
                subtitle="Social Media"
                className="min-h-[150px]"
            >
                <div className="grid grid-cols-4 gap-3 mt-3">
                    {/* The first two links span 2 cols on mobile and 1 on desktop for the wide button look */}
                    <LinkButton {...linksData[0]} style="col-span-2" />
                    <LinkButton {...linksData[1]} style="col-span-2" />

                    {/* Empty placeholder box */}
                    <div className="col-span-4 h-1 bg-gray-700/50 rounded-full my-1"></div>

                    {/* Icon-only links */}
                    <LinkButton {...linksData[2]} isIconOnly={true} style="col-span-1" />
                    <LinkButton {...linksData[3]} isIconOnly={true} style="col-span-1" />
                    <LinkButton {...linksData[4]} isIconOnly={false} style="col-span-2 bg-purple-600 hover:bg-purple-700" />
                </div>
            </DashboardCard>
        </div>

        {/* 3. Last Product Card (APP) - Tall card that fills the space next to the other two */}
        <div className="group col-span-4 md:col-span-2 row-span-2">
            <DashboardCard 
                title="APP" 
                subtitle="LAST PRODUCT IN PORTFOLIO" 
                className="h-full bg-gray-900/90 hover:bg-gray-800/90 p-0 transition-all duration-300"
                hasImage={true}
            >
                {/* Image Placeholder */}
                <PlaceholderImage 
                    src={imageUrls.lastProduct} 
                    alt="Last product preview" 
                    className="absolute inset-0 opacity-50 group-hover:opacity-70"
                />
                <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                    <p className="text-xs uppercase tracking-widest text-gray-400">PRODUCT</p>
                    <h3 className="text-3xl font-bold text-white mt-0.5 mb-4">Memory ClickSt...</h3>
                    <a 
                        href="#" 
                        className="flex items-center w-max text-sm font-medium text-white px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-colors"
                    >
                        Visitar <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                </div>
            </DashboardCard>
        </div>
        
        {/* 4. About Me Card (ABOUT ME) */}
        <div className="group col-span-4 md:col-span-2">
            <DashboardCard 
                title="ABOUT ME" 
                subtitle="My Story"
                className="h-full hover:bg-gray-700/70 p-0"
                hasImage={true}
            >
                {/* Image Placeholder */}
                <PlaceholderImage 
                    src={imageUrls.aboutMe} 
                    alt="Abstract background" 
                    className="opacity-70 group-hover:opacity-90"
                />
                <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                    <h3 className="text-3xl font-bold text-white">My Story</h3>
                    <p className="text-xs uppercase tracking-widest text-gray-200 mt-1">ABOUT ME</p>
                </div>
            </DashboardCard>
        </div>
        
        {/* 5. Figma Portfolio Card (FIGMA) */}
        <div className="group col-span-4 md:col-span-2">
            <DashboardCard 
                title="FIGMA" 
                subtitle="Download Portfolio"
                className="h-full hover:bg-gray-700/70 p-0"
                hasImage={true}
            >
                {/* Image Placeholder */}
                <PlaceholderImage 
                    src={imageUrls.figma} 
                    alt="Figma Portfolio preview" 
                    className="opacity-90"
                />
                <div className="relative z-10 p-6 flex flex-col justify-end h-full backdrop-brightness-50">
                    <h3 className="text-3xl font-bold text-white">Download Portfolio</h3>
                    <p className="text-xs uppercase tracking-widest text-gray-200 mt-1">FIGMA</p>
                </div>
            </DashboardCard>
        </div>

      </div>
      
    </section>
  );
}

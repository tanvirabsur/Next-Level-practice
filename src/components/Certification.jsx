// import { useState } from 'react';

export default function CertificationSection() {
  const certifications = [
    { id: 1, name: 'Google', logo: 'G' },
    { id: 2, name: 'AWS', logo: 'aws' },
    { id: 3, name: 'QA', logo: 'QA' },
    { id: 4, name: 'HubSpot', logo: 'H' },
    { id: 5, name: 'Cisco', logo: 'cisco' },
    { id: 6, name: 'LinkedIn', logo: 'in' },
  ];

  const achievements = [
    {
      id: 1,
      title: 'Hackaton',
      subtitle: '1er Lugar AI Challenge',
      category: 'Nacional',
      icon: '🎖️',
    },
    {
      id: 2,
      title: 'Code Challenge',
      subtitle: '1re Lugar',
      category: '2023',
      icon: '🎖️',
    },
    {
      id: 3,
      title: 'Code Challenge',
      subtitle: '1re Lugar',
      category: 'Regional',
      icon: '🎖️',
    },
    {
      id: 4,
      title: 'UISEK Hackaton',
      subtitle: 'Finalistas',
      category: '2022',
      icon: '🎖️',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Text */}
        <div className="text-center mb-20">
          <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Frontend Developer with several years of experience as a Freelancer. Multiple certifications. Passionate about traveling and naturally curious. Currently, I am focused on becoming a great leader and continuing to share.
          </p>
        </div>

        {/* Certifications Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-wider">
            CERTIFICATIONS
          </h2>

          {/* Certification Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-12">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="transform transition-all duration-300 hover:scale-110"
              >
                {cert.logo === 'G' && (
                  <div className="text-5xl font-bold">G</div>
                )}
                {cert.logo === 'aws' && (
                  <div className="text-4xl font-semibold">aws</div>
                )}
                {cert.logo === 'QA' && (
                  <div className="text-4xl font-bold border-2 border-white p-2 rounded">
                    QA
                  </div>
                )}
                {cert.logo === 'H' && (
                  <div className="text-5xl font-bold">H</div>
                )}
                {cert.logo === 'cisco' && (
                  <div className="text-4xl font-semibold flex items-center gap-1">
                    <span className="text-xl">▌</span>▌<span className="text-xl">▌</span>▌
                  </div>
                )}
                {cert.logo === 'in' && (
                  <div className="text-4xl font-bold">in</div>
                )}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-slate-100 transition">
              See on LinkedIn
            </button>
            <button className="border border-slate-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-800 transition">
              Github
            </button>
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-wider">
            ACHIEVEMENTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="flex flex-col items-center text-center space-y-4 transform transition-all duration-300 hover:scale-105"
              >
                {/* Achievement Icon */}
                <div className="text-6xl">{achievement.icon}</div>

                {/* Achievement Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">{achievement.title}</h3>
                  <p className="text-slate-300 text-sm">{achievement.subtitle}</p>
                  <p className="text-slate-500 text-xs uppercase tracking-wider">
                    {achievement.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Action Bar */}
       
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
    </div>
  );
}
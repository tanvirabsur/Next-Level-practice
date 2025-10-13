export default function FrameworksAndTech() {
  const technologies = [
    {
      id: 1,
      icon: 'N',
      title: 'Next.js 13',
      description: 'App dir, Routing, Layouts, Loading UI and API routes.',
      bgColor: 'bg-slate-900'
    },
    {
      id: 2,
      icon: '⚛️',
      title: 'React 18',
      description: 'Server and Client Components. Use hook.',
      bgColor: 'bg-slate-900'
    },
    {
      id: 3,
      icon: '🗄️',
      title: 'Database',
      description: 'ORM using Prisma and Postgresql.',
      bgColor: 'bg-slate-900'
    },
    {
      id: 4,
      icon: '≈',
      title: 'Components',
      description: 'UI components built using Radix UI and styled with Tailwind CSS.',
      bgColor: 'bg-slate-900'
    },
    {
      id: 5,
      icon: '🛡️',
      title: 'Authentication',
      description: 'Authentication using NextAuth.js and middlewares.',
      bgColor: 'bg-slate-900'
    },
    {
      id: 6,
      icon: 'S',
      title: 'Subscriptions',
      description: 'Free and paid subscriptions using Stripe.',
      bgColor: 'bg-slate-900'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Frameworks & Tech
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">
            These are the tools and frameworks with which I feel more comfortable without limiting myself to them because I have worked with Angular, MySql, Laravel, C++ and many more...
            <br />
            <span className="text-white font-semibold mt-2 block">My main stack is:</span>
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600 transition duration-300 hover:bg-slate-800/70 group"
            >
              {/* Icon */}
              <div className="mb-6">
                {tech.icon.length === 1 && tech.icon !== '≈' && tech.icon !== '🛡️' && tech.icon !== '🗄️' ? (
                  <div className="w-16 h-16 bg-white text-slate-900 rounded-full flex items-center justify-center font-bold text-2xl group-hover:scale-110 transition transform">
                    {tech.icon}
                  </div>
                ) : (
                  <div className="text-5xl mb-2 group-hover:scale-110 transition transform inline-block">
                    {tech.icon === '≈' && '≈'}
                    {tech.icon === '🛡️' && '🛡️'}
                    {tech.icon === '🗄️' && '🗄️'}
                    {tech.icon === '⚛️' && '⚛️'}
                    {tech.icon === 'S' && <span className="text-white font-bold text-5xl">S</span>}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white">
                  {tech.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {tech.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none group-hover:shadow-lg group-hover:shadow-blue-500/10 transition duration-300" />
            </div>
          ))}
        </div>

        {/* Optional: Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-6">
            And I'm always learning new technologies and frameworks
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition duration-200">
            Explore My Projects
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
    </div>
  );
}
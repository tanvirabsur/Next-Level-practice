'use client'
import { useState } from 'react';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('todos');

  const projects = [
    {
      id: 1,
      number: '04',
      title: 'A Visual Journey Through Stories from Around the World',
      subtitle: 'Huma Legends',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=500&q=60',
      position: 'right'
    },
    {
      id: 2,
      number: '03',
      title: 'App Web de Aprendizaje para todas las edades...',
      subtitle: 'Memory (Mcs)',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=500&q=60',
      position: 'left'
    },
    {
      id: 3,
      number: '01',
      title: 'Últimos lanzamientos Hola Últimos lanzamientos',
      subtitle: 'UBRAND',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=500&q=60',
      position: 'right'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Projects and Products
          </h1>
          <p className="text-slate-400 mb-8">
            Lista de productos
          </p>

          {/* Tabs */}
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => setActiveTab('todos')}
              className={`px-6 py-2 rounded-full font-medium transition ${
                activeTab === 'todos'
                  ? 'bg-slate-700 text-white border border-slate-600'
                  : 'border border-slate-600 text-slate-300 hover:text-white'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setActiveTab('destacado')}
              className={`px-6 py-2 rounded-full font-medium transition ${
                activeTab === 'destacado'
                  ? 'bg-slate-700 text-white border border-slate-600'
                  : 'border border-slate-600 text-slate-300 hover:text-white'
              }`}
            >
              Destacado
            </button>
            <button
              onClick={() => setActiveTab('proyectos')}
              className={`px-6 py-2 rounded-full font-medium transition ${
                activeTab === 'proyectos'
                  ? 'bg-slate-700 text-white border border-slate-600'
                  : 'border border-slate-600 text-slate-300 hover:text-white'
              }`}
            >
              Mis Proyectos
            </button>
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={project.id} className="relative">
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  project.position === 'left' ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div
                  className={`${project.position === 'right' ? 'md:order-1' : 'md:order-2'}`}
                >
                  <div className="relative group overflow-hidden rounded-3xl h-80">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`${project.position === 'right' ? 'md:order-2' : 'md:order-1'} space-y-4`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-5xl md:text-6xl font-bold text-slate-700">
                      {project.number}
                    </span>
                    <div className="space-y-2 pt-2">
                      <h3 className="text-2xl md:text-3xl font-bold leading-tight max-w-md">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 font-medium">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Dotted Line */}
                  <div className="flex items-center gap-3 mt-6">
                    <div className="flex-1 border-t border-dashed border-slate-600" />
                  </div>

                  {/* View Button */}
                  <button className="mt-6 px-6 py-2 border border-slate-600 rounded-full text-slate-300 hover:text-white hover:border-slate-500 transition">
                    Ver Proyecto
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="flex justify-center mt-20">
          <button className="px-8 py-3 border border-slate-600 rounded-full text-white hover:bg-slate-800/50 transition font-medium">
            Ver más
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
    </div>
  );
}
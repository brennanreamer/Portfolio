'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { projects } from './projects/projectsData';

const ProjectCarousel = () => {
  const [position, setPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  // Duplicate the projects array to create a seamless loop
  const displayProjects = [...projects, ...projects];

  useEffect(() => {
    const animate = () => {
      setPosition((prev) => {
        const newPosition = prev - 0.5; // Adjust speed here (smaller = slower)
        
        // Reset position when we've scrolled through the first set of projects
        if (-newPosition >= projects.length * 320) { // 320px is card width + gap
          return 0;
        }
        return newPosition;
      });
      requestAnimationFrame(animate);
    };

    const animation = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-8">
      <div 
        ref={containerRef}
        className="flex gap-5"
        style={{
          transform: `translateX(${position}px)`,
          transition: 'transform 0.05s linear'
        }}
      >
        {displayProjects.map((project, index) => (
          <Link
            key={`${project.id}-${index}`}
            href={`/projects/${project.id}`}
            className="flex-shrink-0 w-[300px] group"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden 
                          transform transition-all duration-300 h-72
                          group-hover:scale-105 group-hover:shadow-xl">
              {project.image && (
                <div className="h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-4 h-24 flex items-center">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 
                             group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Gradient overlays for smooth edges */}
      <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Hi, I'm Brennan Reamer
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Software Engineer passionate about building innovative solutions
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  href="/projects"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Featured Projects
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Here are some of my recent engineering projects
            </p>
          </div>
          
          {/* Project Carousel */}
          <div className="mt-12">
            <ProjectCarousel />
          </div>
        </div>
      </section>
    </div>
  );
}

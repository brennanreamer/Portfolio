'use client';

import { useState } from 'react';
import Link from 'next/link';
import { projects } from './projectsData';

type ProjectType = 'all' | 'school' | 'work' | 'personal';

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<ProjectType>('all');

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeTab);

  const tabs: { label: string; value: ProjectType }[] = [
    { label: 'All', value: 'all' },
    { label: 'School', value: 'school' },
    { label: 'Work', value: 'work' },
    { label: 'Personal', value: 'personal' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-black text-center mb-8">Projects</h1>
      
      {/* Tabs */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex p-1 space-x-1 bg-gray-100 rounded-xl">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                ${activeTab === tab.value
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-200'}
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Link 
            href={`/projects/${project.id}`}
            key={project.id}
            className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {project.image && (
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-bold text-black mb-2">
                {project.title}
              </h3>
              {project.dateRange && (
                <p className="text-gray-600 text-sm mb-2">{project.dateRange}</p>
              )}
              <ul className="space-y-2">
                {project.highlights.slice(0, 2).map((highlight, idx) => (
                  <li key={idx} className="text-gray-700 text-sm">
                    {highlight}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-sm bg-gray-100 text-gray-700 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.documents && (
                <div className="mt-4 text-blue-600">
                  View {project.documents.length} document{project.documents.length > 1 ? 's' : ''} →
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

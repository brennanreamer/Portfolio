'use client';

import { useState } from 'react';
import Link from 'next/link';
import { projects } from './projectsData';

type ProjectType = 'all' | 'school' | 'work' | 'personal';

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<ProjectType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Get all unique tags
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

  const filteredProjects = projects.filter(project => 
    (activeTab === 'all' || project.type === activeTab) && 
    (searchQuery === '' || 
      project.tags.some(tag => 
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
  );

  const tabs: { label: string; value: ProjectType }[] = [
    { label: 'All', value: 'all' },
    { label: 'School', value: 'school' },
    { label: 'Work', value: 'work' },
    { label: 'Personal', value: 'personal' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-black text-center mb-8">Projects</h1>
      
      {/* Search Section */}
      <div className="mb-8">
        <div className="max-w-xl mx-auto relative">
          <input
            type="text"
            placeholder="Search by tags (e.g., CAD, Python, Circuit Design)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              aria-label="Clear search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </button>
          )}
        </div>
      </div>

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
              {project.date && (
                <p className="text-gray-600 text-sm mb-2">{project.date}</p>
              )}
              <ul className="space-y-2">
                {project.highlights.slice(0, 2).map((highlight, idx) => (
                  <li key={idx} className="text-gray-600 text-sm">
                    {highlight}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
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

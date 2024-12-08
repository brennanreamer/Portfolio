'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Project, projects } from '../projectsData';
import ModelViewer from '@/components/ModelViewer';

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showControls, setShowControls] = useState(false);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <div className="flex justify-center">
        <div className="w-[800px] relative">
          {/* Main Image */}
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="w-full h-auto max-h-[600px] rounded-lg shadow-lg object-contain"
          />

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              {/* Previous Arrow */}
              <button
                onClick={goToPrevious}
                className={`absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 ${
                  showControls ? 'opacity-100' : 'opacity-0'
                }`}
                aria-label="Previous image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Next Arrow */}
              <button
                onClick={goToNext}
                className={`absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 ${
                  showControls ? 'opacity-100' : 'opacity-0'
                }`}
                aria-label="Next image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          {/* Image Counter */}
          {images.length > 1 && (
            <div className={`absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm transition-opacity duration-300 ${
              showControls ? 'opacity-100' : 'opacity-0'
            }`}>
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const DocumentViewer = ({ documents }: { documents: Project['documents'] }) => {
  const [activeDoc, setActiveDoc] = useState(0);

  if (!documents || documents.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Documents</h2>
      
      {/* Document Tabs */}
      <div className="flex justify-center mb-4">
        <div className="inline-flex p-1 space-x-1 bg-gray-100 rounded-xl">
          {documents.map((doc, index) => (
            <button
              key={index}
              onClick={() => setActiveDoc(index)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                ${activeDoc === index
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-200'}
              `}
            >
              {doc.title}
            </button>
          ))}
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="relative bg-gray-100 rounded-lg p-4">
        <div className="aspect-[8.5/11] relative">
          <iframe
            src={`${documents[activeDoc].url}#view=FitH`}
            className="w-full h-full rounded-lg shadow-lg"
          />
          <a
            href={documents[activeDoc].url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-200"
            title="Open in new tab"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default function ProjectPage() {
  const params = useParams();
  const [project, setProject] = useState<Project | undefined>(undefined);

  useEffect(() => {
    const foundProject = projects.find(p => p.id === params.id);
    setProject(foundProject);
  }, [params.id]);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Project not found
          </h1>
          <Link 
            href="/projects"
            className="text-blue-600 hover:text-blue-800"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  // Combine main image with additional images
  const allImages = [project.image, ...(project.additionalImages || [])].filter(Boolean) as string[];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <Link 
          href="/projects"
          className="text-blue-600 hover:text-blue-800 mb-8 inline-block"
        >
          ← Back to Projects
        </Link>

        <h1 className="text-3xl font-bold text-black mb-4 flex items-center gap-4">
          {project.title}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </a>
          )}
        </h1>
        
        {project.date && (
          <p className="text-gray-600 mb-4">{project.date}</p>
        )}

        {/* Image Carousel */}
        <div className="mb-8">
          <ImageCarousel images={allImages} />
        </div>

        {/* Add the model viewer if there are models */}
        {project.models && project.models.length > 0 && (
          <div className="mt-8 mb-4">
            <h2 className="text-2xl font-bold mb-4">3D Models</h2>
            <ModelViewer models={project.models} />
          </div>
        )}

        <div className="prose max-w-none">
          <h2 className="text-xl font-semibold mb-4">Highlights</h2>
          <ul className="list-disc pl-5 space-y-2">
            {project.highlights.map((highlight, index) => {
              // Split the highlight into main text and sub-points
              const [mainText, ...subPoints] = highlight.split('\n-');
              return (
                <li key={index} className="text-gray-700">
                  {mainText}
                  {subPoints.length > 0 && (
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      {subPoints.map((point, subIndex) => (
                        <li key={`${index}-${subIndex}`} className="text-gray-700">
                          {point.trim()}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Document Viewer Component */}
          <DocumentViewer documents={project.documents} />
        </div>
      </div>
    </div>
  );
}

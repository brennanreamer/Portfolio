'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Project, projects } from '../projectsData';

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative">
      <div className="flex justify-center">
        <div className="w-[500px] relative">
          {/* Main Image */}
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="w-full h-auto rounded-lg shadow-lg object-contain"
          />

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              {/* Previous Arrow */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 group"
                aria-label="Previous image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 group-hover:scale-110 transition-transform"
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
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 group"
                aria-label="Next image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 group-hover:scale-110 transition-transform"
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
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
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

        <h1 className="text-3xl font-bold text-black mb-4">
          {project.title}
        </h1>
        
        {project.dateRange && (
          <p className="text-gray-600 mb-4">{project.dateRange}</p>
        )}

        {/* Image Carousel */}
        <div className="mb-8">
          <ImageCarousel images={allImages} />
        </div>

        <div className="prose max-w-none">
          <h2 className="text-xl font-semibold mb-4">Highlights</h2>
          <ul className="list-disc pl-5 space-y-2">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="text-gray-700">
                {highlight}
              </li>
            ))}
          </ul>

          {/* Document Viewer Component */}
          <DocumentViewer documents={project.documents} />
        </div>
      </div>
    </div>
  );
}

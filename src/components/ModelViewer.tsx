'use client';

import { useState } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          alt?: string;
          'auto-rotate'?: boolean;
          'camera-controls'?: boolean;
          'shadow-intensity'?: string;
          'shadow-softness'?: string;
          exposure?: string;
          'environment-image'?: string;
          'skybox-image'?: string;
          'camera-orbit'?: string;
          'field-of-view'?: string;
          'min-camera-orbit'?: string;
          'max-camera-orbit'?: string;
          'tone-mapping'?: string;
          'interaction-prompt'?: string;
          loading?: 'auto' | 'lazy' | 'eager';
        },
        HTMLElement
      >;
    }
  }
}

interface Model {
  title: string;
  url: string;
}

export default function ModelViewer({ models }: { models: Model[] }) {
  const [selectedModelIndex, setSelectedModelIndex] = useState(0);

  return (
    <>
      <style jsx global>{`
        model-viewer::part(default-progress-bar) {
          display: none !important;
        }
      `}</style>
      <div className="w-full space-y-4">
        <div className="flex justify-center space-x-4">
          {models.map((model, index) => (
            <button
              key={model.url}
              onClick={() => setSelectedModelIndex(index)}
              className={`px-4 py-2 rounded ${
                selectedModelIndex === index
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {model.title}
            </button>
          ))}
        </div>
        <div className="h-[600px]">
          <model-viewer
            src={models[selectedModelIndex].url}
            alt={models[selectedModelIndex].title}
            auto-rotate
            camera-controls
            shadow-intensity="1.5"
            shadow-softness="0.8"
            exposure="0.8"
            camera-orbit="-45deg 65deg 400m"
            field-of-view="90deg"
            min-camera-orbit="auto auto 200m"
            max-camera-orbit="auto auto 600m"
            style={{ width: '100%', height: '100%', backgroundColor: '#ffffff' }}
          ></model-viewer>
        </div>
      </div>
    </>
  );
}

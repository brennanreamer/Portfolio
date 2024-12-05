export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  thumbnail: string;
  images: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  completionDate: string;
  type: 'personal' | 'work' | 'school';
  featured: boolean;
}

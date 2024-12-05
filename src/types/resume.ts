export interface Education {
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: number;
  location: string;
  highlights?: string[];
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string[];
}

export interface Technology {
  category: string;
  items: string[];
}

export interface Resume {
  education: Education[];
  experience: Experience[];
  technologies: Technology[];
}

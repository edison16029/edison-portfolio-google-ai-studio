export interface CareerEntry {
  id: string;
  role: string;
  company: string;
  team?: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
  logo?: string;
}

export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startYear: number;
  endYear: number;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface DevProject {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface TravelEntry {
  id: string;
  country: string;
  city: string;
  date: string;
  status: 'visited' | 'bucket-list';
  category?: 'must-see' | 'good-to-see' | 'other';
  image: string;
  notes: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  Content: React.ComponentType;
}
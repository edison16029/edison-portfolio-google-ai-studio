export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
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
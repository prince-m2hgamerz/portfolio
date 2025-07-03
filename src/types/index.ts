export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'business' | 'portfolio' | 'landing' | 'webapp' | 'wordpress' | 'ecommerce' | 'saas';
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  stats?: {
    users?: string;
    performance?: string;
    conversion?: string;
  };
  challenges?: string[];
  solutions?: string[];
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  achievements?: string[];
  type: 'work' | 'education' | 'freelance';
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
  projectType?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'design' | 'mobile' | 'database';
  icon?: string;
  yearsOfExperience?: number;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price: string;
  duration: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  icon: string;
  category: 'certification' | 'award' | 'milestone';
}
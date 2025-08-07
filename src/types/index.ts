export interface ContactFormData {
  name: string;
  email: string;
  project: string;
  timeline: string;
  autonomyLevel: string;
  message?: string;
}

export interface ProjectData {
  id: string;
  title: string;
  type: string;
  image: string;
  deliveryTime: string;
  testimonial: string;
  client: string;
  features: string[];
  description: string;
  technologies: string[];
  url?: string;
  adminDemo?: string;
}

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  deliveryTime: string;
  icon: React.ReactNode;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  details: string[];
  duration: string;
  deliverables: string[];
  icon: React.ReactNode;
}
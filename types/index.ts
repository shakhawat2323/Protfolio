export interface Certification {
  id: number;
  title: string;
  org: string;
  year: string;
  image: string;
  aboutMeId: number;
}

export interface PortfolioStats {
  id: number;
  completedProjects: number;
  happyClients: number;
  technologiesMastered: number;
  yearsOfExperience: number;
  certifications: Certification[];
  createdAt: string;
  updatedAt: string;
}
export interface Blog {
  id: number;
  title: string;
  image: string;
  content: string;
  isPublished: boolean;
  publishedAt?: string | null;
  createdAt: string;
  updatedAt: string;
  authorId: number;
  author: {
    image: string;
    id: number;
    name: string;
    email: string;
    role?: string;
  };
}

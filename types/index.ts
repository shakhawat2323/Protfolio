export interface Certification {
  id: number;
  title: string;
  org: string;
  year: string;
  image: string;
  aboutMeId: number;
}

export interface AboutMe {
  id: number;
  technologiesMastered: number;
  happyClients: number;
  completedProjects: number;
  yearsOfExperience: number;
  createdAt: string;
  updatedAt: string;
  certifications: Certification[];
}

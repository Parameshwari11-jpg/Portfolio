export interface SocialLinks {
  github: string;
  linkedin: string;
  leetcode: string;
  email: string;
  resume: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  subHeadline: string;
  college: string;
  degree: string;
  graduationYear: string;
  location: string;
  avatarUrl?: string;
  bioIntro: string;
  bioFull: string[];
  socials: SocialLinks;
  leadership: {
    title: string;
    organization: string;
    description: string;
  };
}

export type SkillCategory = 
  | 'Languages' 
  | 'Web Development' 
  | 'Databases' 
  | 'Cloud & Tools' 
  | 'Core & Workflows';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  highlight?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  type: 'Internship' | 'Hands-on Learning' | 'Leadership';
  period: string;
  location?: string;
  description: string;
  keyPoints: string[];
  technologies: string[];
}

export type ProjectCategory = 'Full Stack' | 'Web Development' | 'Java' | 'Automation & Tools';

export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  problemStatement: string;
  category: ProjectCategory;
  technologies: string[];
  keyFeatures: string[];
  githubUrl?: string;
  liveUrl?: string;
  verifiedStatus: string;
  isPrivateOrRestricted?: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  type: 'Coursework' | 'Hands-on Lab' | 'Learning Path';
  description: string;
  credentialUrl?: string;
}

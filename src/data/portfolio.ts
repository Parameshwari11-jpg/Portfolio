import type { PersonalInfo, SkillItem, ExperienceItem, ProjectItem, CertificationItem } from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'Parameshwari R',
  role: 'Computer Science & Engineering Student | Aspiring Software Developer | Full-Stack Developer',
  subHeadline: 'B.E. Computer Science & Engineering • Karpagam College of Engineering (Class of 2027)',
  college: 'Karpagam College of Engineering',
  degree: 'B.E. Computer Science and Engineering',
  graduationYear: '2027',
  location: 'Tamil Nadu, India',
  avatarUrl: '/parameshwari.jpg',
  bioIntro: "I am a Computer Science and Engineering student graduating in 2027, driven by a passion for software development, full-stack web engineering, and algorithmic problem-solving. I build functional, accessible web applications and explore automation in document processing.",
  bioFull: [
    "Currently pursuing my B.E. in Computer Science and Engineering at Karpagam College of Engineering (graduating 2027). I focus on writing clean, modular code and understanding the core fundamentals of software engineering.",
    "My journey spans full-stack development with the MERN stack (MongoDB, Express, React, Node.js), Java application programming, and backend API integration with databases like MongoDB and Oracle.",
    "Through hands-on internships and project work—such as document accessibility analysis at Hudsmer Business Solutions and Java development at InternPe—I have worked with real-world document workflows, accessibility standards, and practical problem-solving.",
    "Beyond coding, I serve as the SDE Treasurer at my college, where I actively collaborate with peers, organize technical sessions, and contribute to the developer community."
  ],
  socials: {
    github: 'https://github.com/Parameshwari11-jpg',
    linkedin: 'https://www.linkedin.com/in/parameshwari-ravichandhran-43b548299/',
    leetcode: 'https://leetcode.com/u/Paramesh137/',
    email: 'paramesh.ravi11@gmail.com',
    resume: 'https://drive.google.com/file/d/1cNtW9vupsoxhywGo3_GfPzq4bAH03zif/view?usp=drive_link'
  },
  leadership: {
    title: 'SDE Treasurer',
    organization: 'Karpagam College of Engineering',
    description: 'Serving as the Treasurer for the Software Development Engineer (SDE) student club, coordinating community workshops, managing student tech events, and fostering collaborative learning in coding and career preparation.'
  }
};

export const skillsData: SkillItem[] = [
  // Programming Languages
  { name: 'Java', category: 'Languages', highlight: true },
  { name: 'C', category: 'Languages' },
  { name: 'C++', category: 'Languages' },
  { name: 'JavaScript (ES6+)', category: 'Languages', highlight: true },
  
  // Web Development
  { name: 'React', category: 'Web Development', highlight: true },
  { name: 'Node.js', category: 'Web Development' },
  { name: 'Express.js', category: 'Web Development' },
  { name: 'MERN Stack', category: 'Web Development', highlight: true },
  { name: 'HTML5', category: 'Web Development' },
  { name: 'CSS3 / Modern CSS', category: 'Web Development' },
  { name: 'REST APIs', category: 'Web Development' },

  // Databases
  { name: 'MongoDB', category: 'Databases', highlight: true },
  { name: 'Oracle Database', category: 'Databases' },
  { name: 'SQL Fundamentals', category: 'Databases' },

  // Cloud & Tools
  { name: 'AWS Cloud Essentials', category: 'Cloud & Tools', highlight: true },
  { name: 'Git', category: 'Cloud & Tools' },
  { name: 'GitHub', category: 'Cloud & Tools' },
  { name: 'Visual Studio Code', category: 'Cloud & Tools' },

  // Core Areas & Workflows
  { name: 'Data Structures & Algorithms', category: 'Core & Workflows', highlight: true },
  { name: 'Document Accessibility (WCAG)', category: 'Core & Workflows', highlight: true },
  { name: 'PDF & Word Document Processing', category: 'Core & Workflows' },
  { name: 'Software Testing Fundamentals', category: 'Core & Workflows' },
  { name: 'UI / UX Design Principles', category: 'Core & Workflows' }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'hbs-internship',
    role: 'Document Processing & Accessibility Intern',
    organization: 'Hudsmer Business Solutions',
    type: 'Internship',
    period: 'Internship Experience',
    description: 'Focused on document accessibility analysis, digital structure remediation, and document processing automation workflows.',
    keyPoints: [
      'Gained hands-on experience in PDF and Word document processing workflows, understanding structural hierarchy and reading orders.',
      'Studied accessibility-related standards (WCAG guidelines) and tested digital documents for assistive technology compliance.',
      'Explored automated text extraction and script-based parsing approaches to reduce repetitive manual review.',
      'Assisted in verifying document tagging, headings, table structures, and alternative text requirements.'
    ],
    technologies: ['PDF Processing', 'Document Accessibility', 'OCR Concepts', 'Quality Assurance', 'Automation']
  },
  {
    id: 'internpe-internship',
    role: 'Java Programming Intern',
    organization: 'InternPe',
    type: 'Internship',
    period: 'Internship Experience',
    description: 'Practical training and project execution centered on Core Java, Object-Oriented Programming, and algorithmic problem-solving.',
    keyPoints: [
      'Implemented foundational Java applications reinforcing OOP principles such as encapsulation, inheritance, and polymorphism.',
      'Developed interactive logic-driven applications including a Guess-the-Number game and a Connect Four game.',
      'Practiced code debugging, console I/O handling, input validation, and algorithmic state management.',
      'Enhanced problem-solving capabilities by implementing clean control flows and modular class structures.'
    ],
    technologies: ['Java', 'OOP', 'Algorithm Design', 'Game Logic', 'Debugging']
  },
  {
    id: 'aws-learning',
    role: 'Cloud Computing & Architecture Learning',
    organization: 'AWS Hands-on Training & Labs',
    type: 'Hands-on Learning',
    period: 'Technical Development',
    description: 'Continuous hands-on cloud skills development covering essential AWS cloud architecture concepts and resilient deployment strategies.',
    keyPoints: [
      'Completed AWS Cloud Computing Essentials and Cloud Practitioner foundational modules.',
      'Executed practical architectural labs including Auto-Healing and Scaling Applications on AWS.',
      'Explored core services: EC2 instances, Auto Scaling Groups, Elastic Load Balancing, and S3 storage concepts.',
      'Studied high-availability practices, fault-tolerant infrastructure design, and cloud security basics.'
    ],
    technologies: ['AWS Cloud', 'Auto Scaling', 'EC2', 'Elastic Load Balancing', 'Cloud Essentials']
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: 'talentfusion',
    title: 'TalentFusion',
    shortDescription: 'AI-assisted talent and recruitment workflow prototype for candidate-job matching and skills alignment.',
    fullDescription: 'TalentFusion is an intelligent recruitment workflow concept designed to streamline candidate skill mapping and opportunity alignment. It focuses on modern UI workflows for recruiters and applicants, providing structured candidate profiling, skill tag matching, and automated workflow assistance.',
    problemStatement: 'Manual talent screening often struggles with unstructured resume evaluation and slow candidate-opportunity matching. TalentFusion explores structured skill profiling to assist in streamlined hiring assessments.',
    category: 'Full Stack',
    technologies: ['React', 'JavaScript', 'Node.js', 'REST API', 'CSS3'],
    keyFeatures: [
      'Candidate skill mapping and role profile management',
      'AI-assisted recruitment workflow exploration for candidate screening',
      'Interactive recruiter dashboard with applicant status tracking',
      'Clean, accessible user interface optimized for high-volume data review'
    ],
    verifiedStatus: 'Verified Project Concept & Implementation'
  },
  {
    id: 'leetcode-chrome-extension',
    title: 'LeetCode Chrome Extension',
    shortDescription: 'Productivity browser extension for competitive programmers and students practicing on LeetCode.',
    fullDescription: 'A custom Chrome extension designed to enhance the LeetCode practice workflow. Built to help developers organize notes, track problem-solving time, and quickly access algorithm reference concepts without navigating away from the problem editor.',
    problemStatement: 'While solving coding problems, toggling between notes, timers, and problem categories disrupts focus. This extension provides a non-intrusive in-browser toolkit directly inside the browser environment.',
    category: 'Automation & Tools',
    technologies: ['JavaScript', 'Chrome Extension APIs', 'HTML5', 'CSS3'],
    keyFeatures: [
      'Lightweight browser popup interface with instant tool access',
      'Problem bookmarking and practice note-taking utility',
      'Focus session timer to simulate interview time constraints',
      'Quick reference links for common data structures and problem patterns'
    ],
    verifiedStatus: 'Verified Browser Extension'
  },
  {
    id: 'fitness-app',
    title: 'MERN Fitness & Health Tracker',
    shortDescription: 'Full-stack health companion app with workout logging, BMI calculation, and personal progress tracking.',
    fullDescription: 'A comprehensive full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js). Allows users to track daily workout routines, log exercises with sets and repetitions, monitor physical health via an integrated BMI calculator, and maintain workout history.',
    problemStatement: 'Many fitness enthusiasts lack an uncomplicated, ad-free tool to log their daily workouts and calculate baseline health metrics reliably.',
    category: 'Full Stack',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'CSS3'],
    keyFeatures: [
      'User authentication and personalized session management',
      'Daily workout logger with exercise name, sets, reps, and dates',
      'Comprehensive workout history view with quick delete and edit controls',
      'Interactive BMI calculator with instant categorization (Underweight, Normal, Overweight)',
      'Responsive dashboard interface built with custom modern CSS'
    ],
    verifiedStatus: 'Verified Full-Stack MERN Implementation'
  },
  {
    id: 'crezia-marketplace',
    title: 'Crezia Marketplace',
    shortDescription: 'Scalable e-commerce marketplace architecture with React frontend and Spring Boot REST API integration.',
    fullDescription: 'A multi-vendor digital marketplace web application combining a responsive React frontend with a Spring Boot REST API backend architecture. Features product catalog browsing, role-oriented interfaces for buyers and sellers, structured database models, and an AI-assisted customer query support layout.',
    problemStatement: 'Building e-commerce platforms requires clear architectural separation between modern dynamic frontends, robust enterprise backend APIs, and reliable database schema management.',
    category: 'Web Development',
    technologies: ['React', 'Spring Boot', 'REST APIs', 'Oracle Database / SQL', 'CSS3'],
    keyFeatures: [
      'Modular React frontend with product catalog and category filters',
      'Enterprise REST API integration structure using Spring Boot',
      'Role-based interface planning for buyers, sellers, and admin management',
      'Relational database integration for order and product persistence',
      'Embedded support chat UI concept for automated query assistance'
    ],
    verifiedStatus: 'Verified Full-Stack Architecture'
  },
  {
    id: 'smart-saver',
    title: 'Smart Saver - Expense Tracker',
    shortDescription: 'Client-side personal expense manager with visual budget breakdown, transaction history, and local persistence.',
    fullDescription: 'A personal finance utility designed to help students and individuals record daily expenditures, categorize outgoing funds (Food, Education, Travel, Utilities), and track total remaining budgets in real-time. Built cleanly using vanilla HTML5, CSS3, and JavaScript.',
    problemStatement: 'Users frequently need a quick, accessible, and privacy-friendly method to track expenses without requiring invasive account registrations or third-party bank linking.',
    category: 'Web Development',
    technologies: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'LocalStorage API'],
    keyFeatures: [
      'Real-time transaction logging with amount, category, and date',
      'Instant balance, total income, and total expense calculation',
      'Dynamic category-based spending breakdown',
      'Browser local storage integration ensuring zero data loss across reloads',
      'Mobile-optimized touch layout with instant feedback animations'
    ],
    verifiedStatus: 'Verified Web Application'
  },
  {
    id: 'hbs-ocr-tool',
    title: 'HBS OCR & Document Processing Tool',
    shortDescription: 'Document text extraction and accessibility analysis tool for PDF structure verification and OCR workflows.',
    fullDescription: 'A document processing and text-extraction project created to address the challenges of extracting readable text from structured PDF documents and evaluating accessibility compliance. Developed to explore OCR pipelines, document reading order, and automated extraction workflows.',
    problemStatement: 'PDF documents frequently contain scanned elements or unstructured tags that fail accessibility guidelines and resist standard text search. This tool focuses on text extraction and structure assessment.',
    category: 'Automation & Tools',
    technologies: ['Python', 'OCR / Text Extraction', 'PDF Processing', 'Accessibility Tagging'],
    keyFeatures: [
      'Automated text extraction from multi-page PDF documents',
      'Document structure and reading order inspection algorithms',
      'Exploration of OCR processing for scanned and low-contrast text elements',
      'Supports accessibility compliance workflows (WCAG document structure)'
    ],
    githubUrl: 'https://github.com/Parameshwari11-jpg/HBS-OCR-Tool',
    verifiedStatus: 'Public GitHub Repository Available'
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: 'cert-web-dev',
    title: 'HTML5 & Modern CSS Web Development',
    issuer: 'Coursework & Skill Verification',
    type: 'Coursework',
    description: 'Comprehensive curriculum covering semantic HTML5 structure, modern CSS layouts (Flexbox, Grid), responsive design principles, and web accessibility standards.'
  },
  {
    id: 'cert-nptel',
    title: 'NPTEL Computer Science Foundations',
    issuer: 'NPTEL / IIT Online Learning',
    type: 'Coursework',
    description: 'Rigorous academic coursework in core computer science principles, algorithmic problem solving, and standard computing paradigms.'
  },
  {
    id: 'cert-aws-labs',
    title: 'AWS Cloud Essentials & Auto-Healing Labs',
    issuer: 'AWS Hands-on Cloud Training',
    type: 'Hands-on Lab',
    description: 'Hands-on architectural labs covering AWS core infrastructure, auto-healing systems, elastic load balancing, and application scaling principles.'
  },
  {
    id: 'cert-internpe-java',
    title: 'Java Programming & Application Development',
    issuer: 'InternPe',
    type: 'Coursework',
    description: 'Intensive practical training covering Core Java, Object-Oriented software design, control flow algorithms, and interactive game application programming.'
  }
];

export const statsData = [
  { label: 'Degree', value: 'B.E. CSE' },
  { label: 'Graduation Year', value: '2027' },
  { label: 'College', value: 'KCE Coimbatore' },
  { label: 'Core Focus', value: 'Software & Full-Stack' }
];

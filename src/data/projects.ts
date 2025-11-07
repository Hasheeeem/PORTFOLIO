export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  tags: string[];
  technologies: string[];
  link?: string;
  github?: string;
  featured: boolean;
  stats?: {
    label: string;
    value: string;
  }[];
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'AI-Powered Task Manager',
    tagline: 'Smart productivity meets elegant design',
    description: 'A cutting-edge task management application powered by AI that learns from your habits and suggests optimal workflows. Features include natural language processing for task creation, intelligent prioritization, and seamless team collaboration.',
    image: '/projects/task-manager.jpg', // Replace with actual image
    tags: ['Featured', 'AI/ML', 'SaaS'],
    technologies: ['React', 'TypeScript', 'OpenAI', 'Node.js', 'PostgreSQL'],
    link: 'https://example.com',
    github: 'https://github.com/Hasheeeem/ai-task-manager',
    featured: true,
    stats: [
      { label: 'Users', value: '10K+' },
      { label: 'Tasks Created', value: '500K+' },
      { label: 'Time Saved', value: '2M hrs' },
    ],
  },
  {
    id: 'project-2',
    title: 'E-Commerce Platform',
    tagline: 'Next-gen shopping experience',
    description: 'A modern e-commerce platform with real-time inventory management, AI-powered product recommendations, and seamless payment integration. Built for scalability and performance.',
    image: '/projects/ecommerce.jpg',
    tags: ['Web App', 'Full-Stack'],
    technologies: ['Next.js', 'Stripe', 'Tailwind', 'Firebase'],
    link: 'https://example.com',
    featured: true,
    stats: [
      { label: 'Revenue', value: '$2M+' },
      { label: 'Products', value: '50K+' },
      { label: 'Orders', value: '100K+' },
    ],
  },
  {
    id: 'project-3',
    title: 'Fitness Tracking App',
    tagline: 'Your personal health companion',
    description: 'Mobile-first fitness application with workout tracking, nutrition planning, and social features. Integrates with wearable devices for comprehensive health monitoring.',
    image: '/projects/fitness.jpg',
    tags: ['Mobile', 'Health'],
    technologies: ['React Native', 'Expo', 'TensorFlow', 'AWS'],
    link: 'https://example.com',
    github: 'https://github.com/Hasheeeem/fitness-app',
    featured: false,
  },
  {
    id: 'project-4',
    title: 'Real-Time Analytics Dashboard',
    tagline: 'Data visualization reimagined',
    description: 'Powerful analytics platform providing real-time insights with beautiful visualizations. Features customizable dashboards, advanced filtering, and export capabilities.',
    image: '/projects/analytics.jpg',
    tags: ['Dashboard', 'Data'],
    technologies: ['React', 'D3.js', 'GraphQL', 'MongoDB'],
    link: 'https://example.com',
    featured: false,
  },
  {
    id: 'project-5',
    title: 'AI Content Generator',
    tagline: 'Create content at the speed of thought',
    description: 'Advanced AI-powered content generation tool for marketers and creators. Supports multiple content types, languages, and style customization.',
    image: '/projects/content-gen.jpg',
    tags: ['AI/ML', 'Tool'],
    technologies: ['Python', 'GPT-4', 'FastAPI', 'React'],
    github: 'https://github.com/Hasheeeem/ai-content-gen',
    featured: true,
    stats: [
      { label: 'Content Pieces', value: '1M+' },
      { label: 'Languages', value: '50+' },
      { label: 'Users', value: '25K+' },
    ],
  },
  {
    id: 'project-6',
    title: 'Social Media Scheduler',
    tagline: 'Automate your social presence',
    description: 'Comprehensive social media management tool with scheduling, analytics, and AI-powered content suggestions across multiple platforms.',
    image: '/projects/social.jpg',
    tags: ['SaaS', 'Marketing'],
    technologies: ['Next.js', 'Node.js', 'Redis', 'PostgreSQL'],
    link: 'https://example.com',
    featured: false,
  },
];

export const featuredProjects = projects.filter(p => p.featured);
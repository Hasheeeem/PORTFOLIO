export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  project?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    avatar: '👩‍💼',
    content: 'Hasheem delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise is outstanding. The project was completed on time and within budget.',
    rating: 5,
    project: 'E-Commerce Platform',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'InnovateLabs',
    avatar: '👨‍💻',
    content: 'Working with Hasheem and ZYPHER was a game-changer for our business. The AI integration he built transformed our product and delighted our users. Highly recommended!',
    rating: 5,
    project: 'AI-Powered Dashboard',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'HealthTech Solutions',
    avatar: '👩‍⚕️',
    content: 'The mobile app Hasheem developed is beautiful, fast, and exactly what we needed. His communication throughout the project was excellent, and he provided valuable insights.',
    rating: 5,
    project: 'Fitness Tracking App',
  },
  {
    id: '4',
    name: 'David Park',
    role: 'CTO',
    company: 'DataFlow Systems',
    avatar: '👨‍🔬',
    content: 'Incredible work on our analytics platform. Hasheem\'s full-stack skills and understanding of complex data visualization made all the difference. A true professional.',
    rating: 5,
    project: 'Analytics Dashboard',
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    role: 'Marketing Director',
    company: 'Creative Agency Co.',
    avatar: '👩‍🎨',
    content: 'The website ZYPHER built for us is stunning and performs flawlessly. Hasheem\'s design sense combined with technical prowess is a rare find. We couldn\'t be happier!',
    rating: 5,
    project: 'Corporate Website',
  },
  {
    id: '6',
    name: 'James Wilson',
    role: 'Startup Founder',
    company: 'NextGen Apps',
    avatar: '👨‍💼',
    content: 'Hasheem helped us launch our MVP in record time. His expertise in modern web technologies and AI integration gave us a competitive edge. Fantastic collaboration!',
    rating: 5,
    project: 'SaaS MVP',
  },
];
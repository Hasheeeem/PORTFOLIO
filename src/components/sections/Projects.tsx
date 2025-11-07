import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'Careerist',
      category: 'AI/ML • Full-Stack',
      description: 'AI-powered career recommendation tool using K-Means clustering and KNN, with an interactive UI and backend dashboard.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80', // Career/analytics image
      color: 'from-purple-600 to-pink-600',
      size: 'large', // Takes 2 columns
      link: '#',
      github: '#',
      tags: ['AI/ML', 'K-Means', 'KNN', 'React', 'Python'],
    },
    {
      title: 'E&S Decorations',
      category: 'Full-Stack • Web',
      description: 'Modern website for an event management company built with React, Vite, FastAPI, and MongoDB for seamless event planning.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80', // Event/party decorations
      color: 'from-blue-600 to-cyan-600',
      size: 'medium',
      link: '#',
      github: '#',
      tags: ['React', 'Vite', 'FastAPI', 'MongoDB'],
    },
    {
      title: 'Grocery E-Commerce Platform',
      category: 'Full-Stack • E-Commerce',
      description: 'Complete online grocery shopping platform with user authentication, cart management, and order processing using Node.js and MongoDB.',
      image: 'https://images.unsplash.com/photo-1543168256-418811576931?w=800&q=80', // Grocery shopping
      color: 'from-green-600 to-emerald-600',
      size: 'medium',
      link: '#',
      github: '#',
      tags: ['HTML', 'Node.js', 'MongoDB', 'E-Commerce'],
    },
    {
      title: 'Grocery Management System',
      category: 'Desktop • Enterprise',
      description: 'Comprehensive inventory and sales management system for grocery stores built with Java and MySQL database.',
      image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&q=80', // Inventory/warehouse
      color: 'from-orange-600 to-red-600',
      size: 'small',
      link: '#',
      github: '#',
      tags: ['Java', 'MySQL', 'Desktop App'],
    },
  ];

  return (
    <section id="projects" className="relative py-32 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="inline-block px-4 py-2 bg-white text-black rounded-full text-sm font-bold mb-6">
            PORTFOLIO
          </div>
          
          <h2 className="text-7xl md:text-9xl font-black leading-none mb-6">
            SELECTED <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">WORK</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Real-world projects showcasing expertise in AI/ML, full-stack development, and e-commerce solutions.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`
                group relative overflow-hidden rounded-3xl
                ${project.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${project.size === 'medium' ? 'md:row-span-1' : ''}
                ${project.size === 'small' ? '' : ''}
              `}
            >
              {/* Project Card */}
              <div className="relative h-full min-h-[400px] bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-8">
                  <div>
                    <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs font-medium mb-4 border border-white/20">
                      {project.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-3xl md:text-4xl font-black mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs font-medium border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      {project.link && (
                        <a
                          href={project.link}
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-bold text-sm hover:scale-105 transition-transform"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Project
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all border border-white/20"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-3xl transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/Hasheeeem"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg font-bold text-white hover:text-purple-400 transition-colors group"
          >
            View More on GitHub
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="group-hover:translate-x-2 transition-transform"
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
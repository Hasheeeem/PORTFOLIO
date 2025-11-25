import { motion } from 'framer-motion';
import { useState } from 'react';
import { Code, Server, Brain, Smartphone } from 'lucide-react';

export const Expertise = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const skills = [
    {
      category: 'Frontend',
      icon: Code,
      gradient: 'from-blue-600 to-cyan-600',
      bg: 'from-blue-50 to-cyan-50',
      items: [
        { name: 'React & Next.js', level: 95, color: '#0ea5e9' }, // Sky blue
        { name: 'TypeScript', level: 92, color: '#3b82f6' }, // Blue
        { name: 'Tailwind CSS', level: 95, color: '#06b6d4' }, // Cyan
        { name: 'Framer Motion', level: 88, color: '#6366f1' }, // Indigo
      ]
    },
    {
      category: 'Backend',
      icon: Server,
      gradient: 'from-green-600 to-emerald-600',
      bg: 'from-green-50 to-emerald-50',
      items: [
        { name: 'Node.js', level: 90, color: '#10b981' }, // Emerald
        { name: 'Python', level: 85, color: '#059669' }, // Green
        { name: 'PostgreSQL', level: 85, color: '#0d9488' }, // Teal
        { name: 'GraphQL', level: 80, color: '#14b8a6' }, // Teal
      ]
    },
    {
      category: 'AI/ML',
      icon: Brain,
      gradient: 'from-orange-600 to-red-600',
      bg: 'from-orange-50 to-red-50',
      items: [
        { name: 'OpenAI API', level: 50, color: '#f97316' }, // FIXED: 50%
        { name: 'LangChain', level: 45, color: '#ef4444' }, // FIXED: 45%
        { name: 'TensorFlow', level: 30, color: '#dc2626' }, // FIXED: 30%
        { name: 'Data Analysis', level: 55, color: '#fb923c' }, // FIXED: 55%
      ]
    },
    {
      category: 'Mobile',
      icon: Smartphone,
      gradient: 'from-purple-600 to-pink-600',
      bg: 'from-purple-50 to-pink-50',
      items: [
        { name: 'React Native', level: 85, color: '#a855f7' }, // Purple
        { name: 'Expo', level: 88, color: '#9333ea' }, // Purple
        { name: 'Flutter', level: 75, color: '#ec4899' }, // Pink
      ]
    },
  ];

  return (
    <section id="expertise" className="relative py-20 md:py-32 bg-white text-black">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <div className="inline-block px-4 py-2 bg-black text-white rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6">
            EXPERTISE
          </div>
          
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-6 md:mb-8">
            TECH
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
              STACK
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl">
            <p className="text-xl sm:text-2xl font-bold leading-tight">
              Mastering modern technologies to build exceptional experiences.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              From frontend to backend, mobile to AI/ML - I work with cutting-edge tools 
              to deliver scalable, performant solutions.
            </p>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-20">
          {skills.map((skillSet, index) => (
            <motion.div
              key={skillSet.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Card Container */}
              <div className={`relative h-full bg-gradient-to-br ${skillSet.bg} rounded-2xl md:rounded-3xl p-6 md:p-8 border-2 border-gray-200 hover:border-transparent transition-all duration-500`}>
                
                {/* Gradient Border on Hover */}
                <div className={`absolute -inset-[2px] bg-gradient-to-r ${skillSet.gradient} opacity-0 group-hover:opacity-100 rounded-2xl md:rounded-3xl transition-opacity duration-500 -z-10`} />

                {/* Header */}
                <div className="relative flex items-center justify-between mb-6 md:mb-8">
                  <div className="flex items-center gap-3 md:gap-4">
                    {/* Professional Icon */}
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${skillSet.gradient} flex items-center justify-center flex-shrink-0`}>
                      <skillSet.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">
                        {skillSet.category}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 font-medium">
                        {skillSet.items.length} Technologies
                      </p>
                    </div>
                  </div>

                  {/* Badge - Hide on mobile if too cramped */}
                  <div className={`hidden sm:block px-3 md:px-4 py-1 md:py-2 rounded-full bg-gradient-to-r ${skillSet.gradient} text-white font-bold text-xs md:text-sm shadow-lg`}>
                    {skillSet.category === 'AI/ML' ? 'Learning' : 'Expert'}
                  </div>
                </div>

                {/* Skills List */}
                <div className="relative space-y-4 md:space-y-6">
                  {skillSet.items.map((skill, skillIndex) => (
                    <div key={skill.name} className="relative">
                      {/* Skill Name & Level */}
                      <div className="flex items-center justify-between mb-2 md:mb-3">
                        <span className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">
                          {skill.name}
                        </span>
                        <span className="text-xs sm:text-sm font-black text-gray-900 tabular-nums">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative h-3 md:h-4 bg-white rounded-full overflow-hidden shadow-inner">
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1.5, 
                            delay: skillIndex * 0.15,
                            ease: [0.43, 0.13, 0.23, 0.96]
                          }}
                        >
                          {/* Shine Effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity, 
                              repeatDelay: 3,
                              ease: 'easeInOut'
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-br from-white/80 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* 3D Shadow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${skillSet.gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500 -z-20 rounded-2xl md:rounded-3xl`} />
            </motion.div>
          ))}
        </div>

        {/* Technologies Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-black text-white p-8 md:p-12"
        >
          <div className="mb-4 md:mb-6">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Tools & Technologies</h3>
            <p className="text-sm md:text-base text-gray-400">Everything I work with on a daily basis</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {[
              'Git', 'Docker', 'AWS', 'Vercel', 'Firebase', 'Supabase',
              'MongoDB', 'Redis', 'Figma', 'VS Code', 'Postman', 'GitHub'
            ].map((tool, i) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-center font-semibold text-xs md:text-sm hover:bg-white/20 transition-all cursor-default"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
import { motion } from 'framer-motion';
import { useState } from 'react';

export const Expertise = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const skills = [
    {
      category: 'Frontend',
      icon: '⚛️',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      bg: 'from-blue-50 to-cyan-50',
      items: [
        { name: 'React & Next.js', level: 95, color: '#61DAFB' },
        { name: 'TypeScript', level: 92, color: '#3178C6' },
        { name: 'Tailwind CSS', level: 95, color: '#06B6D4' },
        { name: 'Framer Motion', level: 88, color: '#0055FF' },
      ]
    },
    {
      category: 'Backend',
      icon: '⚙️',
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      bg: 'from-green-50 to-emerald-50',
      items: [
        { name: 'Node.js', level: 90, color: '#339933' },
        { name: 'Python', level: 85, color: '#3776AB' },
        { name: 'PostgreSQL', level: 85, color: '#4169E1' },
        { name: 'GraphQL', level: 80, color: '#E10098' },
      ]
    },
    {
      category: 'AI/ML',
      icon: '🤖',
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      bg: 'from-orange-50 to-pink-50',
      items: [
        { name: 'OpenAI API', level: 85, color: '#10A37F' },
        { name: 'LangChain', level: 80, color: '#FF6B6B' },
        { name: 'TensorFlow', level: 75, color: '#FF6F00' },
        { name: 'PyTorch', level: 70, color: '#EE4C2C' },
      ]
    },
    {
      category: 'Mobile',
      icon: '📱',
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      bg: 'from-purple-50 to-pink-50',
      items: [
        { name: 'React Native', level: 85, color: '#61DAFB' },
        { name: 'Expo', level: 88, color: '#000020' },
        { name: 'Flutter', level: 75, color: '#02569B' },
      ]
    },
  ];

  return (
    <section id="expertise" className="relative py-32 bg-white text-black overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20" />
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm font-bold mb-6">
            EXPERTISE
          </div>
          
          <h2 className="text-7xl md:text-9xl font-black leading-none mb-8">
            TECH
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
              STACK
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
            <p className="text-2xl font-bold leading-tight">
              Mastering modern technologies to build exceptional experiences.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From frontend to backend, mobile to AI/ML - I work with cutting-edge tools 
              to deliver scalable, performant solutions.
            </p>
          </div>
        </motion.div>

        {/* Skills Grid - Large Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
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
              <div className={`relative h-full bg-gradient-to-br ${skillSet.bg} rounded-3xl p-8 border-2 border-gray-200 hover:border-transparent transition-all duration-500 overflow-hidden`}>
                
                {/* Gradient Border on Hover */}
                <div className={`absolute -inset-[2px] bg-gradient-to-r ${skillSet.gradient} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 -z-10`} />

                {/* Header */}
                <div className="relative flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    {/* Icon with Animation */}
                    <motion.div
                      className="text-7xl"
                      animate={hoveredIndex === index ? { 
                        rotate: [0, -10, 10, -10, 0],
                        scale: [1, 1.2, 1]
                      } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {skillSet.icon}
                    </motion.div>
                    
                    <div>
                      <h3 className="text-4xl font-black text-gray-900">
                        {skillSet.category}
                      </h3>
                      <p className="text-sm text-gray-600 font-medium">
                        {skillSet.items.length} Technologies
                      </p>
                    </div>
                  </div>

                  {/* Badge */}
                  <motion.div
                    className={`px-4 py-2 rounded-full bg-gradient-to-r ${skillSet.gradient} text-white font-bold text-sm shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    Expert
                  </motion.div>
                </div>

                {/* Skills List */}
                <div className="relative space-y-6">
                  {skillSet.items.map((skill, skillIndex) => (
                    <div key={skill.name} className="relative">
                      {/* Skill Name & Level */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-bold text-gray-900 text-lg">
                          {skill.name}
                        </span>
                        <span className="text-sm font-black text-gray-900 tabular-nums">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar - Bold Style */}
                      <div className="relative h-4 bg-white rounded-full overflow-hidden shadow-inner">
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

                {/* Decorative Corner Element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/80 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* 3D Shadow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${skillSet.gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500 -z-20 rounded-3xl`} />
            </motion.div>
          ))}
        </div>

        {/* Technologies Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-black text-white p-12"
        >
          <div className="mb-6">
            <h3 className="text-3xl font-bold mb-2">Tools & Technologies</h3>
            <p className="text-gray-400">Everything I work with on a daily basis</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
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
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-center font-semibold text-sm hover:bg-white/20 transition-all cursor-default"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Status */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-300">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-600"></span>
            </div>
            <span className="text-sm font-bold text-purple-900">
              Always learning, always evolving
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Rocket, Brain, Zap, Award, Target, TrendingUp } from 'lucide-react';
import { useRef, useState } from 'react';

export const About = () => {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState<'story' | 'skills' | 'values'>('story');
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

const journey = [
  {
    year: '2022',
    title: 'Started Coding',
    description: 'Fell in love with building digital products',
  },
  {
    year: '2023',
    title: 'First Clients',
    description: 'Delivered professional web applications',
  },
  {
    year: '2024',
    title: 'AI/ML Journey Begins',
    description: 'Started exploring artificial intelligence',
  },
  {
    year: '2025',
    title: 'Founded ZYPHER',
    description: 'Launched my tech solutions company',
  },
  {
    year: 'Now',
    title: 'Building & Learning',
    description: '50+ projects, pursuing AI/ML mastery',
  },
];

  const coreValues = [
    { icon: Award, title: 'Excellence', description: 'Never settle for good enough', color: 'from-yellow-500 to-orange-500' },
    { icon: Target, title: 'Focus', description: 'Solving real problems', color: 'from-blue-500 to-cyan-500' },
    { icon: TrendingUp, title: 'Growth', description: 'Always learning, evolving', color: 'from-green-500 to-emerald-500' },
    { icon: Zap, title: 'Speed', description: 'Fast execution, quality results', color: 'from-purple-500 to-pink-500' },
  ];

  const skills = [
    { category: 'Development', percentage: 95, color: 'bg-blue-500' },
    { category: 'UI/UX Design', percentage: 88, color: 'bg-purple-500' },
    { category: 'AI/ML', percentage: 20, color: 'bg-orange-500' },
    { category: 'Leadership', percentage: 100, color: 'bg-green-500' },
  ];

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="relative py-32 bg-white text-black"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm font-bold mb-6">
            ABOUT ME
          </div>
          
          <h2 className="text-5xl sm:text-7xl md:text-9xl font-black leading-none mb-8">
            WHO I
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
              AM
            </span>
          </h2>
        </motion.div>

        {/* Main Content - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* LEFT - Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ y: imageY }}
            className="relative"
          >
            {/* Portrait Container */}
            <div className="relative group">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 relative">
                {/* Your Portrait */}
                <img 
                  src="/portrait.png" 
                  alt="Hasheem" 
                  className="w-full h-full object-cover relative z-10"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-600/20 to-pink-600/20">
                          <div class="text-center">
                            <div class="w-32 h-32 mx-auto mb-4 rounded-full bg-black/10 flex items-center justify-center text-8xl font-black text-gray-800">H</div>
                            <p class="text-gray-600 text-sm">Add portrait.png to /public/</p>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-20" />

                {/* Floating Name Badge */}
                <div className="absolute bottom-6 left-6 right-6 z-30">
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-black">Hasheem</h3>
                        <p className="text-sm text-gray-600">Developer & Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3D Shadow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 -z-10 rounded-3xl" />
            </div>
          </motion.div>

          {/* RIGHT - Interactive Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ y: textY }}
            className="flex flex-col justify-center"
          >
            {/* Tab Navigation - NO EMOJIS */}
            <div className="flex gap-3 mb-8">
              {[
                { id: 'story', label: 'My Story' },
                { id: 'skills', label: 'Skills' },
                { id: 'values', label: 'Values' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-6 py-3 rounded-full font-bold transition-all ${
                    activeTab === tab.id
                      ? 'bg-black text-white scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="min-h-[400px]"
            >
              {/* STORY TAB */}
              {activeTab === 'story' && (
                <div className="space-y-6">
                  <h3 className="text-4xl font-black mb-6">
                    Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Future</span>
                  </h3>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    I'm a <span className="font-bold text-black">developer, founder, and creator</span> passionate 
                    about transforming ideas into powerful digital experiences. As the founder of{' '}
                    <span className="font-bold text-black">ZYPHER</span>, I'm building cutting-edge IT solutions 
                    that help businesses thrive in the digital age.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    My journey spans <span className="font-bold text-black">full-stack development</span>, mobile apps, 
                    AI/ML engineering, and everything in between. Currently diving deep into artificial intelligence, 
                    exploring how it can solve real-world problems.
                  </p>

                  {/* Journey Timeline */}
                  <div className="mt-8 space-y-4">
                    <h4 className="text-xl font-bold mb-4">The Journey</h4>
                    {journey.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-4 group"
                      >
                        <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-black text-sm group-hover:scale-110 transition-transform">
                          {item.year}
                        </div>
                        <div className="flex-1">
                          <h5 className="font-bold text-lg">{item.title}</h5>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* SKILLS TAB */}
              {activeTab === 'skills' && (
                <div className="space-y-8">
                  <h3 className="text-4xl font-black mb-6">
                    Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Abilities</span>
                  </h3>

                  {skills.map((skill, i) => (
                    <motion.div
                      key={skill.category}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-bold text-xl">{skill.category}</span>
                        <span className="text-2xl font-black text-gray-900 tabular-nums">
                          {skill.percentage}%
                        </span>
                      </div>
                      <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full ${skill.color} rounded-full relative`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Specialties */}
                  <div className="mt-8">
                    <h4 className="text-xl font-bold mb-4">Specialties</h4>
                    <div className="flex flex-wrap gap-3">
                      {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AI/ML', 'Mobile', 'UI/UX'].map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-300 rounded-full text-sm font-bold text-purple-900 hover:scale-110 transition-transform cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* VALUES TAB */}
              {activeTab === 'values' && (
                <div className="space-y-6">
                  <h3 className="text-4xl font-black mb-6">
                    What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Stand For</span>
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {coreValues.map((value, i) => (
                      <motion.div
                        key={value.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="group p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 hover:border-transparent transition-all relative overflow-hidden"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                        <div className="relative z-10">
                          <value.icon className="w-10 h-10 mb-3 text-gray-800 group-hover:text-white transition-colors" />
                          <h4 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-white transition-colors">
                            {value.title}
                          </h4>
                          <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors">
                            {value.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="mt-8 p-8 bg-black text-white rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 text-9xl font-black text-white/5">"</div>
                    <p className="text-2xl font-bold mb-4 relative z-10">
                      "Code is poetry, design is art, and problem-solving is my craft."
                    </p>
                    <p className="text-gray-400">— Hasheem</p>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
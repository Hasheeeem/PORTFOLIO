import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Code2, Rocket, Users, Award, Calendar, GraduationCap, BookOpen, Shield, Layers } from 'lucide-react';
import { useRef, useState } from 'react';

export const Experience = () => {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const workExperience = [
    {
      year: '2024 - Present',
      role: 'Founder & CEO',
      company: 'ZYPHER',
      type: 'Full-time',
      location: 'Remote',
      description: 'Building cutting-edge IT solutions for modern businesses. Leading the company to deliver innovative web, mobile, and AI-powered products to clients worldwide.',
      achievements: [
        'Founded and launched ZYPHER',
        'Acquired 30+ clients globally',
        'Delivered 50+ successful projects',
        'Achieved 99% client satisfaction rate',
      ],
      icon: Rocket,
      gradient: 'from-purple-500 to-pink-500',
      tags: ['Leadership', 'Business', 'Full-Stack', 'AI/ML'],
    },
    {
      year: 'Jul 2025 - Present',
      role: 'Software Solutions Intern',
      company: 'Lylux',
      type: 'Internship',
      location: 'Dubai, UAE (Remote)',
      description: 'Contributing to software solutions development using modern technologies. Working with Supabase, React.js, and building scalable applications.',
      achievements: [
        'Developed features using React.js and Supabase',
        'Implemented secure authentication systems',
        'Collaborated with remote team effectively',
        'Delivered projects within tight deadlines',
      ],
      icon: Layers,
      gradient: 'from-blue-500 to-cyan-500',
      tags: ['Supabase', 'React.js', 'Full-Stack'],
    },
    {
      year: 'Jul 2025 - Present',
      role: 'Full-Stack Developer Intern',
      company: 'People Maketh',
      type: 'Internship',
      location: 'Bengaluru, Karnataka, India (Remote)',
      description: 'Contributing to "Secure Thread", a cybersecurity product, as part of a full-stack team. Gaining hands-on experience in agile development and secure coding practices using SAST Framework.',
      achievements: [
        'Built features for cybersecurity product',
        'Implemented SAST Framework best practices',
        'Developed full-stack solutions',
        'Practiced secure coding standards',
      ],
      icon: Shield,
      gradient: 'from-green-500 to-emerald-500',
      tags: ['SAST Framework', 'Full-Stack', 'Cybersecurity'],
    },
    {
      year: 'Apr 2025 - Jun 2025',
      role: 'Full-Stack Developer Intern',
      company: 'Zayn Software Solutions',
      type: 'Internship',
      location: 'Doha, Qatar (Remote)',
      description: 'Developed web applications using PHP and CodeIgniter framework. Built scalable backend systems and contributed to multiple client projects.',
      achievements: [
        'Developed web apps with PHP & CodeIgniter',
        'Built RESTful APIs for client projects',
        'Learned MVC architecture patterns',
        'Collaborated with senior developers',
      ],
      icon: Code2,
      gradient: 'from-indigo-500 to-purple-500',
      tags: ['PHP', 'CodeIgniter', 'Backend'],
    },
    {
      year: '2022 - 2024',
      role: 'Freelance Web Developer',
      company: 'Self-Employed',
      type: 'Freelance',
      location: 'Remote',
      description: 'Started my development journey as a freelance web developer. Built websites and web applications for local businesses and clients, learning modern development practices.',
      achievements: [
        'Completed 15+ client projects',
        'Built responsive websites from scratch',
        'Learned HTML, CSS, JavaScript, React',
        'Established client relationships',
      ],
      icon: Briefcase,
      gradient: 'from-orange-500 to-red-500',
      tags: ['HTML', 'CSS', 'JavaScript', 'React'],
    },
  ];

  const education = [
    {
      year: '2020 - 2024',
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Your University Name', // UPDATE THIS
      location: 'City, Country', // UPDATE THIS
      type: 'Bachelor\'s Degree',
      description: 'Focused on software engineering, algorithms, data structures, and artificial intelligence. Graduated with strong foundation in computer science fundamentals.',
      achievements: [
        'Completed major in Computer Science',
        'Built multiple academic projects',
        'Participated in coding competitions',
        'Learned AI/ML and full-stack development',
      ],
      icon: GraduationCap,
      gradient: 'from-indigo-500 to-purple-500',
      tags: ['Computer Science', 'Software Engineering', 'AI'],
    },
    {
      year: '2018 - 2020',
      degree: 'High School Diploma',
      institution: 'Your High School Name', // UPDATE THIS
      location: 'City, Country', // UPDATE THIS
      type: 'Secondary Education',
      description: 'Completed secondary education with focus on Mathematics and Computer Science. Started coding journey during high school.',
      achievements: [
        'Strong foundation in Mathematics',
        'Started learning programming',
        'Participated in science projects',
        'Developed interest in technology',
      ],
      icon: BookOpen,
      gradient: 'from-blue-500 to-cyan-500',
      tags: ['Mathematics', 'Science', 'Programming Basics'],
    },
  ];

  const certifications = [
    { name: 'AWS Certified Solutions Architect', year: '2024', issuer: 'Amazon Web Services' },
    { name: 'Advanced React & TypeScript', year: '2024', issuer: 'Frontend Masters' },
    { name: 'AI/ML Specialization', year: '2024', issuer: 'Coursera' },
    { name: 'Full-Stack Web Development', year: '2023', issuer: 'Udemy' },
  ];

  const currentData = activeTab === 'work' ? workExperience : education;

  return (
    <section 
      ref={containerRef}
      id="experience" 
      className="relative py-32 bg-black text-white overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(60deg, transparent 45%, rgba(139, 92, 246, 0.1) 50%, transparent 55%),
              linear-gradient(-60deg, transparent 45%, rgba(236, 72, 153, 0.1) 50%, transparent 55%)
            `,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-block px-4 py-2 bg-white text-black rounded-full text-sm font-bold mb-6">
            EXPERIENCE & EDUCATION
          </div>
          
          <h2 className="text-7xl md:text-9xl font-black leading-none mb-8">
            MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">JOURNEY</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mb-12">
            From freelance developer to founder - a journey of continuous learning, building, and growing.
          </p>

          {/* Tab Switcher */}
          <div className="flex gap-4 mb-12">
            <button
              onClick={() => setActiveTab('work')}
              className={`px-8 py-4 rounded-full font-bold transition-all ${
                activeTab === 'work'
                  ? 'bg-white text-black scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              💼 Work Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-8 py-4 rounded-full font-bold transition-all ${
                activeTab === 'education'
                  ? 'bg-white text-black scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              🎓 Education
            </button>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500"
            />
          </div>

          {/* Timeline Cards */}
          <div className="space-y-16">
            {currentData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'} ml-12 md:ml-0`}>
                  <div className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 rounded-3xl p-8 transition-all duration-500 hover:bg-white/10">
                    {/* Year Badge */}
                    <div className={`flex items-center gap-2 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <Calendar className="w-4 h-4 text-purple-400" />
                      <span className="text-sm font-bold text-purple-400">{item.year}</span>
                      <span className="px-2 py-1 rounded-full bg-white/10 text-xs font-medium">
                        {item.type}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl font-black mb-2">
                      {'degree' in item ? item.degree : item.role}
                    </h3>
                    <p className="text-xl text-gray-400 mb-2">
                      {'institution' in item ? item.institution : item.company}
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      {'location' in item && item.location}
                    </p>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2 mb-6">
                      {item.achievements.map((achievement, i) => (
                        <div key={i} className={`flex items-start gap-2 ${index % 2 === 0 ? 'md:justify-end md:text-right' : ''}`}>
                          <span className="text-green-400 mt-1">✓</span>
                          <span className="text-sm text-gray-400">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Hover Gradient */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity -z-10 rounded-3xl`} />
                  </div>
                </div>

                {/* Icon Circle */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-full bg-black border-4 border-purple-500 flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.5)] z-10">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 max-w-4xl mx-auto"
            >
            <div className="text-center mb-12">
                <h3 className="text-4xl font-bold mb-4">
                Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Workshops</span>
                </h3>
                <p className="text-gray-400">Continuous learning from top institutions and tech companies</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                {[
                { 
                    name: 'Workshop on Cryptocurrency and Blockchain', 
                    year: '2024',
                    issuer: 'NIT',
                    icon: '🔗',
                    color: 'from-yellow-500 to-orange-500'
                },
                { 
                    name: 'Cyber Security And Ethical Hacking Workshop', 
                    year: '2024',
                    issuer: 'IIT',
                    icon: '🔒',
                    color: 'from-red-500 to-pink-500'
                },
                { 
                    name: 'Data Analysis with R Programming', 
                    year: '2024',
                    issuer: 'Google',
                    icon: '📊',
                    color: 'from-blue-500 to-cyan-500'
                },
                { 
                    name: 'Python for Data Science, AI & Development', 
                    year: '2024',
                    issuer: 'IBM',
                    icon: '🐍',
                    color: 'from-indigo-500 to-purple-500'
                },
                { 
                    name: 'Node.js Workshop', 
                    year: '2024',
                    issuer: 'Leopard Tech Labs',
                    icon: '🟢',
                    color: 'from-green-500 to-emerald-500'
                },
                ].map((cert, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group relative overflow-hidden flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
                >
                    {/* Background Gradient on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                    
                    {/* Icon */}
                    <div className={`relative w-12 h-12 rounded-full bg-gradient-to-br ${cert.color} flex items-center justify-center flex-shrink-0 text-2xl group-hover:scale-110 transition-transform`}>
                    {cert.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 relative">
                    <p className="font-bold text-white group-hover:text-white transition-colors">
                        {cert.name}
                    </p>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        {cert.issuer} • {cert.year}
                    </p>
                    </div>

                    {/* Verified Badge */}
                    <div className="text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    ✓
                    </div>
                </motion.div>
                ))}
            </div>
            </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { value: '3+', label: 'Years Experience' },
              { value: '5', label: 'Companies Worked' },
              { value: '50+', label: 'Projects Completed' },
              { value: '30+', label: 'Happy Clients' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="text-5xl font-black mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
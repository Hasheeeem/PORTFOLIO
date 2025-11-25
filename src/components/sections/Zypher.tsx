import { motion } from 'framer-motion';
import { Rocket, Code2, Smartphone, Cloud, Palette, Zap } from 'lucide-react';

export const Zypher = () => {
  const services = [
    { icon: Code2, title: 'Web Dev', description: 'Modern web applications' },
    { icon: Smartphone, title: 'Mobile Apps', description: 'iOS & Android' },
    { icon: Rocket, title: 'AI Integration', description: 'Smart automation' },
    { icon: Cloud, title: 'Cloud Solutions', description: 'Scalable infrastructure' },
    { icon: Palette, title: 'UI/UX Design', description: 'Beautiful interfaces' },
    { icon: Zap, title: 'Performance', description: 'Lightning fast' },
  ];

  const achievements = [
    { value: '5+', label: 'Projects' },
    { value: '3+', label: 'Clients' },
    { value: '3', label: 'Countries' },
    { value: '99%', label: 'Satisfaction' },
  ];

  return (
    <section id="zypher" className="relative py-32 bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20" />
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%),
              linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Main Title - MASSIVE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-[120px] md:text-[200px] lg:text-[280px] font-black leading-none tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              ZYPHER
            </span>
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-gray-400 mt-4">
            Cutting-Edge IT Solutions
          </p>
        </motion.div>

        {/* Mission Statement - Bold */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-24"
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Transforming businesses through innovative technology.
            </h3>
            <p className="text-xl text-gray-400">
              We deliver cutting-edge solutions that drive growth, efficiency, and innovation 
              for companies ready to lead in the digital age.
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 rounded-3xl transition-all" />
              
              <service.icon className="w-12 h-12 mb-4 text-purple-400 group-hover:text-pink-400 transition-colors" />
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {achievements.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl md:text-7xl font-black mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <a
            href="#contact"
            className="inline-block px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-black text-xl hover:scale-105 transition-transform"
          >
            Start Your Project →
          </a>
        </motion.div>
      </div>
    </section>
  );
};
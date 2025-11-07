import { motion } from 'framer-motion';
import { Brain, TrendingUp, Rocket } from 'lucide-react';

export const AIJourney = () => {
  const timeline = [
    {
      year: '2023',
      title: 'Foundation',
      description: 'Started learning AI/ML fundamentals and built first models',
      status: 'completed',
    },
    {
      year: '2024',
      title: 'Deep Learning',
      description: 'Diving into neural networks and advanced architectures',
      status: 'completed',
    },
    {
      year: '2025',
      title: 'AI Integration',
      description: 'Building production AI applications and LLM projects',
      status: 'current',
    },
    {
      year: '2026',
      title: 'Mastery',
      description: 'Becoming a proficient AI/ML engineer',
      status: 'future',
    },
  ];

  const focus = [
    'Deep Learning & Neural Networks',
    'Natural Language Processing',
    'Computer Vision',
    'MLOps & Deployment',
  ];

  return (
    <section id="ai-journey" className="relative py-32 bg-white text-black overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <Brain className="w-16 h-16 text-orange-500" />
            <h2 className="text-7xl md:text-9xl font-black leading-none">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">JOURNEY</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Aspiring to become a strong AI/ML engineer, building intelligent systems that solve real-world problems.
          </p>
        </motion.div>

        {/* Current Focus */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-orange-500" />
            Current Focus
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {focus.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border-2 border-orange-200 hover:border-orange-400 transition-all"
              >
                <div className="text-3xl mb-3">🎯</div>
                <p className="font-bold text-lg">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Rocket className="w-8 h-8 text-orange-500" />
            Learning Path
          </h3>

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative flex gap-8 items-start"
              >
                {/* Year Badge */}
                <div className={`
                  flex-shrink-0 w-24 h-24 rounded-2xl flex items-center justify-center font-black text-2xl
                  ${item.status === 'completed' ? 'bg-green-500 text-white' : ''}
                  ${item.status === 'current' ? 'bg-orange-500 text-white animate-pulse' : ''}
                  ${item.status === 'future' ? 'bg-gray-300 text-gray-600' : ''}
                `}>
                  {item.year}
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all">
                  <h4 className="text-3xl font-bold mb-3">{item.title}</h4>
                  <p className="text-lg text-gray-600">{item.description}</p>
                </div>

                {/* Connector Line */}
                {i < timeline.length - 1 && (
                  <div className="absolute left-12 top-24 w-0.5 h-16 bg-gradient-to-b from-orange-300 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
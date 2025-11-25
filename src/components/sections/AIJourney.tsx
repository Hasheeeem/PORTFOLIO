import { motion } from 'framer-motion';
import { BookOpen, Code, Lightbulb, Rocket, Target } from 'lucide-react';

export const AIJourney = () => {
  const timeline = [
    {
      year: '2024',
      title: 'AI Fundamentals',
      description: 'Started learning artificial intelligence basics, exploring machine learning concepts and frameworks',
      status: 'completed',
      icon: BookOpen,
    },
    {
      year: '2025',
      title: 'Hands-On Projects',
      description: 'Building real-world AI projects, working with Python, TensorFlow, and data analysis',
      status: 'current',
      icon: Code,
    },
    {
      year: '2026',
      title: 'Advanced ML Techniques',
      description: 'Deep learning, neural networks, NLP, and computer vision specialization',
      status: 'progress',
      icon: Lightbulb,
    },
    {
      year: '2027',
      title: 'AI/ML Engineer',
      description: 'Become a proficient AI/ML engineer with production-level expertise and deployed models',
      status: 'future',
      icon: Target,
    },
  ];

  return (
    <section id="ai-journey" className="relative py-32 bg-white text-black overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-red-200 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm font-bold mb-6">
            FUTURE GOALS
          </div>

          <h2 className="text-5xl sm:text-7xl md:text-9xl font-black leading-none mb-8">
            AI/ML
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">
              ROADMAP
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl">
            My journey from AI beginner to AI/ML Engineer - learning, building, and growing.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gray-200">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '50%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="w-full bg-gradient-to-b from-orange-500 to-red-500"
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-8 sm:space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative flex gap-4 sm:gap-8 items-start"
              >
                {/* Icon Badge */}
                <div className={`
                  relative z-10 flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center font-black text-white
                  ${item.status === 'completed' ? 'bg-green-500' : ''}
                  ${item.status === 'current' ? 'bg-orange-500' : ''}
                  ${item.status === 'progress' ? 'bg-blue-500' : ''}
                  ${item.status === 'future' ? 'bg-gray-400' : ''}
                `}>
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl sm:rounded-3xl p-4 sm:p-8 hover:shadow-xl transition-all border-2 border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-black text-white text-xs sm:text-sm font-bold w-fit">
                      {item.year}
                    </span>
                    {item.status === 'current' && (
                      <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold w-fit">
                        IN PROGRESS
                      </span>
                    )}
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3">{item.title}</h4>
                  <p className="text-sm sm:text-lg text-gray-700">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-24 max-w-4xl mx-auto"
        >
          <div className="bg-black text-white rounded-2xl sm:rounded-3xl p-6 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Current Focus</h3>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                'Learning Python, TensorFlow & PyTorch',
                'Building AI/ML projects & models',
                'Understanding data science fundamentals',
                'Exploring real-world AI applications',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <span className="text-xs">✓</span>
                  </div>
                  <p className="text-sm sm:text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
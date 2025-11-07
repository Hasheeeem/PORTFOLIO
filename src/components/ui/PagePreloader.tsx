import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface PagePreloaderProps {
  isLoading: boolean;
}

export const PagePreloader = ({ isLoading }: PagePreloaderProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isLoading && count < 100) {
      const timer = setTimeout(() => {
        setCount(prev => Math.min(prev + Math.random() * 15, 100));
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isLoading, count]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
        >
          {/* Animated Background Gradient */}
          <div className="absolute inset-0">
            <motion.div
              animate={{
                background: [
                  'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
                ],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0"
            />
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center">
            {/* Animated Logo */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="mb-12"
            >
              {/* Morphing Letter H */}
              <div className="relative w-48 h-48 mx-auto">
                {/* Outer Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2"
                  style={{
                    borderColor: 'transparent',
                    borderTopColor: '#8b5cf6',
                    borderRightColor: '#ec4899',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />
                
                {/* Inner Glow */}
                <motion.div
                  className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 blur-xl"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                {/* Letter H */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="text-8xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    H
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Loading Text - Glitch Effect */}
            <motion.div
              className="mb-8 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.p
                className="text-2xl font-bold text-white"
                animate={{ 
                  textShadow: [
                    '0 0 10px rgba(139, 92, 246, 0.5)',
                    '0 0 20px rgba(236, 72, 153, 0.5)',
                    '0 0 10px rgba(139, 92, 246, 0.5)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                LOADING
              </motion.p>
            </motion.div>

            {/* Progress Number - Large */}
            <motion.div
              className="text-7xl font-black mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent tabular-nums"
              key={Math.floor(count)}
            >
              {Math.floor(count)}%
            </motion.div>

            {/* Minimal Progress Bar */}
            <div className="relative w-96 max-w-[90vw] mx-auto">
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${count}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              </div>
            </div>

            {/* Subtext */}
            <motion.p
              className="text-white/40 text-sm mt-6 font-mono"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Preparing your experience...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
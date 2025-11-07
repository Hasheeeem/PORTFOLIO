import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { GradientOrb } from '@/components/animations/GradientOrb';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/20">
      {/* Background Elements */}
      <GradientOrb 
        color="primary" 
        size="xl" 
        position={{ top: '20%', right: '10%' }} 
        blur="xl"
        opacity={0.15}
      />
      <GradientOrb 
        color="secondary" 
        size="lg" 
        position={{ bottom: '20%', left: '10%' }} 
        blur="xl"
        opacity={0.12}
      />
      <div className="absolute inset-0 noise opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Number */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-[150px] sm:text-[200px] md:text-[250px] font-bold leading-none bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              404
            </h1>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Page Not Found
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto">
              Oops! The page you're looking for seems to have wandered off into the digital void.
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-base shadow-premium hover:shadow-glow transition-all duration-300 flex items-center space-x-2"
              onClick={() => navigate('/')}
            >
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </MagneticButton>

            <MagneticButton
              className="group px-8 py-4 bg-muted hover:bg-accent text-foreground rounded-full font-semibold text-base border border-border hover:border-primary/30 transition-all duration-300 flex items-center space-x-2"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </MagneticButton>
          </motion.div>

          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
          >
            <div className="inline-block p-6 rounded-2xl bg-muted/50 border border-border">
              <p className="text-sm text-muted-foreground">
                Lost? Try searching from the{' '}
                <button
                  onClick={() => navigate('/')}
                  className="text-primary hover:underline font-medium"
                >
                  homepage
                </button>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
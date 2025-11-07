import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GradientOrbProps {
  color?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  position?: { top?: string; left?: string; right?: string; bottom?: string };
  blur?: 'sm' | 'md' | 'lg' | 'xl';
  opacity?: number;
  className?: string;
}

export const GradientOrb = ({
  color = 'primary',
  size = 'lg',
  position = { top: '20%', right: '10%' },
  blur = 'xl',
  opacity = 0.3,
  className = '',
}: GradientOrbProps) => {
  const colors = {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-600',
    secondary: 'bg-gradient-to-r from-pink-500 to-orange-500',
    accent: 'bg-gradient-to-r from-green-400 to-cyan-500',
  };

  const sizes = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64',
    xl: 'w-96 h-96',
  };

  const blurs = {
    sm: 'blur-2xl',
    md: 'blur-3xl',
    lg: 'blur-[100px]',
    xl: 'blur-[150px]',
  };

  return (
    <motion.div
      className={cn(
        'absolute rounded-full',
        colors[color],
        sizes[size],
        blurs[blur],
        className
      )}
      style={{
        ...position,
        opacity,
        pointerEvents: 'none',
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [opacity, opacity * 0.8, opacity],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};
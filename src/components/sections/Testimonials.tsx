import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { testimonials } from '@/data/testimonials';
import { cn } from '@/lib/utils';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-muted/20 to-background">
      {/* Background */}
      <div className="absolute inset-0 noise opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <ScrollReveal>
              <motion.div
                className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Testimonials
                </span>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                What{' '}
                <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  clients say
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Don't just take my word for it – hear from the amazing people I've worked with.
              </p>
            </ScrollReveal>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                  className="relative"
                >
                  <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-card to-card/50 border border-border shadow-premium">
                    {/* Quote Icon */}
                    <div className="absolute top-8 right-8 opacity-10">
                      <Quote className="w-24 h-24 text-primary" />
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>

                    {/* Content */}
                    <blockquote className="relative text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                      "{currentTestimonial.content}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-3xl shadow-lg">
                        {currentTestimonial.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-foreground text-lg">
                          {currentTestimonial.name}
                        </div>
                        <div className="text-muted-foreground text-sm">
                          {currentTestimonial.role} at {currentTestimonial.company}
                        </div>
                        {currentTestimonial.project && (
                          <div className="text-primary text-sm font-medium mt-1">
                            Project: {currentTestimonial.project}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.button
                onClick={() => paginate(-1)}
                className="p-3 rounded-full bg-muted hover:bg-accent border border-border transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              {/* Dots Indicator */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={cn(
                      'transition-all rounded-full',
                      index === currentIndex
                        ? 'w-8 h-2 bg-primary'
                        : 'w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <motion.button
                onClick={() => paginate(1)}
                className="p-3 rounded-full bg-muted hover:bg-accent border border-border transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>

          {/* Stats Summary */}
          <ScrollReveal delay={0.3}>
            <div className="grid grid-cols-3 gap-6 mt-16">
              <div className="text-center p-6 rounded-2xl bg-muted/50">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {testimonials.length}+
                </div>
                <div className="text-sm text-muted-foreground">
                  Happy Clients
                </div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-muted/50">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  5.0
                </div>
                <div className="text-sm text-muted-foreground">
                  Average Rating
                </div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-muted/50">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">
                  Satisfaction
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
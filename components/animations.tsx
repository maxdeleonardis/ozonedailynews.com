'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

// Terminal-style typewriter effect
export function TypewriterText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.05,
            delay: index * 0.03,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Matrix-style cascading code effect
export function MatrixBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none opacity-5 overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-green-500 font-mono text-xs"
          style={{
            left: `${i * 5}%`,
            top: '-100px',
          }}
          animate={{
            y: ['0vh', '110vh'],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 2,
          }}
        >
          {Array.from({ length: 50 }).map((_, j) => (
            <div key={j} className="leading-4">
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
}

// Glitch effect for headers
export function GlitchText({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{
        textShadow: [
          '0 0 0 transparent',
          '2px 0 0 #ff0000, -2px 0 0 #00ff00',
          '0 0 0 transparent',
        ],
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

// Pulse animation for strategic relevance indicators
export function PulseIndicator({ level, color }: { level: number; color?: string }) {
  return (
    <motion.div
      className="relative"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <div
        className="w-4 h-4 rounded-full"
        style={{ backgroundColor: color || '#3B82F6' }}
      />
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: color || '#3B82F6' }}
        animate={{
          scale: [1, 2.5, 1],
          opacity: [0.8, 0, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeOut',
        }}
      />
    </motion.div>
  );
}

// Sliding card animation
export function AnimatedCard({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -5,
        scale: 1.02,
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      }}
      className="transform-gpu"
    >
      {children}
    </motion.div>
  );
}

// Terminal cursor blink
export function BlinkingCursor() {
  return (
    <motion.span
      className="inline-block w-2 h-5 bg-current ml-1"
      animate={{ opacity: [1, 0] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}

// Radar sweep animation for data visualization
export function RadarSweep({ size = 100 }: { size?: number }) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <div className="absolute inset-0 rounded-full border-2 border-green-500 opacity-20" />
      <div className="absolute inset-2 rounded-full border border-green-500 opacity-30" />
      <div className="absolute inset-4 rounded-full border border-green-500 opacity-40" />
      
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div
          className="absolute top-1/2 left-1/2 origin-left h-0.5 bg-gradient-to-r from-green-400 to-transparent"
          style={{ width: size / 2, transform: 'translateY(-50%)' }}
        />
      </motion.div>
    </div>
  );
}

// Data stream animation
export function DataStream({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="flex space-x-4 mb-2 font-mono text-xs text-green-400 opacity-60"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'linear',
          }}
        >
          <span>INTEL_STREAM_{String(i).padStart(3, '0')}</span>
          <span>STATUS:ACTIVE</span>
          <span>RELEVANCE:{Math.floor(Math.random() * 10)}</span>
          <span>VERIFIED:TRUE</span>
        </motion.div>
      ))}
    </div>
  );
}

// Page transition wrapper
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}

// Stagger children animation
export function StaggerContainer({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
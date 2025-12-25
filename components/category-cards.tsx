'use client';

import { motion } from 'framer-motion';
import { 
  Cpu, 
  Zap, 
  Shield, 
  Code, 
  HardDrive, 
  Smartphone,
  ArrowRight
} from 'lucide-react';

interface CategoryCard {
  icon: React.ReactNode;
  label: string;
  gradient: string;
  href: string;
}

const categories: CategoryCard[] = [
  {
    icon: <Cpu className="w-6 h-6" />,
    label: 'AI',
    gradient: 'from-purple-100 to-blue-50',
    href: '/category/ai',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    label: 'Startups',
    gradient: 'from-green-100 to-teal-50',
    href: '/category/startups',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    label: 'Security',
    gradient: 'from-red-100 to-pink-50',
    href: '/category/security',
  },
  {
    icon: <Code className="w-6 h-6" />,
    label: 'Programming',
    gradient: 'from-blue-100 to-indigo-50',
    href: '/category/programming',
  },
  {
    icon: <HardDrive className="w-6 h-6" />,
    label: 'Hardware',
    gradient: 'from-yellow-100 to-amber-50',
    href: '/category/hardware',
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    label: 'Gadgets',
    gradient: 'from-pink-100 to-rose-50',
    href: '/category/gadgets',
  },
];

export function CategoryCards() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <motion.a
            key={category.label}
            href={category.href}
            className={`category-card bg-gradient-to-br ${category.gradient} flex flex-col items-center justify-center p-6 rounded-lg transition-all duration-200 hover:shadow-lg cursor-pointer`}
            whileHover={{ translateY: -4 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="text-gray-700 mb-3">
              {category.icon}
            </div>
            <span className="font-medium text-gray-800 text-sm text-center">
              {category.label}
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

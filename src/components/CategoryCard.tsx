import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Category } from '@/data/products';

interface CategoryCardProps {
  category: Category;
  index?: number;
}

export function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link to={`/products?category=${category.id}`}>
        <div className="category-card">
          <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${category.color} flex items-center justify-center text-3xl md:text-4xl transition-transform group-hover:scale-110`}>
            {category.icon}
          </div>
          <h3 className="font-semibold text-foreground text-center text-sm md:text-base">
            {category.name}
          </h3>
          <p className="text-xs text-muted-foreground">
            {category.productCount}+ products
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      description: `₹${product.price} × 1`,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link to={`/product/${product.id}`}>
        <div className="product-card h-full flex flex-col">
          {/* Image Section */}
          <div className="relative aspect-square bg-secondary/30 p-4 flex items-center justify-center">
            {product.discount > 0 && (
              <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground font-bold">
                {product.discount}% OFF
              </Badge>
            )}
            {product.requiresPrescription && (
              <Badge className="absolute top-3 right-3 bg-info text-info-foreground text-xs">
                Rx Required
              </Badge>
            )}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl bg-primary/10 flex items-center justify-center text-4xl">
              {product.category === 'medicines' && '💊'}
              {product.category === 'healthcare' && '🏥'}
              {product.category === 'personal-care' && '🧴'}
              {product.category === 'devices' && '🩺'}
              {product.category === 'nutrition' && '🥗'}
              {product.category === 'baby-care' && '👶'}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-4 flex-1 flex flex-col">
            <div className="flex-1">
              <p className="text-xs text-primary font-medium mb-1">{product.brand}</p>
              <h3 className="font-semibold text-foreground line-clamp-2 mb-2 text-sm md:text-base">
                {product.name}
              </h3>
              <p className="text-xs text-muted-foreground mb-2">{product.packSize}</p>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                <Star className="w-4 h-4 fill-warning text-warning" />
                <span className="text-sm font-medium">{product.rating}</span>
                <span className="text-xs text-muted-foreground">
                  ({product.reviews.toLocaleString()})
                </span>
              </div>
            </div>

            {/* Price Section */}
            <div className="mt-auto">
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-lg font-bold text-foreground">₹{product.price}</span>
                {product.discount > 0 && (
                  <span className="text-sm text-muted-foreground line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
              </div>

              <Button
                onClick={handleAddToCart}
                className="w-full rounded-full gap-2"
                size="sm"
                disabled={!product.inStock}
              >
                <ShoppingCart className="w-4 h-4" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

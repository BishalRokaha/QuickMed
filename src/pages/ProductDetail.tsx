import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Star, 
  Shield, 
  Truck, 
  RotateCcw, 
  Plus, 
  Minus,
  AlertTriangle,
  CheckCircle,
  Info
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/ProductCard';
import { getProductById, products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';
import { useState } from 'react';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Product Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/products">
            <Button>Browse Products</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${product.name} added to cart!`, {
      description: `₹${product.price} × ${quantity}`,
    });
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/products" className="text-muted-foreground hover:text-primary">Products</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium line-clamp-1">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Product Details */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square bg-secondary/30 rounded-3xl flex items-center justify-center p-8 sticky top-32">
              {product.discount > 0 && (
                <Badge className="absolute top-6 left-6 bg-accent text-accent-foreground font-bold text-lg px-4 py-1">
                  {product.discount}% OFF
                </Badge>
              )}
              {product.requiresPrescription && (
                <Badge className="absolute top-6 right-6 bg-info text-info-foreground">
                  Prescription Required
                </Badge>
              )}
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl bg-primary/10 flex items-center justify-center text-7xl md:text-8xl">
                {product.category === 'medicines' && '💊'}
                {product.category === 'healthcare' && '🏥'}
                {product.category === 'personal-care' && '🧴'}
                {product.category === 'devices' && '🩺'}
                {product.category === 'nutrition' && '🥗'}
                {product.category === 'baby-care' && '👶'}
              </div>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <p className="text-primary font-semibold mb-2">{product.brand}</p>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                {product.name}
              </h1>
              {product.genericName && (
                <p className="text-muted-foreground">
                  Generic: {product.genericName}
                </p>
              )}
              <p className="text-muted-foreground mt-1">{product.packSize}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1.5 rounded-full">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-semibold">{product.rating}</span>
              </div>
              <span className="text-muted-foreground">
                {product.reviews.toLocaleString()} ratings & reviews
              </span>
            </div>

            {/* Price */}
            <div className="bg-secondary/50 rounded-2xl p-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-3xl md:text-4xl font-bold text-foreground">
                  ₹{product.price}
                </span>
                {product.discount > 0 && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">
                      ₹{product.originalPrice}
                    </span>
                    <span className="text-primary font-semibold">
                      Save ₹{product.originalPrice - product.price}
                    </span>
                  </>
                )}
              </div>
              <p className="text-sm text-muted-foreground">Inclusive of all taxes</p>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="p-4 hover:bg-secondary transition-colors"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="px-6 font-semibold text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="p-4 hover:bg-secondary transition-colors"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              <Button
                size="lg"
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 rounded-xl gap-2 py-6"
              >
                <ShoppingCart className="w-5 h-5" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center p-4 bg-card rounded-xl border border-border">
                <Shield className="w-6 h-6 text-primary mb-2" />
                <span className="text-xs font-medium">100% Genuine</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-card rounded-xl border border-border">
                <Truck className="w-6 h-6 text-primary mb-2" />
                <span className="text-xs font-medium">Free Delivery</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-card rounded-xl border border-border">
                <RotateCcw className="w-6 h-6 text-primary mb-2" />
                <span className="text-xs font-medium">Easy Returns</span>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl border border-primary/20">
              <Truck className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">Delivery by Tomorrow</p>
                <p className="text-sm text-muted-foreground">Order within 2 hrs 30 mins</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent p-0 mb-6">
              <TabsTrigger 
                value="description"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
              >
                Description
              </TabsTrigger>
              <TabsTrigger 
                value="uses"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
              >
                Uses & Benefits
              </TabsTrigger>
              {product.sideEffects && (
                <TabsTrigger 
                  value="safety"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
                >
                  Safety Information
                </TabsTrigger>
              )}
            </TabsList>

            <TabsContent value="description" className="mt-0">
              <div className="bg-card rounded-2xl p-6 border border-border">
                <p className="text-foreground leading-relaxed mb-4">{product.description}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground">Brand:</span>
                    <span className="font-medium">{product.brand}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground">Manufacturer:</span>
                    <span className="font-medium">{product.manufacturer}</span>
                  </div>
                  {product.dosage && (
                    <div className="flex items-center gap-3">
                      <span className="text-muted-foreground">Dosage:</span>
                      <span className="font-medium">{product.dosage}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground">Pack Size:</span>
                    <span className="font-medium">{product.packSize}</span>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="uses" className="mt-0">
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Key Uses & Benefits
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {product.uses.map((use, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>{use}</span>
                    </li>
                  ))}
                </ul>

                {product.directions && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Info className="w-5 h-5 text-info" />
                      Directions for Use
                    </h3>
                    <p className="text-muted-foreground">{product.directions}</p>
                  </div>
                )}
              </div>
            </TabsContent>

            {product.sideEffects && (
              <TabsContent value="safety" className="mt-0">
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-warning" />
                    Possible Side Effects
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {product.sideEffects.map((effect, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-warning" />
                        <span>{effect}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-warning/10 border border-warning/20 rounded-xl p-4">
                    <p className="text-sm text-foreground">
                      <strong>Disclaimer:</strong> The information provided is for educational purposes only. 
                      Please consult your doctor before taking any medication.
                    </p>
                  </div>
                </div>
              </TabsContent>
            )}
          </Tabs>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">Related Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
}

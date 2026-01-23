import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Layout } from '@/components/layout/Layout';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import { toast } from 'sonner';

export default function Cart() {
  const { items, updateQuantity, removeFromCart, totalPrice, totalDiscount } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [couponDiscount, setCouponDiscount] = useState(0);

  const deliveryFee = totalPrice >= 499 ? 0 : 49;
  const finalTotal = totalPrice + deliveryFee - couponDiscount;

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === 'FIRST25') {
      const discount = Math.round(totalPrice * 0.25);
      setCouponDiscount(discount);
      setAppliedCoupon('FIRST25');
      toast.success('Coupon applied successfully!', {
        description: `You saved ₹${discount}`,
      });
    } else if (couponCode.toUpperCase() === 'FLAT100') {
      setCouponDiscount(100);
      setAppliedCoupon('FLAT100');
      toast.success('Coupon applied successfully!', {
        description: 'You saved ₹100',
      });
    } else {
      toast.error('Invalid coupon code');
    }
    setCouponCode('');
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponDiscount(0);
    toast.info('Coupon removed');
  };

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-md mx-auto"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
              <ShoppingBag className="w-12 h-12 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any products yet. Start shopping to fill your cart!
            </p>
            <Link to="/products">
              <Button size="lg" className="rounded-full gap-2">
                Start Shopping
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">Shopping Cart</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Shopping Cart ({items.length} {items.length === 1 ? 'item' : 'items'})
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={item.product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border p-4 md:p-6"
              >
                <div className="flex gap-4">
                  {/* Product Image */}
                  <Link to={`/product/${item.product.id}`} className="flex-shrink-0">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-secondary/50 flex items-center justify-center text-3xl md:text-4xl">
                      {item.product.category === 'medicines' && '💊'}
                      {item.product.category === 'healthcare' && '🏥'}
                      {item.product.category === 'personal-care' && '🧴'}
                      {item.product.category === 'devices' && '🩺'}
                      {item.product.category === 'nutrition' && '🥗'}
                      {item.product.category === 'baby-care' && '👶'}
                    </div>
                  </Link>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${item.product.id}`}>
                      <h3 className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-2">
                        {item.product.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground mt-1">{item.product.brand}</p>
                    <p className="text-xs text-muted-foreground">{item.product.packSize}</p>

                    <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-border rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-2 hover:bg-secondary transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-2 hover:bg-secondary transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <p className="font-bold text-foreground">
                            ₹{item.product.price * item.quantity}
                          </p>
                          {item.product.discount > 0 && (
                            <p className="text-sm text-muted-foreground line-through">
                              ₹{item.product.originalPrice * item.quantity}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl border border-border p-6 sticky top-32">
              <h2 className="font-bold text-lg text-foreground mb-6">Order Summary</h2>

              {/* Coupon */}
              {!appliedCoupon ? (
                <div className="mb-6">
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="Enter coupon code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <Button variant="outline" onClick={handleApplyCoupon}>
                      Apply
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Try: FIRST25 or FLAT100
                  </p>
                </div>
              ) : (
                <div className="mb-6 bg-primary/10 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-primary" />
                    <span className="font-medium text-primary">{appliedCoupon}</span>
                  </div>
                  <button onClick={removeCoupon} className="text-sm text-muted-foreground hover:text-destructive">
                    Remove
                  </button>
                </div>
              )}

              {/* Price Breakdown */}
              <div className="space-y-4 border-b border-border pb-6 mb-6">
                <div className="flex justify-between text-foreground">
                  <span>Subtotal</span>
                  <span>₹{totalPrice + totalDiscount}</span>
                </div>
                {totalDiscount > 0 && (
                  <div className="flex justify-between text-primary">
                    <span>Product Discount</span>
                    <span>-₹{totalDiscount}</span>
                  </div>
                )}
                {couponDiscount > 0 && (
                  <div className="flex justify-between text-primary">
                    <span>Coupon Discount</span>
                    <span>-₹{couponDiscount}</span>
                  </div>
                )}
                <div className="flex justify-between text-foreground">
                  <span>Delivery Fee</span>
                  <span className={deliveryFee === 0 ? 'text-primary' : ''}>
                    {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                  </span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center mb-6">
                <span className="font-bold text-lg text-foreground">Total</span>
                <span className="font-bold text-2xl text-foreground">₹{finalTotal}</span>
              </div>

              {totalDiscount + couponDiscount > 0 && (
                <div className="bg-primary/10 rounded-xl p-4 mb-6 text-center">
                  <p className="text-primary font-semibold">
                    🎉 You're saving ₹{totalDiscount + couponDiscount} on this order!
                  </p>
                </div>
              )}

              <Link to="/checkout">
                <Button className="w-full rounded-xl py-6 gap-2">
                  Proceed to Checkout
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Free delivery on orders above ₹499
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

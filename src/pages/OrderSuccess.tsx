import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Package, ArrowRight, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

export default function OrderSuccess() {
  const orderId = `QM${Date.now().toString().slice(-8)}`;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-24 h-24 mx-auto mb-8 rounded-full bg-primary/10 flex items-center justify-center"
          >
            <CheckCircle className="w-12 h-12 text-primary" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl font-bold text-foreground mb-2"
          >
            Order Placed Successfully!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground mb-8"
          >
            Thank you for your order. We'll send you a confirmation email with order details.
          </motion.p>

          {/* Order ID */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-secondary/50 rounded-2xl p-6 mb-8"
          >
            <p className="text-sm text-muted-foreground mb-1">Order ID</p>
            <p className="text-xl font-bold text-foreground">{orderId}</p>
          </motion.div>

          {/* Delivery Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-card rounded-2xl border border-border p-6 mb-8"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Package className="w-6 h-6 text-primary" />
              <span className="font-semibold text-foreground">Expected Delivery</span>
            </div>
            <p className="text-lg font-bold text-foreground">Within 2-3 Business Days</p>
            <p className="text-sm text-muted-foreground mt-1">
              You'll receive SMS updates on your order status
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/orders">
              <Button variant="outline" className="rounded-full gap-2 w-full sm:w-auto">
                <Package className="w-4 h-4" />
                Track Order
              </Button>
            </Link>
            <Link to="/">
              <Button className="rounded-full gap-2 w-full sm:w-auto">
                <Home className="w-4 h-4" />
                Continue Shopping
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
}

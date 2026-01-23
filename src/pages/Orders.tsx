import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Package, Truck, CheckCircle, Clock, ChevronRight, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

// Mock orders data
const orders = [
  {
    id: 'QM12345678',
    date: '2026-01-20',
    status: 'delivered',
    total: 549,
    items: [
      { name: 'Paracetamol 500mg', quantity: 2, price: 35 },
      { name: 'Vitamin D3 1000IU', quantity: 1, price: 299 },
    ],
  },
  {
    id: 'QM12345679',
    date: '2026-01-19',
    status: 'shipped',
    total: 1499,
    items: [
      { name: 'Blood Pressure Monitor', quantity: 1, price: 1499 },
    ],
  },
  {
    id: 'QM12345680',
    date: '2026-01-18',
    status: 'processing',
    total: 249,
    items: [
      { name: 'Digital Thermometer', quantity: 1, price: 249 },
    ],
  },
];

const statusConfig = {
  processing: { icon: Clock, color: 'text-warning', bg: 'bg-warning/10', label: 'Processing' },
  shipped: { icon: Truck, color: 'text-info', bg: 'bg-info/10', label: 'Shipped' },
  delivered: { icon: CheckCircle, color: 'text-primary', bg: 'bg-primary/10', label: 'Delivered' },
};

export default function Orders() {
  if (orders.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
              <ShoppingBag className="w-12 h-12 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">No Orders Yet</h1>
            <p className="text-muted-foreground mb-8">
              Start shopping to see your orders here.
            </p>
            <Link to="/products">
              <Button className="rounded-full">Start Shopping</Button>
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
            <span className="text-foreground font-medium">My Orders</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">My Orders</h1>

        <div className="space-y-4">
          {orders.map((order, index) => {
            const status = statusConfig[order.status as keyof typeof statusConfig];
            const StatusIcon = status.icon;

            return (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border overflow-hidden"
              >
                {/* Order Header */}
                <div className="p-4 md:p-6 border-b border-border flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full ${status.bg} flex items-center justify-center`}>
                      <StatusIcon className={`w-5 h-5 ${status.color}`} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Order #{order.id}</p>
                      <p className="text-sm text-muted-foreground">
                        Placed on {new Date(order.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                  <div className={`px-4 py-1.5 rounded-full text-sm font-medium ${status.bg} ${status.color}`}>
                    {status.label}
                  </div>
                </div>

                {/* Order Items */}
                <div className="p-4 md:p-6">
                  <div className="space-y-3">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center text-xl">
                            💊
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{item.name}</p>
                            <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                          </div>
                        </div>
                        <p className="font-medium">₹{item.price * item.quantity}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Amount</p>
                      <p className="text-xl font-bold text-foreground">₹{order.total}</p>
                    </div>
                    <Button variant="outline" className="rounded-full gap-2">
                      View Details
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

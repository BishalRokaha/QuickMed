import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Heart, Truck, Users, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

const values = [
  {
    icon: Shield,
    title: '100% Genuine Products',
    description: 'All our products are sourced directly from authorized distributors and manufacturers.',
  },
  {
    icon: Heart,
    title: 'Customer First',
    description: 'Your health and satisfaction are our top priorities. We go the extra mile for you.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Quick and reliable delivery to your doorstep, because your health cant wait.',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Our team of licensed pharmacists is available 24/7 to assist you with queries.',
  },
];

const stats = [
  { value: '5M+', label: 'Happy Customers' },
  { value: '10K+', label: 'Products' },
  { value: '500+', label: 'Cities Served' },
  { value: '24/7', label: 'Customer Support' },
];

const team = [
  { name: 'Dr. Priya Sharma', role: 'Chief Medical Officer', avatar: 'PS' },
  { name: 'Rahul Verma', role: 'CEO & Co-Founder', avatar: 'RV' },
  { name: 'Anjali Patel', role: 'Head of Operations', avatar: 'AP' },
  { name: 'Vikram Singh', role: 'Chief Technology Officer', avatar: 'VS' },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center text-primary-foreground"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Making Healthcare Accessible for Everyone
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              QuickMed is on a mission to simplify healthcare delivery and make quality medicines accessible to all.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  QuickMed was founded in 2020 with a simple yet powerful vision: to make healthcare 
                  accessible to everyone, everywhere. We started as a small team of healthcare enthusiasts 
                  who believed that getting medicines shouldn't be a hassle.
                </p>
                <p>
                  Today, we've grown into one of the leading online pharmacy platforms, serving millions 
                  of customers across 500+ cities. Our journey has been driven by our commitment to 
                  quality, affordability, and customer satisfaction.
                </p>
                <p>
                  We work directly with manufacturers and authorized distributors to ensure every product 
                  is genuine and safely delivered to your doorstep. Our team of licensed pharmacists 
                  reviews every prescription order to ensure your safety.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-[150px]">🏥</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do at QuickMed
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 text-center border border-border"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Leadership Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the passionate people behind QuickMed
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 text-center border border-border"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                  {member.avatar}
                </div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Ready to Experience QuickMed?
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
            Join millions of customers who trust QuickMed for their healthcare needs.
          </p>
          <Link to="/products">
            <Button size="lg" variant="secondary" className="rounded-full">
              Start Shopping
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

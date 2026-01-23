import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  CreditCard, 
  Truck, 
  Shield, 
  ChevronRight,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Layout } from '@/components/layout/Layout';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

export default function Checkout() {
  const { items, totalPrice, totalDiscount, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const [address, setAddress] = useState({
    fullName: '',
    phone: '',
    pincode: '',
    address: '',
    city: '',
    state: '',
  });

  const [deliveryOption, setDeliveryOption] = useState('standard');
  const [paymentMethod, setPaymentMethod] = useState('cod');

  const deliveryFee = totalPrice >= 499 ? 0 : 49;
  const expressDeliveryFee = deliveryOption === 'express' ? 49 : 0;
  const finalTotal = totalPrice + deliveryFee + expressDeliveryFee;

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.values(address).some(v => !v)) {
      toast.error('Please fill all address fields');
      return;
    }
    setStep(2);
  };

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      clearCart();
      navigate('/order-success');
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Your cart is empty</h1>
          <Link to="/products">
            <Button>Continue Shopping</Button>
          </Link>
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
            <Link to="/cart" className="text-muted-foreground hover:text-primary">Cart</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">Checkout</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          {['Address', 'Delivery', 'Payment'].map((label, index) => (
            <div key={label} className="flex items-center">
              <div className={`flex items-center gap-2 ${index + 1 <= step ? 'text-primary' : 'text-muted-foreground'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                  index + 1 < step 
                    ? 'bg-primary text-primary-foreground' 
                    : index + 1 === step 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary text-muted-foreground'
                }`}>
                  {index + 1 < step ? <CheckCircle className="w-5 h-5" /> : index + 1}
                </div>
                <span className="font-medium hidden sm:block">{label}</span>
              </div>
              {index < 2 && (
                <div className={`w-12 sm:w-24 h-0.5 mx-2 ${index + 1 < step ? 'bg-primary' : 'bg-border'}`} />
              )}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Step 1: Address */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-card rounded-2xl border border-border p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h2 className="text-xl font-bold text-foreground">Delivery Address</h2>
                </div>

                <form onSubmit={handleAddressSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        value={address.fullName}
                        onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                        placeholder="Enter your full name"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={address.phone}
                        onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                        placeholder="Enter phone number"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={address.address}
                      onChange={(e) => setAddress({ ...address, address: e.target.value })}
                      placeholder="House no., Building, Street, Area"
                      className="mt-1"
                    />
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="pincode">Pincode</Label>
                      <Input
                        id="pincode"
                        value={address.pincode}
                        onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                        placeholder="6 digit pincode"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={address.city}
                        onChange={(e) => setAddress({ ...address, city: e.target.value })}
                        placeholder="City"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        value={address.state}
                        onChange={(e) => setAddress({ ...address, state: e.target.value })}
                        placeholder="State"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full sm:w-auto mt-6 rounded-xl gap-2">
                    Continue to Delivery
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </form>
              </motion.div>
            )}

            {/* Step 2: Delivery Options */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-card rounded-2xl border border-border p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Truck className="w-6 h-6 text-primary" />
                  <h2 className="text-xl font-bold text-foreground">Delivery Options</h2>
                </div>

                {/* Address Summary */}
                <div className="bg-secondary/50 rounded-xl p-4 mb-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{address.fullName}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {address.address}, {address.city}, {address.state} - {address.pincode}
                      </p>
                      <p className="text-sm text-muted-foreground">{address.phone}</p>
                    </div>
                    <button
                      onClick={() => setStep(1)}
                      className="text-primary text-sm font-medium hover:underline"
                    >
                      Change
                    </button>
                  </div>
                </div>

                <RadioGroup value={deliveryOption} onValueChange={setDeliveryOption} className="space-y-4">
                  <label className="flex items-center gap-4 p-4 border border-border rounded-xl cursor-pointer hover:border-primary transition-colors">
                    <RadioGroupItem value="standard" id="standard" />
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">Standard Delivery</p>
                      <p className="text-sm text-muted-foreground">Delivery in 2-3 days</p>
                    </div>
                    <span className="font-semibold text-primary">
                      {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                    </span>
                  </label>

                  <label className="flex items-center gap-4 p-4 border border-border rounded-xl cursor-pointer hover:border-primary transition-colors">
                    <RadioGroupItem value="express" id="express" />
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">Express Delivery</p>
                      <p className="text-sm text-muted-foreground">Delivery by Tomorrow</p>
                    </div>
                    <span className="font-semibold text-foreground">₹49</span>
                  </label>
                </RadioGroup>

                <div className="flex gap-3 mt-6">
                  <Button variant="outline" onClick={() => setStep(1)} className="rounded-xl">
                    Back
                  </Button>
                  <Button onClick={() => setStep(3)} className="rounded-xl gap-2">
                    Continue to Payment
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Payment */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-card rounded-2xl border border-border p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <CreditCard className="w-6 h-6 text-primary" />
                  <h2 className="text-xl font-bold text-foreground">Payment Method</h2>
                </div>

                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                  <label className="flex items-center gap-4 p-4 border border-border rounded-xl cursor-pointer hover:border-primary transition-colors">
                    <RadioGroupItem value="cod" id="cod" />
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">Cash on Delivery</p>
                      <p className="text-sm text-muted-foreground">Pay when you receive</p>
                    </div>
                  </label>

                  <label className="flex items-center gap-4 p-4 border border-border rounded-xl cursor-pointer hover:border-primary transition-colors">
                    <RadioGroupItem value="upi" id="upi" />
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">UPI</p>
                      <p className="text-sm text-muted-foreground">Pay with any UPI app</p>
                    </div>
                  </label>

                  <label className="flex items-center gap-4 p-4 border border-border rounded-xl cursor-pointer hover:border-primary transition-colors">
                    <RadioGroupItem value="card" id="card" />
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">Credit/Debit Card</p>
                      <p className="text-sm text-muted-foreground">All major cards accepted</p>
                    </div>
                  </label>
                </RadioGroup>

                <div className="flex gap-3 mt-6">
                  <Button variant="outline" onClick={() => setStep(2)} className="rounded-xl">
                    Back
                  </Button>
                  <Button
                    onClick={handlePlaceOrder}
                    disabled={isProcessing}
                    className="rounded-xl gap-2 flex-1"
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Shield className="w-5 h-5" />
                        Place Order • ₹{finalTotal}
                      </>
                    )}
                  </Button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl border border-border p-6 sticky top-32">
              <h2 className="font-bold text-lg text-foreground mb-6">Order Summary</h2>

              {/* Items */}
              <div className="space-y-4 max-h-64 overflow-y-auto scrollbar-thin mb-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-3">
                    <div className="w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center text-xl">
                      {item.product.category === 'medicines' && '💊'}
                      {item.product.category === 'healthcare' && '🏥'}
                      {item.product.category === 'personal-care' && '🧴'}
                      {item.product.category === 'devices' && '🩺'}
                      {item.product.category === 'nutrition' && '🥗'}
                      {item.product.category === 'baby-care' && '👶'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground line-clamp-1">
                        {item.product.name}
                      </p>
                      <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-medium text-sm">₹{item.product.price * item.quantity}</p>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 border-t border-border pt-4 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>₹{totalPrice + totalDiscount}</span>
                </div>
                {totalDiscount > 0 && (
                  <div className="flex justify-between text-sm text-primary">
                    <span>Discount</span>
                    <span>-₹{totalDiscount}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Delivery</span>
                  <span className={deliveryFee === 0 ? 'text-primary' : ''}>
                    {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                  </span>
                </div>
                {expressDeliveryFee > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Express Delivery</span>
                    <span>₹{expressDeliveryFee}</span>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-border">
                <span className="font-bold text-foreground">Total</span>
                <span className="font-bold text-xl text-foreground">₹{finalTotal}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

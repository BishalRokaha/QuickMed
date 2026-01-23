// Mock product data for QuickMed
export interface Product {
  id: string;
  name: string;
  genericName?: string;
  brand: string;
  category: string;
  subcategory?: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  description: string;
  dosage?: string;
  packSize: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  requiresPrescription: boolean;
  manufacturer: string;
  uses: string[];
  sideEffects?: string[];
  directions?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  productCount: number;
}

export const categories: Category[] = [
  { id: "medicines", name: "Medicines", icon: "💊", color: "bg-primary/10 text-primary", productCount: 1250 },
  { id: "healthcare", name: "Healthcare", icon: "🏥", color: "bg-healthcare/10 text-healthcare", productCount: 890 },
  { id: "personal-care", name: "Personal Care", icon: "🧴", color: "bg-info/10 text-info", productCount: 650 },
  { id: "devices", name: "Medical Devices", icon: "🩺", color: "bg-accent/10 text-accent", productCount: 320 },
  { id: "nutrition", name: "Nutrition & Wellness", icon: "🥗", color: "bg-wellness/10 text-wellness", productCount: 780 },
  { id: "baby-care", name: "Baby Care", icon: "👶", color: "bg-warning/10 text-warning", productCount: 450 },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Paracetamol 500mg",
    genericName: "Acetaminophen",
    brand: "MedRelief",
    category: "medicines",
    subcategory: "Pain Relief",
    price: 35,
    originalPrice: 50,
    discount: 30,
    image: "/placeholder.svg",
    description: "Effective pain reliever and fever reducer. Provides fast relief from headaches, body aches, and reduces high temperature.",
    dosage: "500mg",
    packSize: "Strip of 15 tablets",
    rating: 4.5,
    reviews: 2847,
    inStock: true,
    requiresPrescription: false,
    manufacturer: "MedRelief Pharma Ltd.",
    uses: ["Headache", "Body pain", "Fever", "Cold symptoms"],
    sideEffects: ["Nausea", "Allergic reactions (rare)"],
    directions: "Take 1-2 tablets every 4-6 hours as needed. Do not exceed 8 tablets in 24 hours."
  },
  {
    id: "2",
    name: "Vitamin D3 1000IU",
    brand: "SunVit",
    category: "nutrition",
    subcategory: "Vitamins",
    price: 299,
    originalPrice: 399,
    discount: 25,
    image: "/placeholder.svg",
    description: "High-quality Vitamin D3 supplement for bone health and immune support. Essential for calcium absorption.",
    packSize: "Bottle of 60 softgels",
    rating: 4.7,
    reviews: 1523,
    inStock: true,
    requiresPrescription: false,
    manufacturer: "SunVit Nutraceuticals",
    uses: ["Bone health", "Immune support", "Calcium absorption", "Muscle function"],
    directions: "Take 1 softgel daily with a meal or as directed by physician."
  },
  {
    id: "3",
    name: "Blood Pressure Monitor",
    brand: "HealthTrack",
    category: "devices",
    subcategory: "Monitoring Devices",
    price: 1499,
    originalPrice: 2199,
    discount: 32,
    image: "/placeholder.svg",
    description: "Digital automatic blood pressure monitor with large LCD display. Memory function stores up to 120 readings.",
    packSize: "1 Unit",
    rating: 4.4,
    reviews: 892,
    inStock: true,
    requiresPrescription: false,
    manufacturer: "HealthTrack Medical",
    uses: ["Blood pressure monitoring", "Heart rate monitoring", "Health tracking"]
  },
  {
    id: "4",
    name: "Antiseptic Hand Sanitizer",
    brand: "CleanGuard",
    category: "personal-care",
    subcategory: "Hygiene",
    price: 149,
    originalPrice: 199,
    discount: 25,
    image: "/placeholder.svg",
    description: "70% alcohol-based hand sanitizer that kills 99.9% of germs. Quick-drying, non-sticky formula with moisturizing agents.",
    packSize: "500ml Pump Bottle",
    rating: 4.6,
    reviews: 3241,
    inStock: true,
    requiresPrescription: false,
    manufacturer: "CleanGuard Hygiene Products",
    uses: ["Hand hygiene", "Germ protection", "On-the-go sanitization"]
  },
  {
    id: "5",
    name: "Omega-3 Fish Oil",
    brand: "OceanPure",
    category: "nutrition",
    subcategory: "Supplements",
    price: 549,
    originalPrice: 699,
    discount: 21,
    image: "/placeholder.svg",
    description: "Premium quality fish oil supplement rich in EPA and DHA. Supports heart, brain, and joint health.",
    packSize: "Bottle of 90 softgels",
    rating: 4.8,
    reviews: 1876,
    inStock: true,
    requiresPrescription: false,
    manufacturer: "OceanPure Nutrition",
    uses: ["Heart health", "Brain function", "Joint support", "Eye health"]
  },
  {
    id: "6",
    name: "Digital Thermometer",
    brand: "TempCheck",
    category: "devices",
    subcategory: "Monitoring Devices",
    price: 249,
    originalPrice: 349,
    discount: 29,
    image: "/placeholder.svg",
    description: "Fast and accurate digital thermometer with flexible tip. Fever alert and memory recall function.",
    packSize: "1 Unit",
    rating: 4.3,
    reviews: 2156,
    inStock: true,
    requiresPrescription: false,
    manufacturer: "TempCheck Medical Devices",
    uses: ["Temperature measurement", "Fever detection", "Health monitoring"]
  },
  {
    id: "7",
    name: "Multivitamin for Men",
    brand: "VitaMax",
    category: "nutrition",
    subcategory: "Vitamins",
    price: 399,
    originalPrice: 499,
    discount: 20,
    image: "/placeholder.svg",
    description: "Complete multivitamin formula designed for men's health. Contains essential vitamins, minerals, and antioxidants.",
    packSize: "Bottle of 60 tablets",
    rating: 4.5,
    reviews: 1234,
    inStock: true,
    requiresPrescription: false,
    manufacturer: "VitaMax Health",
    uses: ["Energy boost", "Immune support", "Overall wellness", "Active lifestyle support"]
  },
  {
    id: "8",
    name: "Azithromycin 500mg",
    genericName: "Azithromycin",
    brand: "AzithroPlus",
    category: "medicines",
    subcategory: "Antibiotics",
    price: 189,
    originalPrice: 250,
    discount: 24,
    image: "/placeholder.svg",
    description: "Broad-spectrum antibiotic for bacterial infections. Prescription required.",
    dosage: "500mg",
    packSize: "Strip of 3 tablets",
    rating: 4.6,
    reviews: 987,
    inStock: true,
    requiresPrescription: true,
    manufacturer: "AzithroPlus Pharmaceuticals",
    uses: ["Respiratory infections", "Skin infections", "Ear infections"],
    sideEffects: ["Nausea", "Diarrhea", "Stomach pain"],
    directions: "Take as directed by your physician. Complete the full course."
  },
  {
    id: "9",
    name: "Baby Diapers (Large)",
    brand: "TenderCare",
    category: "baby-care",
    subcategory: "Diapers",
    price: 699,
    originalPrice: 899,
    discount: 22,
    image: "/placeholder.svg",
    description: "Ultra-soft, highly absorbent diapers with wetness indicator. Gentle on baby's skin.",
    packSize: "Pack of 50 diapers",
    rating: 4.7,
    reviews: 3456,
    inStock: true,
    requiresPrescription: false,
    manufacturer: "TenderCare Baby Products",
    uses: ["Baby hygiene", "Overnight protection", "Leak protection"]
  },
  {
    id: "10",
    name: "Moisturizing Face Cream",
    brand: "DermaCare",
    category: "personal-care",
    subcategory: "Skincare",
    price: 349,
    originalPrice: 449,
    discount: 22,
    image: "/placeholder.svg",
    description: "Hydrating face cream with hyaluronic acid and vitamin E. Suitable for all skin types.",
    packSize: "50g Jar",
    rating: 4.4,
    reviews: 1567,
    inStock: true,
    requiresPrescription: false,
    manufacturer: "DermaCare Skincare",
    uses: ["Deep hydration", "Anti-aging", "Skin nourishment"]
  },
  {
    id: "11",
    name: "Cetirizine 10mg",
    genericName: "Cetirizine",
    brand: "AllerFree",
    category: "medicines",
    subcategory: "Allergy",
    price: 65,
    originalPrice: 85,
    discount: 24,
    image: "/placeholder.svg",
    description: "Non-drowsy antihistamine for allergy relief. Provides 24-hour relief from allergic symptoms.",
    dosage: "10mg",
    packSize: "Strip of 10 tablets",
    rating: 4.5,
    reviews: 2341,
    inStock: true,
    requiresPrescription: false,
    manufacturer: "AllerFree Pharma",
    uses: ["Allergic rhinitis", "Hay fever", "Itchy eyes", "Skin allergies"],
    sideEffects: ["Drowsiness (mild)", "Dry mouth"],
    directions: "Take 1 tablet once daily. May be taken with or without food."
  },
  {
    id: "12",
    name: "Pulse Oximeter",
    brand: "VitalSign",
    category: "devices",
    subcategory: "Monitoring Devices",
    price: 899,
    originalPrice: 1299,
    discount: 31,
    image: "/placeholder.svg",
    description: "Fingertip pulse oximeter for measuring blood oxygen levels and pulse rate. OLED display.",
    packSize: "1 Unit",
    rating: 4.6,
    reviews: 1789,
    inStock: true,
    requiresPrescription: false,
    manufacturer: "VitalSign Medical",
    uses: ["SpO2 monitoring", "Pulse rate measurement", "Health tracking"]
  },
];

export const trendingProducts = products.slice(0, 8);

export const offers = [
  {
    id: "1",
    title: "Flat 25% OFF",
    subtitle: "on first order",
    code: "FIRST25",
    bgColor: "bg-primary",
    validTill: "31 Jan 2026"
  },
  {
    id: "2",
    title: "Up to 50% OFF",
    subtitle: "on health devices",
    code: "DEVICE50",
    bgColor: "bg-info",
    validTill: "28 Jan 2026"
  },
  {
    id: "3",
    title: "Buy 2 Get 1 FREE",
    subtitle: "on vitamins",
    code: "VITA3",
    bgColor: "bg-wellness",
    validTill: "15 Feb 2026"
  },
];

export const testimonials = [
  {
    id: "1",
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    comment: "QuickMed has been a lifesaver! The delivery is always on time and the products are genuine. Highly recommended!",
    avatar: "PS"
  },
  {
    id: "2",
    name: "Rahul Verma",
    location: "Delhi",
    rating: 5,
    comment: "Best prices on medicines and the prescription upload feature makes it so convenient. Great customer service too!",
    avatar: "RV"
  },
  {
    id: "3",
    name: "Anjali Patel",
    location: "Bangalore",
    rating: 4,
    comment: "Love the app! Easy to find what I need and the discounts are amazing. My go-to pharmacy now.",
    avatar: "AP"
  },
];

export const brands = [
  "MedRelief", "SunVit", "HealthTrack", "CleanGuard", "OceanPure", 
  "TempCheck", "VitaMax", "DermaCare", "AllerFree", "VitalSign"
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(lowercaseQuery) ||
    p.brand.toLowerCase().includes(lowercaseQuery) ||
    p.category.toLowerCase().includes(lowercaseQuery) ||
    p.uses.some(use => use.toLowerCase().includes(lowercaseQuery))
  );
}

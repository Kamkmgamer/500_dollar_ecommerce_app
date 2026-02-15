export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  price: string;
  stock: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Vintage Denim Jacket",
    description: "Classic vintage denim jacket with a modern fit. Features distressed details and comfortable stretch denim. Perfect for layering in any season.",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
    category: "Outerwear",
    price: "$89.99",
    stock: 45,
  },
  {
    id: 2,
    name: "Handwoven Market Tote",
    description: "Artisan-crafted market tote made from natural seagrass. Spacious interior with cotton lining. Each piece is unique with slight variations.",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop",
    category: "Accessories",
    price: "$48.00",
    stock: 23,
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    description: "Premium organic cotton t-shirt with a relaxed fit. Pre-washed for extra softness. Available in multiple earth-tone colors.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    category: "Tops",
    price: "$34.99",
    stock: 120,
  },
  {
    id: 4,
    name: "Ceramic Pour-Over Set",
    description: "Handmade ceramic pour-over coffee set with matching carafe. Includes reusable stainless steel filter. Dishwasher safe.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
    category: "Home",
    price: "$65.00",
    stock: 18,
  },
  {
    id: 5,
    name: "Linen Blend Trousers",
    description: "Breathable linen-cotton blend trousers with a relaxed fit. Perfect for warm weather. Features side pockets and drawstring waist.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop",
    category: "Bottoms",
    price: "$78.00",
    stock: 56,
  },
  {
    id: 6,
    name: "Beeswax Candle Set",
    description: "Set of 3 hand-poured beeswax candles in glass vessels. Natural honey scent with cotton wicks. Burn time of 40 hours each.",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&h=400&fit=crop",
    category: "Home",
    price: "$42.00",
    stock: 67,
  },
  {
    id: 7,
    name: "Leather Crossbody Bag",
    description: "Full-grain leather crossbody bag with adjustable strap. Features multiple compartments and brass hardware. Ages beautifully over time.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
    category: "Accessories",
    price: "$145.00",
    stock: 12,
  },
  {
    id: 8,
    name: "Wool Blend Cardigan",
    description: "Cozy wool-cotton blend cardigan with mother-of-pearl buttons. Relaxed fit perfect for layering. Hand-knit details on cuffs.",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop",
    category: "Outerwear",
    price: "$125.00",
    stock: 34,
  },
  {
    id: 9,
    name: "Stone Washed Bedding Set",
    description: "100% linen bedding set in queen size. Includes duvet cover and two pillowcases. Stone-washed for ultimate softness.",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=400&fit=crop",
    category: "Home",
    price: "$220.00",
    stock: 8,
  },
  {
    id: 10,
    name: "Silk Blend Scarf",
    description: "Luxurious silk-modal blend scarf with hand-rolled edges. Abstract botanical print in muted tones. 70cm x 180cm.",
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop",
    category: "Accessories",
    price: "$68.00",
    stock: 41,
  },
  {
    id: 11,
    name: "Bamboo Kitchen Set",
    description: "Complete bamboo kitchen utensil set. Includes spatula, spoon, fork, and serving tongs. Naturally antibacterial and eco-friendly.",
    image: "https://images.unsplash.com/photo-1584990347449-a2d4f0a2c7a4?w=400&h=400&fit=crop",
    category: "Home",
    price: "$38.00",
    stock: 52,
  },
  {
    id: 12,
    name: "Canvas Sneakers",
    description: "Classic canvas sneakers with natural rubber soles. Comfortable memory foam insole. Available in off-white and natural grey.",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop",
    category: "Footwear",
    price: "$72.00",
    stock: 89,
  },
  {
    id: 13,
    name: "Hand-Poured Soap Bar",
    description: "Cold-process soap bar made with olive oil and shea butter. Scented with natural lavender essential oil. Gentle for sensitive skin.",
    image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=400&h=400&fit=crop",
    category: "Body Care",
    price: "$12.00",
    stock: 156,
  },
  {
    id: 14,
    name: "Cashmere Beanie",
    description: "100% pure cashmere beanie in a relaxed fit. Lightweight yet incredibly warm. Hand-knit in small batches.",
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400&h=400&fit=crop",
    category: "Accessories",
    price: "$55.00",
    stock: 28,
  },
  {
    id: 15,
    name: "Recycled Glass Vase",
    description: "Handblown vase made from 100% recycled glass. Unique blue-green tint with subtle texture. Perfect for dried or fresh flowers.",
    image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=400&h=400&fit=crop",
    category: "Home",
    price: "$45.00",
    stock: 19,
  },
];

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getCategories(): string[] {
  return [...new Set(products.map((p) => p.category))];
}

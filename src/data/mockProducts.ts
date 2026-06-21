import { Product } from "@/src/types/ecommerce";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Minimalist Leather Sneakers",
    price: 120,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
    stock: 5,
    description: "Minimalist",
    category: "Shoes",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "p2",
    name: "Waterproof Commuter Backpack",
    price: 85,  
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    stock: 2, 
    category: "Backpacks",
    description: "Waterproof",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "p3",
    name: "Wireless Noise-Canceling Headphones",
    price: 250,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    stock: 0, 
    category: "Electronics",
    description: "Canceling",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { CartItem, Product } from "@/src/types/ecommerce";

// 1. Define the blueprint of what our Context will provide to the components
interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

// 2. Initialize the actual Context object with an undefined default value
const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
  
    // Reusing your exact verified logic from page.tsx!
    const addToCart = (product: Product) => {
      const existingItem = cart.find((item) => item.product.id === product.id);
  
      if (existingItem) {
        if (existingItem.quantity < product.stock) {
          setCart(
            cart.map((item) =>
              item.product.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          );
        } else {
          alert(`Sorry, only ${product.stock} items available in stock!`);
        }
      } else {
        if (product.stock > 0) {
          setCart([...cart, { product, quantity: 1 }]);
        } else {
          alert("This item is completely out of stock!");
        }
      }
    };
  
    const removeFromCart = (productId: string) => {
      const currProduct = cart.find((item) => item.product.id === productId);
  
      if (!currProduct) return;
  
      if (currProduct.quantity > 1) {
        setCart(
          cart.map((item) =>
            item.product.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        );
      } else {
        setCart(cart.filter((item) => item.product.id !== productId));
      }
    };
  
    const clearCart = () => setCart([]);
  
    // The Provider passes its live state and functions down through the value prop
    return (
      <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
        {children}
      </CartContext.Provider>
    );
  }

  export function useCart() {
    const context = useContext(CartContext);
    
    // Guard clause: if a developer tries to use useCart outside of a <CartProvider>, crash safely with a clear warning
    if (context === undefined) {
      throw new Error("useCart must be used within a CartProvider");
    }
    
    return context;
  }
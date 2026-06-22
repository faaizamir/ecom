"use client";

import { useState } from "react";
import { MOCK_PRODUCTS } from "@/src/data/mockProducts";
import { CartItem, Product } from "@/src/types/ecommerce";
import ProductCard from "@/src/components/ProductCard";
import CartItemRow from "@/src/components/CartItemRow";

export default function Storefront() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product) => {
    const existingItem = cart.find((item) => item.product.id === product.id);

    if (existingItem) {
      // Case 1: Item is already in the cart, verify we don't exceed stock limits
      if (existingItem.quantity < product.stock) {
        const updatedCart = cart.map((item) => {
          if (item.product.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
        console.log("Updating existing item. New cart:", updatedCart);
        setCart(updatedCart);
      } else {
        alert(`Sorry, only ${product.stock} items available in stock!`);
      }
    } else {
      // Case 2: Fresh item, check if it's available before adding
      if (product.stock > 0) {
        console.log("Adding completely fresh item to cart.");
        setCart([...cart, { product, quantity: 1 }]);
      } else {
        alert("This item is completely out of stock!");
      }
    }
  };

  const handleRemoveFromCart = (productId: string) => {
    const currProduct = cart.find(item => item.product.id === productId)

    if (!currProduct) {
      alert("Product does not exist in cart");
      return;
    }

    if(currProduct?.quantity > 1){
      const updatedCart = cart.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      setCart(updatedCart);
    }else{
      const updatedCart = cart.filter(item => item.product.id !== productId);
      setCart(updatedCart);
    }
  }

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">My Storefront</h1>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {MOCK_PRODUCTS.map((product) => (
          <ProductCard 
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      <hr className="my-12" />

      {/* Cart Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Your Shopping Cart ({cart.length})</h2>
        
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is currently empty.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cart.map((item) => (
              <CartItemRow 
                key={item.product.id}
                item={item}
                onIncrease={handleAddToCart}
                onDecrease={handleRemoveFromCart}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
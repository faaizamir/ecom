"use client";

import { useCart } from "@/src/context/CartContext";
import ThemeToggle from "@/src/components/ThemeToggle";

export default function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const scrollToCart = () => {
    document.getElementById("cart")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <span className="text-sm font-medium tracking-tight">SwiftCart</span>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
          type="button"
          onClick={scrollToCart}
          aria-label={`Shopping cart, ${totalItems} items`}
          className="relative flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-background hover:text-foreground"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          {totalItems > 0 && (
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-medium text-accent-foreground">
              {totalItems}
            </span>
          )}
          </button>
        </div>
      </div>
    </nav>
  );
}

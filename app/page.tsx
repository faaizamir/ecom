"use client";

import { MOCK_PRODUCTS } from "@/src/data/mockProducts";
import ProductCard from "@/src/components/ProductCard";
import CartItemRow from "@/src/components/CartItemRow";
import { useCart } from "@/src/context/CartContext";

export default function Storefront() {
  const { cart, addToCart, removeFromCart } = useCart();

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-16 max-w-md">
        <p className="mb-3 text-[11px] tracking-widest uppercase text-subtle">
          Curated essentials
        </p>
        <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
          Shop the collection
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Thoughtfully selected pieces for everyday use. Simple, durable, and
          designed to last.
        </p>
      </header>

      <section aria-label="Products">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {MOCK_PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </section>

      <section id="cart" aria-label="Shopping cart" className="mt-24 pt-16 border-t border-border">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-2 text-[11px] tracking-widest uppercase text-subtle">
              Your bag
            </p>
            <h2 className="text-xl font-medium tracking-tight">
              {itemCount === 0 ? "Cart" : `${itemCount} item${itemCount === 1 ? "" : "s"}`}
            </h2>
          </div>
          {cart.length > 0 && (
            <p className="text-sm tabular-nums text-muted">
              Total{" "}
              <span className="font-medium text-foreground">${cartTotal}</span>
            </p>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="rounded-sm border border-dashed border-border py-16 text-center">
            <p className="text-sm text-muted">Your cart is empty.</p>
            <p className="mt-1 text-xs text-subtle">
              Browse the collection above to get started.
            </p>
          </div>
        ) : (
          <div className="rounded-sm border border-border bg-surface px-5">
            {cart.map((item) => (
              <CartItemRow
                key={item.product.id}
                item={item}
                onIncrease={addToCart}
                onDecrease={removeFromCart}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

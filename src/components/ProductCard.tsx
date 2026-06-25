import { Product } from "@/src/types/ecommerce";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const outOfStock = product.stock === 0;
  const lowStock = product.stock > 0 && product.stock <= 3;

  return (
    <article className="group flex flex-col">
      <div className="relative mb-5 aspect-[4/5] overflow-hidden rounded-sm bg-background">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {outOfStock && (
          <span className="absolute inset-0 flex items-center justify-center bg-background/80 text-xs font-medium tracking-widest uppercase backdrop-blur-sm">
            Sold out
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1">
        <p className="text-[11px] tracking-widest uppercase text-subtle">
          {product.category}
        </p>
        <h2 className="text-sm font-medium leading-snug">{product.name}</h2>
        <p className="mt-1 text-sm text-muted">${product.price}</p>
        {lowStock && (
          <p className="text-[11px] text-subtle">{product.stock} left</p>
        )}
      </div>

      <button
        type="button"
        disabled={outOfStock}
        onClick={() => onAddToCart(product)}
        className="mt-5 w-full rounded-sm border border-accent bg-accent py-2.5 text-xs font-medium tracking-wide text-accent-foreground transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:border-border disabled:bg-transparent disabled:text-subtle"
      >
        {outOfStock ? "Unavailable" : "Add to cart"}
      </button>
    </article>
  );
}

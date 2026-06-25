import { CartItem, Product } from "@/src/types/ecommerce";

interface CartItemRowProps {
  item: CartItem;
  onIncrease: (product: Product) => void;
  onDecrease: (productId: string) => void;
}

export default function CartItemRow({ item, onIncrease, onDecrease }: CartItemRowProps) {
  const lineTotal = item.product.price * item.quantity;

  return (
    <div className="flex items-center gap-5 border-b border-border py-5 last:border-b-0">
      <img
        src={item.product.image}
        alt={item.product.name}
        className="h-16 w-16 shrink-0 rounded-sm object-cover"
      />

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-medium">{item.product.name}</h3>
        <p className="mt-0.5 text-xs text-muted">
          ${item.product.price} each
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center rounded-sm border border-border">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() => onDecrease(item.product.id)}
            className="flex h-8 w-8 items-center justify-center text-muted transition-colors hover:text-foreground"
          >
            −
          </button>
          <span className="w-8 text-center text-xs tabular-nums">{item.quantity}</span>
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() => onIncrease(item.product)}
            className="flex h-8 w-8 items-center justify-center text-muted transition-colors hover:text-foreground"
          >
            +
          </button>
        </div>

        <p className="w-16 text-right text-sm tabular-nums">${lineTotal}</p>
      </div>
    </div>
  );
}

import { CartItem, Product } from "@/src/types/ecommerce";

interface CartItemRowProps {
  item: CartItem;
  onIncrease: (product: Product) => void;
  onDecrease: (productId: string) => void;
}

export default function CartItemRow({ item, onIncrease, onDecrease }: CartItemRowProps) {
  return (
    <div className="flex items-center gap-4 border p-4 rounded-lg bg-gray-50 justify-between">
      <div className="flex items-center gap-4">
        <img src={item.product.image} alt={item.product.name} className="w-16 h-16 object-cover rounded-md" />
        <div className="flex-1">
          <h3 className="font-semibold">{item.product.name}</h3>
          <p className="text-sm text-gray-600">${item.product.price} x {item.quantity}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="font-bold text-lg">
          ${item.product.price * item.quantity}
        </div>
        <div className="flex gap-2">
          <button 
            className="font-bold text-red-500 text-2xl mr-2 cursor-pointer bg-transparent border-none" 
            onClick={() => onDecrease(item.product.id)}
          >
            -
          </button>
          <button 
            className="font-bold text-green-500 text-2xl cursor-pointer bg-transparent border-none" 
            onClick={() => onIncrease(item.product)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
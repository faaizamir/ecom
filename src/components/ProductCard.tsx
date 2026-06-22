import { Product } from "@/src/types/ecommerce";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void; // A function prop that takes a product and returns nothing
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="border p-4 rounded-lg shadow-sm flex flex-col justify-between">
      <div>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
        <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
        <p className="text-sm text-gray-500 mb-2">{product.category}</p>
        <p className="text-gray-600 font-bold">${product.price}</p>
        <p className="text-sm text-gray-400 mb-4">Stock available: {product.stock}</p>
      </div>
      
      <button 
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full mt-auto disabled:bg-gray-400 cursor-pointer"
        disabled={product.stock === 0}
        onClick={() => onAddToCart(product)}
      >
        {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
      </button>
    </div>
  );
}
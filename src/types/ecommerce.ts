export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
    stock: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface CartItem {
    product: Product;
    quantity: number;
}
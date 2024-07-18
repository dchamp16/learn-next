interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    inStock: boolean;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Laptop",
        description: "A high-performance laptop for all your needs.",
        price: 1200,
        inStock: true
    },
    {
        id: 2,
        name: "Smartphone",
        description: "A smartphone with a great camera and fast processor.",
        price: 800,
        inStock: true
    },
    {
        id: 3,
        name: "Headphones",
        description: "Noise-cancelling headphones for an immersive experience.",
        price: 200,
        inStock: false
    },
    {
        id: 4,
        name: "Smartwatch",
        description: "A smartwatch to keep you connected and healthy.",
        price: 250,
        inStock: true
    }
];
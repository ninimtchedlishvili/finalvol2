export type Product = {
    id: string;
    description: string;
    image: string;
    price: number;
    rating: {
        rate: number;
        count: number;
    }
}

export type ProductPageProps = {
    products: Product[];
}

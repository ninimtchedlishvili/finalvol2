export type Product = {
  title: string;
  id: string;
  description: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
};

export type ProductPageProps = {
  products: Product[];
};

export type ProductProps = {
  params: { id: string };
};

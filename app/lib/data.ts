export type Product = {
  slug: string;
  name: string;
  price: number;
  description: string;
};

const PRODUCTS: Product[] = [
  {
    slug: "shoes",
    name: "Trail Runners",
    price: 129,
    description: "Lightweight runners built for rough terrain.",
  },
  {
    slug: "hats",
    name: "Baseball Cap",
    price: 29,
    description: "Classic six-panel cap, structured crown.",
  },
  {
    slug: "jacket",
    name: "Storm Jacket",
    price: 219,
    description: "Waterproof shell with sealed seams.",
  },
];

export async function getProduct(slug: string): Promise<Product> {
  "use cache";
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) throw new Error(`Unknown product: ${slug}`);
  return product;
}

export async function listProducts(): Promise<Product[]> {
  "use cache";
  return PRODUCTS;
}

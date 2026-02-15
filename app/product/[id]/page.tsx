import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductById, products } from "@/lib/products";
import { simulateDelay } from "@/lib/delay";
import AddToCartButton from "./AddToCartButton";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const product = getProductById(parseInt(id));

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} — Artisan Collective`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: PageProps) {
  await simulateDelay();

  const { id } = await params;
  const product = getProductById(parseInt(id));

  if (!product) {
    notFound();
  }

  return (
    <div>
      <Link href="/" className="back-link">
        ← Back to collection
      </Link>

      <div className="single-product">
        <div>
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-meta">
          <span className="product-category">{product.category}</span>
          <h1 style={{ marginTop: "0.5rem" }}>{product.name}</h1>
          <p className="product-price-large">{product.price}</p>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--text-muted)", marginBottom: "1.5rem" }}>
            {product.description}
          </p>
          <p className="product-stock" style={{ marginBottom: "2rem" }}>
            {product.stock} items in stock
          </p>

          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}

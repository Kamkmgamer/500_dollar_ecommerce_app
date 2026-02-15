"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  stock: number;
}

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);
  const router = useRouter();

  const handleAddToCart = async () => {
    setLoading(true);
    try {
      await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: product.id, quantity }),
      });
      setAdded(true);
      router.refresh();
      setTimeout(() => setAdded(false), 2500);
    } catch {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="quantity-selector">
        <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}>+</button>
      </div>

      <button
        onClick={handleAddToCart}
        disabled={loading || product.stock === 0}
        className="btn"
        style={{
          width: "100%",
          opacity: loading ? 0.7 : 1,
          background: added ? "var(--sage)" : undefined,
        }}
      >
        {loading ? "Adding..." : added ? "✓ Added to Cart" : product.stock === 0 ? "Out of Stock" : "Add to Cart"}
      </button>

      <Link
        href="/checkout"
        className="btn btn-secondary"
        style={{ width: "100%", marginTop: "0.75rem", textAlign: "center", display: "flex" }}
      >
        Buy Now
      </Link>
    </div>
  );
}

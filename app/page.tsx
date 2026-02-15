import Link from "next/link";
import { products, getCategories } from "@/lib/products";
import { simulateDelay } from "@/lib/delay";

export const dynamic = "force-dynamic";

export default async function Home() {
  await simulateDelay();
  const categories = getCategories();

  return (
    <div>
      <section className="hero">
        <h1>Curated for the<br />Modern Artisan</h1>
        <p>
          Handpicked fashion, accessories, and home goods from artisans around the world. Each piece tells a story of craft and care.
        </p>
        <Link href="#collection" className="btn">Explore Collection</Link>
      </section>

      <div className="trust-banner">
        <div className="trust-item">
          <span>✦</span>
          Handpicked
        </div>
        <div className="trust-item">
          <span>◈</span>
          Sustainable
        </div>
        <div className="trust-item">
          <span>❋</span>
          Artisan-Crafted
        </div>
        <div className="trust-item">
          <span>✧</span>
          Free Returns
        </div>
      </div>

      <section id="collection">
        <div className="section-header">
          <h2>Our Collection</h2>
        </div>

        <div className="category-filter">
          <button className="category-btn active">All</button>
          {categories.map((cat) => (
            <button key={cat} className="category-btn">{cat}</button>
          ))}
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <article
              key={product.id}
              className="product-card animate-fade-in-up"
              style={{ animationDelay: `${(index % 6) * 0.07}s` }}
            >
              <Link href={`/product/${product.id}`}>
                <div className="product-card-img-wrap">
                  <img src={product.image} alt={product.name} />
                </div>
              </Link>
              <div className="product-card-content">
                <span className="product-category">{product.category}</span>
                <h3>
                  <Link href={`/product/${product.id}`}>{product.name}</Link>
                </h3>
                <p className="product-price">{product.price}</p>
                <p className="product-stock">{product.stock} in stock</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

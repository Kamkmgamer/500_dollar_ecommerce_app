import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Cart from "@/components/Cart";

export const metadata: Metadata = {
  title: "Artisan Collective | Curated Fashion & Artisan Home Goods",
  description: "Discover handpicked fashion, accessories, and home goods crafted by artisans around the world. Timeless pieces for the modern lifestyle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="announcement-bar">
          Free shipping on orders over <strong>$100</strong> · Handcrafted with care
        </div>
        <header className="site-header">
          <div className="header-inner">
            <p className="site-title">
              <Link href="/">Artisan Collective</Link>
            </p>
            <nav className="nav">
              <Link href="/">Shop</Link>
              <Link href="/admin">Admin</Link>
              <Cart />
            </nav>
          </div>
        </header>
        <main className="main-content">{children}</main>
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-grid">
              <div className="footer-col">
                <h5>About Artisan Collective</h5>
                <p>
                  We curate quality fashion, accessories, and home goods from artisans around the world. Each piece is meticulously selected for its craftsmanship, sustainability, and timeless style.
                </p>
              </div>
              <div className="footer-col">
                <h5>Shop</h5>
                <p>
                  <Link href="/">All Products</Link>
                  <br />
                  <Link href="/cart">Shopping Cart</Link>
                  <br />
                  <Link href="/checkout">Checkout</Link>
                </p>
              </div>
              <div className="footer-col">
                <h5>Help</h5>
                <p>
                  <a href="mailto:hello@artisancollective.com">hello@artisancollective.com</a>
                  <br />
                  <a href="tel:+18005551234">1-800-555-1234</a>
                  <br />
                  <span>Mon - Fri, 9am - 6pm</span>
                </p>
              </div>
              <div className="footer-col">
                <h5>Connect</h5>
                <p>
                  <a href="#">Instagram</a>
                  <br />
                  <a href="#">Pinterest</a>
                  <br />
                  <a href="#">Facebook</a>
                </p>
              </div>
            </div>

            <div className="footer-bottom">
              <p>© 2026 Artisan Collective. All Rights Reserved.</p>
              <p>
                <a href="#">Privacy</a> · <a href="#">Terms</a> · <a href="#">Shipping</a> · <a href="#">Returns</a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

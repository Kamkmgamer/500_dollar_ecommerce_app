import Link from "next/link";
import { getCart } from "@/lib/cart";
import { simulateDelay } from "@/lib/delay";
import CartItems from "./CartItems";

export const dynamic = "force-dynamic";

export default async function CartPage() {
  await simulateDelay();
  const cart = await getCart();

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {cart.items.length === 0 ? (
        <div style={{ textAlign: "center", padding: "4rem 0" }}>
          <p style={{ fontSize: "3rem", marginBottom: "1rem" }}>🛒</p>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", marginBottom: "2rem" }}>
            Your cart is empty. Start exploring our collection.
          </p>
          <Link href="/" className="btn">Continue Shopping</Link>
        </div>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <CartItems items={cart.items} />
            </tbody>
          </table>

          <div className="cart-summary">
            <div className="cart-summary-row">
              <span>Subtotal</span>
              <span>${cart.total.toFixed(2)}</span>
            </div>
            <div className="cart-summary-row">
              <span>Shipping</span>
              <span>{cart.total >= 100 ? "Free" : "Calculated at checkout"}</span>
            </div>
            <div className="cart-summary-row cart-summary-total">
              <span>Total</span>
              <span>${cart.total.toFixed(2)}</span>
            </div>

            <div style={{ marginTop: "2rem", display: "flex", gap: "0.75rem", justifyContent: "flex-end" }}>
              <Link href="/" className="btn btn-secondary">Continue Shopping</Link>
              <Link href="/checkout" className="btn">Proceed to Checkout</Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

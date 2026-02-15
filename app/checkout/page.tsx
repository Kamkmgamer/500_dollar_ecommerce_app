import { getCart } from "@/lib/cart";
import { simulateDelay } from "@/lib/delay";
import CheckoutForm from "./CheckoutForm";

export const dynamic = "force-dynamic";

export default async function CheckoutPage() {
  await simulateDelay();
  const cart = await getCart();

  if (cart.items.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "4rem 0" }}>
        <h1>Checkout</h1>
        <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", marginBottom: "1.5rem" }}>
          Your cart is empty. Add some items to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <div className="checkout-grid">
        <div>
          <h3>Shipping Information</h3>
          <CheckoutForm total={cart.total} />
        </div>

        <div>
          <h3>Order Summary</h3>
          <div className="order-summary">
            {cart.items.map((item) => (
              <div key={item.product.id} className="order-item">
                <span>{item.product.name} × {item.quantity}</span>
                <span style={{ fontWeight: 600 }}>
                  ${(parseFloat(item.product.price.replace("$", "")) * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
            <div className="order-item" style={{ borderBottom: "none", color: "var(--text-muted)" }}>
              <span>Shipping</span>
              <span>{cart.total >= 100 ? "Free" : "$9.99"}</span>
            </div>
            <div className="order-total">
              <span>Total</span>
              <span>${(cart.total + (cart.total >= 100 ? 0 : 9.99)).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

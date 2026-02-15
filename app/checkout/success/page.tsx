import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="success-page">
      <div className="success-icon">✓</div>
      <h1>Thank You!</h1>
      <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", marginBottom: "0.75rem", lineHeight: 1.7 }}>
        Your order has been placed successfully. We&apos;ll send you a confirmation email with tracking details shortly.
      </p>
      <p style={{ color: "var(--text-light)", fontSize: "0.82rem", marginBottom: "2rem" }}>
        This is a demo checkout — no payment was processed.
      </p>
      <Link href="/" className="btn">Continue Shopping</Link>
    </div>
  );
}

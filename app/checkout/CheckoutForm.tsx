"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface CheckoutFormProps {
  total: number;
}

export default function CheckoutForm({ total }: CheckoutFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customerEmail: formData.email,
        customerName: `${formData.firstName} ${formData.lastName}`,
      }),
    });

    await fetch("/api/cart", { method: "DELETE" });

    setLoading(false);
    router.push("/checkout/success");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" placeholder="Jane" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" placeholder="Doe" value={formData.lastName} onChange={handleChange} required />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="jane@example.com" value={formData.email} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone" placeholder="(555) 123-4567" value={formData.phone} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="address" placeholder="123 Main Street" value={formData.address} onChange={handleChange} required />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" placeholder="New York" value={formData.city} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="state">State / Province</label>
          <input type="text" id="state" name="state" placeholder="NY" value={formData.state} onChange={handleChange} required />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="zip">ZIP / Postal Code</label>
          <input type="text" id="zip" name="zip" placeholder="10001" value={formData.zip} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input type="text" id="country" name="country" placeholder="United States" value={formData.country} onChange={handleChange} required />
        </div>
      </div>

      <div className="checkout-notice">
        <p>
          This is a demo checkout. No actual payment will be processed.
        </p>
        <div className="checkout-total">
          Order Total: ${total.toFixed(2)}
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn"
        style={{ width: "100%", opacity: loading ? 0.8 : 1, padding: "1rem" }}
      >
        {loading ? "Processing your order..." : "Place Order"}
      </button>
    </form>
  );
}

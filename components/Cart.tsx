"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";

interface CartItem {
  product: {
    id: number;
    name: string;
    price: string;
    image: string;
  };
  quantity: number;
}

interface CartData {
  items: CartItem[];
  total: number;
}

export default function Cart() {
  const [cart, setCart] = useState<CartData>({ items: [], total: 0 });
  const [isOpen, setIsOpen] = useState(false);

  const fetchCart = useCallback(() => {
    fetch("/api/cart")
      .then((res) => res.json())
      .then(setCart)
      .catch(() => { });
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  // Refetch when drawer opens
  useEffect(() => {
    if (isOpen) fetchCart();
  }, [isOpen, fetchCart]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="cart-toggle" aria-label="Shopping cart">
        <span className="cart-icon">🛒</span>
        {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
      </button>

      {isOpen && (
        <>
          <div className="cart-overlay" onClick={() => setIsOpen(false)} />
          <div className="cart-dropdown">
            <div className="cart-header">
              <h4>Your Cart ({itemCount})</h4>
              <button onClick={() => setIsOpen(false)} className="cart-close" aria-label="Close cart">×</button>
            </div>

            {cart.items.length === 0 ? (
              <p className="cart-empty">Your cart is empty</p>
            ) : (
              <>
                <div className="cart-items">
                  {cart.items.map((item) => (
                    <div key={item.product.id} className="cart-item">
                      <img src={item.product.image} alt={item.product.name} />
                      <div className="cart-item-details">
                        <span className="cart-item-name">{item.product.name}</span>
                        <span className="cart-item-qty">{item.quantity} × {item.product.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="cart-drawer-footer">
                  <div className="cart-total">
                    <span>Subtotal</span>
                    <span>${cart.total.toFixed(2)}</span>
                  </div>
                  <Link href="/cart" className="cart-view" onClick={() => setIsOpen(false)}>View Cart</Link>
                  <Link href="/checkout" className="cart-checkout" onClick={() => setIsOpen(false)}>Checkout</Link>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}

"use client";

import { useRouter } from "next/navigation";

interface CartItem {
  product: {
    id: number;
    name: string;
    price: string;
    image: string;
  };
  quantity: number;
}

interface CartItemsProps {
  items: CartItem[];
}

export default function CartItems({ items }: CartItemsProps) {
  const router = useRouter();

  const handleRemove = async (productId: number) => {
    await fetch("/api/cart", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId }),
    });
    router.refresh();
  };

  const handleUpdate = async (productId: number, quantity: number) => {
    await fetch("/api/cart", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId, quantity }),
    });
    router.refresh();
  };

  return (
    <>
      {items.map((item) => {
        const price = parseFloat(item.product.price.replace("$", ""));
        const itemTotal = price * item.quantity;

        return (
          <tr key={item.product.id}>
            <td>
              <div className="cart-product-info">
                <img src={item.product.image} alt={item.product.name} />
                <span className="cart-product-name">{item.product.name}</span>
              </div>
            </td>
            <td>{item.product.price}</td>
            <td>
              <div className="quantity-selector" style={{ margin: 0 }}>
                <button onClick={() => handleUpdate(item.product.id, item.quantity - 1)}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleUpdate(item.product.id, item.quantity + 1)}>+</button>
              </div>
            </td>
            <td style={{ fontWeight: 600 }}>${itemTotal.toFixed(2)}</td>
            <td>
              <button onClick={() => handleRemove(item.product.id)} className="cart-remove">
                Remove
              </button>
            </td>
          </tr>
        );
      })}
    </>
  );
}

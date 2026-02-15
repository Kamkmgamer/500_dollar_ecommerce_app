"use client";

import { useRouter } from "next/navigation";
import type { Order } from "@/lib/orders";

type SerializedOrder = Omit<Order, "createdAt"> & { createdAt: string };

interface OrderListProps {
  orders: SerializedOrder[];
}

export default function OrderList({ orders }: OrderListProps) {
  const router = useRouter();

  const handleStatusChange = async (orderId: string, status: Order["status"]) => {
    await fetch("/api/orders", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderId, status }),
    });
    router.refresh();
  };

  const getStatusClass = (status: Order["status"]) => {
    switch (status) {
      case "pending": return "status-pending";
      case "processing": return "status-processing";
      case "shipped": return "status-shipped";
      case "delivered": return "status-delivered";
      default: return "";
    }
  };

  return (
    <table className="orders-table">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer</th>
          <th>Items</th>
          <th>Total</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", fontWeight: 500, color: "var(--text-muted)" }}>
              {order.id.slice(0, 15)}...
            </td>
            <td>
              <div style={{ fontWeight: 500 }}>{order.customerName}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{order.customerEmail}</div>
            </td>
            <td>{order.items.length} item(s)</td>
            <td style={{ fontWeight: 600 }}>${order.total.toFixed(2)}</td>
            <td>
              <select
                value={order.status}
                onChange={(e) => handleStatusChange(order.id, e.target.value as Order["status"])}
                className={`status-badge ${getStatusClass(order.status)}`}
                style={{ border: "none", cursor: "pointer", fontFamily: "var(--font-body)" }}
              >
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
              </select>
            </td>
            <td style={{ color: "var(--text-muted)" }}>{new Date(order.createdAt).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

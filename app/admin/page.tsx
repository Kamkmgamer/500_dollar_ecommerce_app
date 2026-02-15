import { simulateDelay } from "@/lib/delay";
import { getOrders, getOrderStats } from "@/lib/orders";
import OrderList from "./OrderList";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  await simulateDelay();
  const [orders, stats] = await Promise.all([getOrders(), getOrderStats()]);

  const serializedOrders = orders.map((order) => ({
    ...order,
    createdAt: order.createdAt instanceof Date ? order.createdAt.toISOString() : order.createdAt,
  }));

  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">{stats.totalOrders}</div>
          <div className="stat-label">Total Orders</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">${stats.totalRevenue.toFixed(2)}</div>
          <div className="stat-label">Total Revenue</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{stats.pendingOrders}</div>
          <div className="stat-label">Pending Orders</div>
        </div>
      </div>

      <div className="section-header">
        <h2>Recent Orders</h2>
      </div>

      {orders.length === 0 ? (
        <div style={{ textAlign: "center", padding: "3rem 0" }}>
          <p style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📦</p>
          <p style={{ color: "var(--text-muted)", fontSize: "1rem" }}>
            No orders yet. Orders will appear here once customers checkout.
          </p>
        </div>
      ) : (
        <OrderList orders={serializedOrders} />
      )}
    </div>
  );
}

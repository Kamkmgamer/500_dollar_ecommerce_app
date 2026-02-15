"use server";

import { cookies } from "next/headers";
import { getCart, clearCart } from "./cart";

export interface Order {
  id: string;
  items: { productName: string; quantity: number; price: string }[];
  total: number;
  customerEmail: string;
  customerName: string;
  status: "pending" | "processing" | "shipped" | "delivered";
  createdAt: Date;
}

const ORDERS_COOKIE = "boutique_orders";

async function getOrdersFromCookie(): Promise<Order[]> {
  const cookieStore = await cookies();
  const ordersCookie = cookieStore.get(ORDERS_COOKIE);
  if (!ordersCookie) return [];
  try {
    return JSON.parse(ordersCookie.value);
  } catch {
    return [];
  }
}

async function saveOrdersToCookie(orders: Order[]) {
  const cookieStore = await cookies();
  cookieStore.set(ORDERS_COOKIE, JSON.stringify(orders), {
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
}

export async function createOrder(customerEmail: string, customerName: string): Promise<Order> {
  const cart = await getCart();
  const orders = await getOrdersFromCookie();
  
  const order: Order = {
    id: `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    items: cart.items.map((item) => ({
      productName: item.product.name,
      quantity: item.quantity,
      price: item.product.price,
    })),
    total: cart.total,
    customerEmail,
    customerName,
    status: "pending",
    createdAt: new Date(),
  };

  orders.push(order);
  await saveOrdersToCookie(orders);
  await clearCart();
  
  return order;
}

export async function getOrders(): Promise<Order[]> {
  return getOrdersFromCookie();
}

export async function updateOrderStatus(orderId: string, status: Order["status"]): Promise<void> {
  const orders = await getOrdersFromCookie();
  const orderIndex = orders.findIndex((o) => o.id === orderId);
  if (orderIndex >= 0) {
    orders[orderIndex].status = status;
    await saveOrdersToCookie(orders);
  }
}

export async function getOrderStats(): Promise<{
  totalOrders: number;
  totalRevenue: number;
  pendingOrders: number;
  recentOrders: Order[];
}> {
  const orders = await getOrdersFromCookie();
  
  return {
    totalOrders: orders.length,
    totalRevenue: orders.reduce((sum, o) => sum + o.total, 0),
    pendingOrders: orders.filter((o) => o.status === "pending").length,
    recentOrders: orders.slice(-5).reverse(),
  };
}

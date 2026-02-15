import { NextRequest, NextResponse } from "next/server";
import { getOrders, createOrder, updateOrderStatus, getOrderStats } from "@/lib/orders";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const stats = searchParams.get("stats");
  
  if (stats === "true") {
    const orderStats = await getOrderStats();
    return NextResponse.json(orderStats);
  }
  
  const orders = await getOrders();
  return NextResponse.json(orders);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { customerEmail, customerName } = body;
  const order = await createOrder(customerEmail, customerName);
  return NextResponse.json(order);
}

export async function PATCH(request: NextRequest) {
  const body = await request.json();
  const { orderId, status } = body;
  await updateOrderStatus(orderId, status);
  const orders = await getOrders();
  return NextResponse.json(orders);
}

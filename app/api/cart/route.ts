import { NextRequest, NextResponse } from "next/server";
import { getCart, addToCart, removeFromCart, updateQuantity, clearCart } from "@/lib/cart";

export async function GET() {
  const cart = await getCart();
  return NextResponse.json(cart);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { productId, quantity } = body;
  await addToCart(productId, quantity || 1);
  const cart = await getCart();
  return NextResponse.json(cart);
}

export async function PATCH(request: NextRequest) {
  const body = await request.json();
  const { productId, quantity } = body;
  await updateQuantity(productId, quantity);
  const cart = await getCart();
  return NextResponse.json(cart);
}

export async function DELETE(request: NextRequest) {
  const body = await request.json();
  if (body.productId) {
    await removeFromCart(body.productId);
  } else {
    await clearCart();
  }
  const cart = await getCart();
  return NextResponse.json(cart);
}

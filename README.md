# Boutique Store - $500 Budget

A boutique e-commerce application demonstrating a mid-tier budget implementation with Next.js and simulated Shopify Lite API performance.

## Overview

- **Budget**: $500
- **Target Business**: Local business / Boutique
- **Max Products**: 200-1000
- **Performance**: 200ms artificial delay (mid-tier)

## Features

- Product catalog with 15 boutique items
- Shopping cart with add/remove/update functionality
- Checkout flow with shipping form
- Order management system
- Admin dashboard with simple analytics
- Order status tracking (pending → processing → shipped → delivered)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: CSS with CSS Variables
- **State**: Server Actions + Cookie-based persistence
- **Performance**: 200ms artificial delay to simulate mid-tier hosting

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the store.

## Routes

| Route | Description |
|-------|-------------|
| `/` | Product catalog |
| `/product/[id]` | Product detail page |
| `/cart` | Shopping cart |
| `/checkout` | Checkout flow |
| `/checkout/success` | Order confirmation |
| `/admin` | Analytics dashboard |

## Performance Characteristics

This tier intentionally simulates slower performance with:
- 200ms delay on all page loads
- Demonstrates performance difference from higher budget tiers
- Expected page load: ~400-600ms (with delay)

## Cost Breakdown

| Item | Cost |
|------|------|
| Development | ~$350 |
| Monthly Hosting | ~$20/mo |
| Shopify Lite | ~$9/mo |
| **Total First Year** | ~$500 |
| **Monthly Cost** | ~$29/mo |

## Best For

- Local boutiques
- Small retail stores
- Businesses testing e-commerce
- Those wanting Shopify without full Shopify costs

## License

MIT

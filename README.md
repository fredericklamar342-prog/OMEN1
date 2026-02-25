# Omen Protocol

The Trust Layer for the Sui Ecosystem.

## Structure

- `apps/web`: Next.js 14 Web Application (White Canvas Protocol Design System)
- `packages/sdk`: Clean TypeScript SDK for trust score queries and security assertions.

## Development

### Setup

1. From the root directory, install dependencies:

   ```bash
   npm install
   ```

2. Build the packages and apps:
   ```bash
   npm run build
   ```

### Running Locally

To start the web application:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

## SDK Usage

```typescript
import { OmenSDK } from "@omen-labs/sdk";

const omen = new OmenSDK({ network: "mainnet" });

// Get Trust Index
const { score, status } = await omen.getTrustScore("0x...");

// On-chain Protection
omen.injectSecurityAssertion(tx, {
  targetContract: "0x...",
  minScore: 85,
});
```

## Design System: White Canvas Protocol

A minimalist, high-contrast design system:

- **Zero Gradients**: Use solid values only.
- **Zero Neon**: High-contrast black, white, and oxblood red.
- **Inter Font**: Strong typographic hierarchy.
- **Whitespace**: Heavy use of spacing to focus on intent.

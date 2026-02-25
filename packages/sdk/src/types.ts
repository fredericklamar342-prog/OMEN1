export type TrustScore = number;

export type ProjectStatus = "verified" | "watchlist" | "revoked" | "unknown";

export interface OmenClientOptions {
  network: "mainnet" | "testnet" | "devnet";
  apiKey?: string;
  rpcUrl?: string;
}

export interface TrustIndexResponse {
  address: string;
  score: TrustScore;
  status: ProjectStatus;
  lastUpdated: number;
}

export interface SecurityAssertionOptions {
  targetContract: string;
  minScore: number;
}

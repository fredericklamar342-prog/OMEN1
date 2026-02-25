import { OmenClientOptions, TrustIndexResponse, SecurityAssertionOptions } from "./types";
import { OMEN_PACKAGE_ID_MAINNET, TRUST_THRESHOLDS } from "./constants";
import { PtbBuilder } from "./utils/ptb-builder";
import { WalrusClient } from "./utils/walrus";

/**
 * OmenSDK Client
 * The primary interface for interacting with the Omen Trust Layer.
 */
export class OmenSDK {
  private readonly options: OmenClientOptions;

  constructor(options: OmenClientOptions) {
    this.options = options;
  }

  /**
   * Fetches the trust score and status for a specific contract address.
   */
  async getTrustScore(address: string): Promise<TrustIndexResponse> {
    console.log(`[Omen SDK] Fetching trust index for ${address}`);
    
    // Mock response
    return {
      address,
      score: 95,
      status: "verified",
      lastUpdated: Date.now(),
    };
  }

  /**
   * helper to quickly check if a contract is currently verified.
   */
  async isVerified(address: string): Promise<boolean> {
    const data = await this.getTrustScore(address);
    return data.status === "verified" && data.score >= TRUST_THRESHOLDS.VERIFIED;
  }

  /**
   * Retrieves a full audit report from the decentralized Walrus storage.
   */
  async getAuditReport(blobId: string): Promise<any> {
    return WalrusClient.getBlob(blobId);
  }

  /**
   * Injects a Move-level security assertion into a Sui Transaction Block.
   * If the trust score for the target contract falls below minScore, the transaction fails on-chain.
   */
  injectSecurityAssertion(tx: any, options: SecurityAssertionOptions) {
    const packageId = this.options.network === "mainnet" ? OMEN_PACKAGE_ID_MAINNET : OMEN_PACKAGE_ID_MAINNET;
    return PtbBuilder.injectAssertion(tx, packageId, options);
  }
}

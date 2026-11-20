export type Currency = "USD" | "KHR";
export type BillingCycle = "monthly" | "quarterly" | "yearly" | "once";

export interface ApiResponse<T> {
  data: T;
  message?: string;
}

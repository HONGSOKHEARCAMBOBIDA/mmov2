import type { BillingCycle, Currency } from "./common";

export type { BillingCycle, Currency };

export interface CustomerRentFeeUpdate {
  fee_id?: number | null;
  value?: number | null;
  currency?: Currency;
  billing_cycle?: BillingCycle;
  status?: boolean;
}

export interface CustomerRentFeeCreate {
  fee_id: number | null;
  value: number | null;
  currency: Currency;
  billing_cycle?: BillingCycle;
}

export interface UtilityReadingRow {
  id: number;
  period_start: string;
  period_end: string | null;
  previous_reading: number | null;
  current_reading: number | null;
  usage_value: number | null;
  status: boolean;
}

export interface CustomerRentFeeRow {
  id: number;
  fee_id: number;
  fee_name: string;
  value: number;
  currency: Currency;
  billing_cycle: BillingCycle;
  status: boolean;
  utility_readings?: UtilityReadingRow[];
}

export interface CustomerRentRow {
  id: number;
  contract_no: string;
  room_name: string;
  floor_name: string;
  building_name: string;
  status: boolean;
  contract_date: string;
  contract_end_date?: string | null;
  visit_date: string;
  next_payment?: string | null;
  rent_price: number;
  rent_currency: string;
  rental_deposit: number;
  rental_deposit_currency: string;
  customer_rent_fees?: CustomerRentFeeRow[];
}

export interface CustomerRentDetailResponse {
  customer_rent: CustomerRentRow[];
}

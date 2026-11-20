import { api } from "./http";
import type { ApiResponse } from "../types/common";
import type {
  CustomerRentDetailResponse,
  CustomerRentFeeCreate,
  CustomerRentFeeUpdate,
} from "../types/customerrent";
import type { UtilityReading } from "../types/utilityreading";
import type { Fee } from "../types/fee";

export const createcustomerrentfee = (data: CustomerRentFeeCreate, id: number) =>
  api.post(`/private/v1/add.customer.rent.fee/${id}`, data);

// TODO: adjust these URLs to match your backend routes
export const updatecustomerrentfee = (data: CustomerRentFeeUpdate, id: number) =>
  api.put(`/private/v1/update.customer.rent.fee/${id}`, data);

export const updateutilityreading = (data: UtilityReading, id: number) =>
  api.put(`/private/v1/update.utility.reading/${id}`, data);

export const getcustomerrentforinvoice = (id: number) =>
  api.get<ApiResponse<CustomerRentDetailResponse>>(`/private/v1/get.customer.rent.for.invoice/${id}`);

export const getfeebybranch = (branchId: number) =>
  api.get<ApiResponse<Fee[]>>(`/private/v1/get.fee.by.branch/${branchId}`);

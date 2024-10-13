import { ApiResponse } from "./ApiResponse";

export interface Result extends Response {
  ok: boolean;
  status: number;
  data?: ApiResponse;
  error?: string;
}

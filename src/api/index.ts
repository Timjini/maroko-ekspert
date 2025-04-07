import axios, { AxiosResponse } from "axios";
import { ExcursionResponse } from "../types/tour";
import { FormResponse, FormData } from "../types/common";

const API_ROOT = import.meta.env.VITE_BACKEND_URL;

const getAllTours = (params?: {
  [key: string]: string | undefined;
}): Promise<AxiosResponse<ExcursionResponse>> => {
  const filteredParams = Object.fromEntries(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(params || {}).filter(([_, value]) => value !== undefined)
  ) as Record<string, string>;

  const queryString = new URLSearchParams(filteredParams).toString();

  return axios.get<ExcursionResponse>(
    `${API_ROOT}/api/v3/maroko-ekspert?${queryString}`
  );
};

const sendFormData = async (
  data: FormData
): Promise<AxiosResponse<FormResponse>> => {
  return axios.post<FormResponse>(`${API_ROOT}/api/v3/maroko-ekspert/booking-request`, data, {
    headers: { "Content-Type": "application/json" },
  });
};

const sendRequestData = async (
  data: FormData
): Promise<AxiosResponse<FormResponse>> => {
  return axios.post<FormResponse>(`${API_ROOT}/forms`, data, {
    headers: { "Content-Type": "application/json" },
  });
};

const mainApi = {
  getAllTours,
  sendFormData,
  sendRequestData
};

export default mainApi;

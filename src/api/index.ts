import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const API_ROOT = import.meta.env.VITE_BACKEND_URL;

interface Excursion {
  _id: string;
  type: string;
  city: string;
  include: string;
  duration: string;
  price: number;
  timing: string;
  title_en: string;
  title_pl: string;
  content_en: string;
}

interface ExcursionResponse {
  message: string;
  data: Excursion[];
}

const getAllTours = (payload?: AxiosRequestConfig): Promise<AxiosResponse<ExcursionResponse>> => {
  return axios.get<ExcursionResponse>(`${API_ROOT}/api/v3/maroko-ekspert`, payload);
};

const mainApi = {
  getAllTours,
};

export default mainApi;

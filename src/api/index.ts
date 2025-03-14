import axios, { AxiosResponse } from 'axios';

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
  image_url?: string;
}

interface ExcursionResponse {
  message: string;
  data: Excursion[];
}

const getAllTours = (params?: { [key: string]: string | undefined }): Promise<AxiosResponse<ExcursionResponse>> => {
  const filteredParams = Object.fromEntries(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(params || {}).filter(([_, value]) => value !== undefined)
  ) as Record<string, string>;

  const queryString = new URLSearchParams(filteredParams).toString();

  return axios.get<ExcursionResponse>(`${API_ROOT}/api/v3/maroko-ekspert?${queryString}`);
};

const mainApi = {
  getAllTours,
};

export default mainApi;

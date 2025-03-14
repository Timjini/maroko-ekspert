import { useEffect, useState, useMemo } from "react";
import mainApi from '../api'; 
import { AxiosError, AxiosResponse } from 'axios';

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
  imageUrl?: string;
}

interface ExcursionResponse {
  message: string;
  data: Excursion[];
}

interface UseGetToursParams {
  type?: string;
  city?: string;
  include?: string;
  duration?: string;
  price?: string;
  _id?: string;
  [key: string]: string | undefined;
}

const useGetTours = (params: UseGetToursParams) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [tours, setTours] = useState<Excursion[]>([]);

  const stableParams = useMemo(() => params, [JSON.stringify(params)]);

  const fetchTours = async () => {
    try {
      setLoading(true);
      const response: AxiosResponse<ExcursionResponse> = await mainApi.getAllTours(stableParams);
      setTours(response.data.data); 
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error('Error getting tours:', axiosError.message);
      setError(axiosError.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, [stableParams]);

  return { tours, loading, error, refetch: fetchTours };
};

export default useGetTours;

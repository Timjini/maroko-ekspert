import { useEffect, useState } from "react";
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
}

interface ExcursionResponse {
  message: string;
  data: Excursion[];
}

const useGetTours = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [tours, setTours] = useState<Excursion[]>([]);
  
  const fetchTours = async () => {
    try {
      setLoading(true);
      const response: AxiosResponse<ExcursionResponse> = await mainApi.getAllTours();
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
  }, []);

  return { tours, loading, error, refetch: fetchTours };
};

export default useGetTours;

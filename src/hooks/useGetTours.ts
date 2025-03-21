import { useEffect, useState, useMemo, useCallback } from "react";
import mainApi from '../api'; 
import { AxiosError, AxiosResponse } from 'axios';
import { Excursion, ExcursionResponse, UseGetToursParams } from '../types/tour';

const useGetTours = (params: UseGetToursParams) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [tours, setTours] = useState<Excursion[]>([]);

  const parsedParams = JSON.stringify(params);
  const stableParams = useMemo(() => params, [parsedParams]);

  const fetchTours = useCallback(async () => {
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
  }, [stableParams]);

  useEffect(() => {
    fetchTours();
  }, [fetchTours]);

  return { tours, loading, error, refetch: fetchTours };
};

export default useGetTours;

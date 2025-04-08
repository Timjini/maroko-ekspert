import { useEffect, useState, useMemo, useCallback } from "react";
import mainApi from '../api'; 
import { AxiosError, AxiosResponse } from 'axios';
import { Excursion, SimilarExcursions, ExcursionResponse, UseGetToursParams } from '../types/tour';

const useGetTours = (params: UseGetToursParams) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [tours, setTours] = useState<Excursion[]>([]);
  const [similarExcursions, setSimilarExcursions] = useState<SimilarExcursions[]>([]);

  const parsedParams = JSON.stringify(params);
  const stableParams = useMemo(() => params, [parsedParams]);

  const fetchTours = useCallback(async () => {
    try {
      setLoading(true);
      const response: AxiosResponse<ExcursionResponse> = await mainApi.getAllTours(stableParams);
      setSimilarExcursions(response.data.excursionsWithSimilar);
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
  return { tours, similarExcursions, loading, error, refetch: fetchTours };
};

export default useGetTours;

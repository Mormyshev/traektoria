// src/hooks/useHomePage.ts
import { useEffect } from "react";
import { useGetCarsQuery } from "../queries/useGetCarsQuery";
import { useDispatch, useSelector } from "react-redux";
import { setCars, setLoading, setError } from "../redux/slices/carsSlice";

export const useHome = () => {
  const dispatch = useDispatch();
  const { data: carsData, isLoading, error } = useGetCarsQuery();

  const carsFromStore = useSelector((state: any) => state.carsStore.cars);

  useEffect(() => {
    dispatch(setLoading(isLoading));
  }, [isLoading, dispatch]);

  useEffect(() => {
    if (error) {
      dispatch(setError(error.message));
    }
  }, [error, dispatch]);

  useEffect(() => {
    if (carsData && !isLoading) {
      dispatch(setCars(carsData));
    }
  }, [carsData, isLoading, dispatch]);

  return {
    carsData: carsFromStore.length > 0 ? carsFromStore : [],
    isLoading,
    error,
  };
};

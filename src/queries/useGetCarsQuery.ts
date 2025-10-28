import { useQuery } from "@tanstack/react-query";
import { getCars } from "../http/carsApi";
import { getCarsQueryKey } from "../utils/queryKey";

export const useGetCarsQuery = () => {
  return useQuery({
    queryKey: getCarsQueryKey(),
    queryFn: () => getCars(),
    select: (response) => response.data,
  });
};

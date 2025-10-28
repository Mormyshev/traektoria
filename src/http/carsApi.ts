import { $host } from ".";
import type { Car } from "@/@types/cars.types";

export async function getCars() {
  const response = await $host.request<Car[]>({
    url: "/vehicles",
  });

  return response;
}

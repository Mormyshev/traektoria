export interface Car {
  color: string;
  id: number;
  latitude?: number;
  longitude?: number;
  model: string;
  name: string;
  price: number;
  year: number;
}

export interface CarsState {
  cars: Car[];
  carsLenght: number;
  isLoading: boolean;
  error: string | null;
}

export interface EditCarCard {
  id?: number;
  name: string;
  price: number;
}

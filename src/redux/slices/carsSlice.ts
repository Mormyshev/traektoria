import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Car } from "../../@types/cars.types";
import type { CarsState } from "../../@types/cars.types";

const initialState: CarsState = {
  cars: [],
  carsLenght: 0,
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "carsStore",
  initialState,
  reducers: {
    setCars(state, action: PayloadAction<Car[]>) {
      state.cars = action.payload;
      state.isLoading = false;
      state.error = null;
      state.carsLenght = action.payload.length;
    },
    addCar(state, action: PayloadAction<Car>) {
      state.carsLenght += 1;
      action.payload.id = state.carsLenght;
      state.cars.push(action.payload);
    },
    sortYearTop(state, action: PayloadAction<CarsState>) {
      state.cars = JSON.parse(
        JSON.stringify(action.payload)
      ).carsStore.cars.sort((a: Car, b: Car) => (a.year < b.year ? -1 : 1));
    },
    sortYearBottom(state, action: PayloadAction<CarsState>) {
      state.cars = JSON.parse(
        JSON.stringify(action.payload)
      ).carsStore.cars.sort((a: Car, b: Car) => (a.year > b.year ? -1 : 1));
    },
    sortPriceTop(state, action: PayloadAction<CarsState>) {
      state.cars = JSON.parse(
        JSON.stringify(action.payload)
      ).carsStore.cars.sort((a: Car, b: Car) => (a.price < b.price ? -1 : 1));
    },
    sortPriceBottom(state, action: PayloadAction<CarsState>) {
      state.cars = JSON.parse(
        JSON.stringify(action.payload)
      ).carsStore.cars.sort((a: Car, b: Car) => (a.price > b.price ? -1 : 1));
    },
    delCar(state, action) {
      debugger;
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    },
    setNewNameYearCar(state, action) {
      debugger;
      const index = state.cars.findIndex((car) => car.id === action.payload.id);
      state.cars[index].name = action.payload.name;
      state.cars[index].price = action.payload.price;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
    clearCars(state) {
      state.cars = [];
      state.error = null;
    },
  },
});

export const {
  setCars,
  addCar,
  sortYearTop,
  sortYearBottom,
  sortPriceTop,
  sortPriceBottom,
  setLoading,
  delCar,
  setNewNameYearCar,
  setError,
  clearCars,
} = carsSlice.actions;
export default carsSlice.reducer;

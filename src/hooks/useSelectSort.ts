import type { CarsState } from "@/@types/cars.types";
import {
  sortYearTop,
  sortYearBottom,
  sortPriceTop,
  sortPriceBottom,
} from "@/redux/slices/carsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const useSelectSort = () => {
  const dispatch = useDispatch();
  const [sortState, setStoreState] = useState("");

  const carsData = useSelector((state: CarsState) => state);

  useEffect(() => {
    switch (sortState) {
      case "year-top":
        dispatch(sortYearTop(carsData));
        break;
      case "year-bottom":
        dispatch(sortYearBottom(carsData));
        break;
      case "price-top":
        dispatch(sortPriceTop(carsData));
        break;
      case "price-bottom":
        dispatch(sortPriceBottom(carsData));
        break;
      default:
        break;
    }
  }, [sortState]);

  return { sortState, setStoreState };
};

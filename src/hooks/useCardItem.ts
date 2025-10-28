import { useDispatch } from "react-redux";
import { delCar } from "@/redux/slices/carsSlice";
import { useState } from "react";
import { setNewNameYearCar } from "@/redux/slices/carsSlice";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { EditCarCard } from "@/@types/cars.types";

export const useCardItem = () => {
  const schema = z.object({
    name: z.string().min(1, { message: "Не менее 1 символа" }),
    price: z.number().min(1, { message: "Не менее 1 символа" }),
  });

  type FormData = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      price: 0,
    },
  });
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [carId, setCarId] = useState<number>(1);
  const delSelectCar = (carId: number) => {
    dispatch(delCar(carId));
  };
  const onSubmit = (data: EditCarCard) => {
    setIsEdit(false);
    data.id = carId;
    dispatch(setNewNameYearCar(data));
  };

  return {
    handleSubmit,
    register,
    onSubmit,
    isEdit,
    setIsEdit,
    delSelectCar,
    errors,
    setCarId,
  };
};

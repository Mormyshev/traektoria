import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addCar } from "@/redux/slices/carsSlice";
import { useState } from "react";
import type { Car } from "@/@types/cars.types";

export const useNewCarSheet = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const schema = z.object({
    name: z.string().min(2, { message: "Имя должно быть не менее 2 символов" }),
    model: z
      .string()
      .min(2, { message: "Имя должно быть не менее 2 символов" }),
    year: z.number().min(4, { message: "Введите 4 символа" }),
    color: z
      .string()
      .min(2, { message: "Цвет должен быть не менее 2 символов" })
      .max(64, { message: "Цвет должен быть не более 64 символов" }),
    price: z
      .number()
      .min(1, { message: "Цена должно быть не менее 1 символа" }),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      model: "",
      year: 0,
      color: "",
      price: 0,
    },
  });
  const onSubmit = (data: Car) => {
    dispatch(addCar(data));
    setIsOpen(false);
    reset();
  };

  type FormData = z.infer<typeof schema>;
  return { isOpen, setIsOpen, register, errors, handleSubmit, onSubmit };
};

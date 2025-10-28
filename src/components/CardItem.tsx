import type { Car } from "@/@types/cars.types";
import { X } from "lucide-react";
import { Pencil } from "lucide-react";
import { Check } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useCardItem } from "@/hooks/useCardItem";

const CardItem = (car: Car) => {
  const {
    handleSubmit,
    register,
    onSubmit,
    isEdit,
    setIsEdit,
    delSelectCar,
    errors,
    setCarId,
  } = useCardItem();
  return (
    <Card className="bg-gray-100">
      <CardHeader className="flex flex-col">
        <CardTitle className="flex flex-row w-[100%] justify-end">
          {isEdit ? (
            //Кнопка сохранения изменений
            <Button
              variant={"outline"}
              className="mr-2 bg-green-200 h-7 w-7"
              onClick={() => {
                handleSubmit(onSubmit)();
              }}
            >
              <Check />
            </Button>
          ) : (
            //Кнопка режима редактировани
            <Button
              variant={"outline"}
              className="mr-2 bg-gray-200 h-7 w-7"
              onClick={() => {
                setIsEdit(true);
                setCarId(car.id);
              }}
            >
              <Pencil />
            </Button>
          )}
          {/*Кнопка удаления карточки*/}
          <Button
            variant={"outline"}
            className="bg-gray-200 h-7 w-7"
            onClick={() => delSelectCar(car.id)}
          >
            <X />
          </Button>
        </CardTitle>
        <CardDescription className="pt-auto flex flex-col">
          <div className="text-[24px]">
            {isEdit ? (
              <div>
                <Input
                  className="w-[100%] h-[25px] text-[24px] mr-2 p-0  mt-0 shadow-none border border-b-1 border-t-0 border-x-0 rounded-[0px] focus-visible:rounded-[5px] focus-visible:shadow-none "
                  {...register("name")}
                />
                {errors.name && (
                  <span className="absolute flex text-red-500 text-sm mr-auto">
                    {errors.name.message}
                  </span>
                )}
              </div>
            ) : (
              <div className="text-[24px]  text-[#3d7aa5]">{car.name}</div>
            )}
          </div>
          <div className="pt-8">{car.model}</div>
        </CardDescription>
        <CardAction className="pt-1">{car.year}</CardAction>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="border-t-2">
        <div className="flex flex-row pt-3 ml-auto">
          <span className="pr-2">Цена: </span>
          {isEdit ? (
            <div>
              <Input
                id="price"
                type="number"
                className="relative w-[60px] h-[20px] text-[16px] flex flex-row p-0 pt-1  mt-0 shadow-none border border-b-1 border-t-0 border-x-0 rounded-[0px] focus-visible:rounded-[5px] focus-visible:shadow-none"
                placeholder="Введите цену"
                {...register("price", {
                  valueAsNumber: true,
                  setValueAs: (v) => (v === "" ? undefined : Number(v)),
                })}
              />
              {errors.price && (
                <span className="relative flex text-red-500 text-sm">
                  <div className="absolute w-[180px] left-[-80px]">
                    {errors.price.message}
                  </div>
                </span>
              )}
            </div>
          ) : (
            <div className="w-[60px] h-[20px] pb-[2px] text-[16px]">
              {car.price} $
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardItem;

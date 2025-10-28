import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useNewCarSheet } from "@/hooks/useNewCarSheet";

const NewCarSheet = () => {
  const { isOpen, setIsOpen, register, errors, handleSubmit, onSubmit } =
    useNewCarSheet();
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="mt-4 absolute top-[95px] mt-0">
        <Button variant="outline">
          <Plus />
          <span className="hidden 400:flex"> Добавить новую машину</span>
          <span className="400:hidden"> Добавить</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Добавить новую машину</SheetTitle>
          <SheetDescription>Заполните поля, нажмите сохранить</SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="name">Название</Label>
            <Input
              id="name"
              placeholder="Введите название"
              {...register("name")}
            />
            {errors.name && (
              <span className="flex text-red-500 text-sm mr-auto">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="grid gap-3">
            <Label htmlFor="model">Модель</Label>
            <Input
              id="model"
              placeholder="Введите модель"
              {...register("model")}
            />
            {errors.model && (
              <span className="flex text-red-500 text-sm mr-auto">
                {errors.model.message}
              </span>
            )}
          </div>
          <div className="grid gap-3">
            <Label htmlFor="year">Год выпуска</Label>
            <Input
              id="year"
              placeholder="Введите год выпуска"
              {...register("year")}
            />
            {errors.year && (
              <span className="flex text-red-500 text-sm mr-auto">
                {errors.year.message}
              </span>
            )}
          </div>
          <div className="grid gap-3">
            <Label htmlFor="color">Цвет</Label>
            <Input
              id="color"
              placeholder="Введите цвет"
              {...register("color")}
            />
            {errors.color && (
              <span className="flex text-red-500 text-sm mr-auto">
                {errors.color.message}
              </span>
            )}
          </div>
          <div className="grid gap-3">
            <Label htmlFor="price">Цена</Label>
            <Input
              id="price"
              type="number"
              placeholder="Введите цену"
              {...register("price", { valueAsNumber: true })}
            />
            {errors.price && (
              <span className="flex text-red-500 text-sm mr-auto">
                {errors.price.message}
              </span>
            )}
          </div>
        </div>
        <SheetFooter>
          <Button
            onClick={() => {
              handleSubmit(onSubmit)();
            }}
          >
            сохранить
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default NewCarSheet;

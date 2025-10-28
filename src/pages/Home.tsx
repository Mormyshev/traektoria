import CardItem from "@/components/CardItem";
import type { Car } from "../@types/cars.types";
import { useHome } from "../hooks/useHome";
import SelectSort from "@/components/SelectSort";
import Loader from "@/components/Loader";
import NewCarSheet from "@/components/NewCarSheet";
import { ShieldAlert } from "lucide-react";

const Home = () => {
  const { carsData, isLoading, error } = useHome();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }

  if (!carsData || carsData.length === 0) {
    return (
      <div className="w-[100%] h-[calc(100vh-200px)] flex flex-col justify-center items-center text-[#3d7aa5] text-600">
        <div className="flex flex-col justify-center text-center border-2 border-[#3d7aa5] p-8 rounded-[16px]">
          <div className="flex justify-center">
            <div className=" p-4 bg-[#3d7aa5]/10 rounded-[50px]">
              <ShieldAlert className="w-[50px] h-[50px]" />
            </div>
          </div>
          <span className="text-[24px] mt-4">НЕТ ДАННЫХ</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-4">
      <div className="flex justify-end mt-8 mr-auto">
        <SelectSort />
      </div>
      <NewCarSheet />
      <div className="grid gap-4 grid-cols-1 375:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 py-8">
        {carsData.map((car: Car) => (
          <CardItem key={car.id} {...car} />
        ))}
      </div>
    </div>
  );
};

export default Home;

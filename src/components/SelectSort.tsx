import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSelectSort } from "@/hooks/useSelectSort";

const SelectSort = () => {
  const { sortState, setStoreState } = useSelectSort();
  return (
    <Select
      value={sortState}
      onValueChange={(value: string) => {
        setStoreState(value);
      }}
    >
      <SelectTrigger className="w-auto">
        <SelectValue placeholder="Сортировать" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="year-top">Год по возрастанию</SelectItem>
          <SelectItem value="year-bottom">Год по убыванию</SelectItem>
          <SelectItem value="price-top">Цена по возрастанию</SelectItem>
          <SelectItem value="price-bottom">Цена по убыванию</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectSort;

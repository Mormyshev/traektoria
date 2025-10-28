import { Spinner } from "@/components/ui/spinner";

const Loader = () => {
  return (
    <div className="absolute flex w-[100vw] h-[calc(100vh-63px)] items-center justify-center m-auto gap-6">
      <Spinner className="size-8" />
    </div>
  );
};

export default Loader;

import { Skeleton } from "./ui/skeleton";

export default function Hero() {
  return (
    <div className="w-full h-screen p-12">
      <Skeleton className="w-full h-full rounded-md flex justify-center items-center text-4xl">
        Banner
      </Skeleton>
    </div>
  );
}

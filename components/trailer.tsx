import { Skeleton } from "./ui/skeleton";

export default function Trailer() {
  return (
    <div className="w-full h-screen p-12 flex items-center justify-center">
      <Skeleton className="w-3/4 h-3/4 rounded-md flex justify-center items-center text-4xl">
        Trailer
      </Skeleton>
    </div>
  );
}

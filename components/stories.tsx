import * as React from "react";
import { Skeleton } from "./ui/skeleton";

export default function Stories() {
  return (
    <div className="w-full h-screen p-12 grid grid-cols-2 gap-12">
      <Skeleton />
      <div className="space-y-2 flex flex-col justify-center">
        <Skeleton className="h-4 w-[350px]" />
        <Skeleton className="h-4 w-[300px]" />
        <Skeleton className="h-4 w-[300px]" />
      </div>
    </div>
  );
}

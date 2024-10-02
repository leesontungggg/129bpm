import * as React from "react";
import { Skeleton } from "./ui/skeleton";

export default function Partners() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-4xl">Powered by</h1>
      <div className="w-full h-fit p-12 flex items-center justify-center gap-6">
        <Skeleton className="w-1/6 h-[100px] center">Partner</Skeleton>
        <Skeleton className="w-1/6 h-[100px] center">Partner</Skeleton>
        <Skeleton className="w-1/6 h-[100px] center">Partner</Skeleton>
        <Skeleton className="w-1/6 h-[100px] center">Partner</Skeleton>
        <Skeleton className="w-1/6 h-[100px] center">Partner</Skeleton>
        <Skeleton className="w-1/6 h-[100px] center">Partner</Skeleton>
      </div>
    </div>
  );
}

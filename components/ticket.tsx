import * as React from "react";
import { Skeleton } from "./ui/skeleton";
import { Card, CardContent } from "./ui/card";

export default function Ticket() {
  return (
    <div className="w-full h-screen p-12 grid grid-cols-2 gap-12">
      <div className="flex flex-col justify-center items-center gap-4">
        <Skeleton className="h-[350px] w-[350px] flex justify-center items-center">
          Thumbnail A
        </Skeleton>
        <Skeleton className="p-1">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              Get your ticket 6.12.2024
            </CardContent>
          </Card>
        </Skeleton>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <Skeleton className="h-[350px] w-[350px] flex justify-center items-center">
          Thumbnail A
        </Skeleton>
        <Skeleton className="p-1">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              Get your ticket 7.12.2024
            </CardContent>
          </Card>
        </Skeleton>
      </div>
    </div>
  );
}

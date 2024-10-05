import * as React from "react";
import { Skeleton } from "./ui/skeleton";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

export default function Cart() {
  return (
    <div className="w-full min-h-screen p-12 flex items-center flex-col gap-4">
      <Skeleton className="h-fit p-2">
        <h1 className="text-6xl">Shopping Cart</h1>
      </Skeleton>
      <div className="flex flex-col w-full">
        <div className="grid grid-cols-1 gap-8">
          <Skeleton className="w-full h-[300px] flex justify-center items-center text-2xl">
            <Popover>
              <PopoverTrigger>Item 1 - $20</PopoverTrigger>
              <PopoverContent>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Item Details</h4>
                    <p className="text-sm text-muted-foreground">
                      Description of item 1
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="quantity">Quantity</Label>
                      <Input
                        id="quantity"
                        defaultValue="1"
                        className="col-span-2 h-8"
                      />
                      <Button className="w-fit">Update</Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </Skeleton>
          <Skeleton className="w-full h-[300px] flex justify-center items-center text-2xl">
            <Popover>
              <PopoverTrigger>Item 2 - $35</PopoverTrigger>
              <PopoverContent>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Item Details</h4>
                    <p className="text-sm text-muted-foreground">
                      Description of item 2
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="quantity">Quantity</Label>
                      <Input
                        id="quantity"
                        defaultValue="1"
                        className="col-span-2 h-8"
                      />
                      <Button className="w-fit">Update</Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </Skeleton>
        </div>
      </div>
      <Skeleton className="w-full h-[100px] flex justify-center items-center text-4xl">
        Total: $55
      </Skeleton>
      <Button className="mt-4">Proceed to Checkout</Button>
    </div>
  );
}

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

export default function Seatmap() {
  return (
    <div className="w-full min-h-screen p-12 flex items-center flex-col gap-4">
      <Skeleton className="h-fit p-2">
        <h1 className="text-6xl">Seatmap</h1>
      </Skeleton>
      <Skeleton className="w-full h-[150px] flex justify-center items-center text-4xl">
        Sân khấu / Stage
      </Skeleton>
      <div className="flex flex-col w-full">
        <div className="grid grid-cols-3 gap-8">
          <Skeleton className="w-full h-[300px] flex justify-center items-center text-2xl">
            <Popover>
              <PopoverTrigger>Zone Tempo A - 42 Ghế</PopoverTrigger>
              <PopoverContent>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Thông tin vé</h4>
                    <p className="text-sm text-muted-foreground">Mô tả vé</p>
                  </div>
                  <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="width">Số lượng vé</Label>
                      <Input
                        id="width"
                        defaultValue="100%"
                        className="col-span-2 h-8"
                      />
                      <Button className="w-fit">Thêm vào giỏ hàng</Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </Skeleton>
          <Skeleton className="w-full h-[300px] flex justify-center items-center text-2xl">
            <Popover>
              <PopoverTrigger>Zone Tempo A - 42 Ghế</PopoverTrigger>
              <PopoverContent>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Thông tin vé</h4>
                    <p className="text-sm text-muted-foreground">Mô tả vé</p>
                  </div>
                  <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="width">Số lượng vé</Label>
                      <Input
                        id="width"
                        defaultValue="100%"
                        className="col-span-2 h-8"
                      />
                      <Button className="w-fit">Thêm vào giỏ hàng</Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </Skeleton>
          <Skeleton className="w-full h-[300px] flex justify-center items-center text-2xl">
            <Popover>
              <PopoverTrigger>Zone Tempo A - 42 Ghế</PopoverTrigger>
              <PopoverContent>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Thông tin vé</h4>
                    <p className="text-sm text-muted-foreground">Mô tả vé</p>
                  </div>
                  <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="width">Số lượng vé</Label>
                      <Input
                        id="width"
                        defaultValue="100%"
                        className="col-span-2 h-8"
                      />
                      <Button className="w-fit">Thêm vào giỏ hàng</Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </Skeleton>
          <Skeleton className="w-full h-[500px] flex justify-center items-center text-2xl">
            <Popover>
              <PopoverTrigger>Zone Tempo A - 42 Ghế</PopoverTrigger>
              <PopoverContent>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Thông tin vé</h4>
                    <p className="text-sm text-muted-foreground">Mô tả vé</p>
                  </div>
                  <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="width">Số lượng vé</Label>
                      <Input
                        id="width"
                        defaultValue="100%"
                        className="col-span-2 h-8"
                      />
                      <Button className="w-fit">Thêm vào giỏ hàng</Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </Skeleton>
          <div className="w-full h-[500px] flex flex-col justify-center items-center gap-4">
            <Skeleton className="w-full h-1/4 text-2xl center">
              <Popover>
                <PopoverTrigger>Zone Tempo A - 42 Ghế</PopoverTrigger>
                <PopoverContent>
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Thông tin vé</h4>
                      <p className="text-sm text-muted-foreground">Mô tả vé</p>
                    </div>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="width">Số lượng vé</Label>
                        <Input
                          id="width"
                          defaultValue="100%"
                          className="col-span-2 h-8"
                        />
                        <Button className="w-fit">Thêm vào giỏ hàng</Button>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </Skeleton>
            <Skeleton className="w-full h-2/4 text-2xl center">
              <Popover>
                <PopoverTrigger>Zone Tempo A - 42 Ghế</PopoverTrigger>
                <PopoverContent>
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Thông tin vé</h4>
                      <p className="text-sm text-muted-foreground">Mô tả vé</p>
                    </div>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="width">Số lượng vé</Label>
                        <Input
                          id="width"
                          defaultValue="100%"
                          className="col-span-2 h-8"
                        />
                        <Button className="w-fit">Thêm vào giỏ hàng</Button>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </Skeleton>
            <Skeleton className="w-full h-1/4 text-2xl center">
              <Popover>
                <PopoverTrigger>Zone Tempo A - 42 Ghế</PopoverTrigger>
                <PopoverContent>
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Thông tin vé</h4>
                      <p className="text-sm text-muted-foreground">Mô tả vé</p>
                    </div>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="width">Số lượng vé</Label>
                        <Input
                          id="width"
                          defaultValue="100%"
                          className="col-span-2 h-8"
                        />
                        <Button className="w-fit">Thêm vào giỏ hàng</Button>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </Skeleton>
          </div>
          <Skeleton className="w-full h-[500px] flex justify-center items-center text-2xl">
            <Popover>
              <PopoverTrigger>Zone Tempo A - 42 Ghế</PopoverTrigger>
              <PopoverContent>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Thông tin vé</h4>
                    <p className="text-sm text-muted-foreground">Mô tả vé</p>
                  </div>
                  <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="width">Số lượng vé</Label>
                      <Input
                        id="width"
                        defaultValue="100%"
                        className="col-span-2 h-8"
                      />
                      <Button className="w-fit">Thêm vào giỏ hàng</Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </Skeleton>
        </div>
      </div>
      <Skeleton className="w-full h-[100px] flex justify-center items-center text-4xl">
        LẦU 2: ZONE X (303 GHẾ) / CHỈ MỞ BÁN KHI LẦU 1 SOLD OUT
      </Skeleton>
    </div>
  );
}

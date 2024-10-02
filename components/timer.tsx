"use client";
import * as React from "react";
import Countdown from "react-countdown";

export default function Timer() {
  return (
    <div className="w-full h-fit p-12 flex items-center justify-center">
      <Countdown
        date={"2024-12-06T01:02:03"}
        renderer={({ days, hours, minutes, seconds }) => (
          <div className="text-5xl">
            {days} days {hours} hours {minutes} minutes {seconds} seconds
          </div>
        )}
      ></Countdown>
    </div>
  );
}

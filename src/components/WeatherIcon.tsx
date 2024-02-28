import { cn } from "@/utils/cn";
import Image from "next/image";
import React from "react";

type WeatherIconProps = {
  iconName: string;
} & React.HTMLProps<HTMLDivElement>;

function WeatherIcon({ iconName }: WeatherIconProps) {
  return (
    <div className={cn("relative h-20 w-20")}>
      <Image
        width={100}
        height={100}
        alt="Weather icon"
        className="absolute h-full w-full"
        src={`https://openweathermap.org/img/wn/${iconName}@4x.png`}
      />
    </div>
  );
}

export default WeatherIcon;

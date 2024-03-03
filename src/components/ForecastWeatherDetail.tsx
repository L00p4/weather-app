import React from "react";
import Container from "./Container";
import WeatherDetails, { WeatherDetailsProps } from "./WeatherDetails";
import WeatherIcon from "./WeatherIcon";
import { convertKelvinToCelsius } from "@/utils/conertKelvinToCelsius";

type ForecastWeatherDetailProps = {
  weatherIcon: string;
  date: string;
  day: string;
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  description: string;
} & WeatherDetailsProps;

export default function ForecastWeatherDetail({
  weatherIcon = "02d",
  date = "19.09",
  day = "Week day",
  temp,
  feels_like,
  temp_min,
  temp_max,
  description,
  ...rest
}: ForecastWeatherDetailProps) {
  return (
    <Container className=" gap-4">
      <section className=" flex gap-4 items-center px-4">
        <div className="flex flex-col gap-1 items-center">
          <WeatherIcon iconName={weatherIcon} />
          <p>{date}</p>
          <p className=" text-sm">{day}</p>
        </div>

        <div className=" flex flex-col px-4">
          <span className=" text-5xl">{convertKelvinToCelsius(temp)}°</span>
          <p className="text-xs space-x-1 whitespace-nowrap">
            <span>Feels like</span>
            <span>{convertKelvinToCelsius(feels_like)}°</span>
          </p>
          <p className="capitalize">{description}</p>
        </div>
      </section>

      <section className="overflow-x-auto flex justify-between gap-4 px-4 w-full pr-10">
        <WeatherDetails {...rest} />
      </section>
    </Container>
  );
}

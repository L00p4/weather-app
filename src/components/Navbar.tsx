"use client";

import React, { useState } from "react";
import { MdOutlineLocationOn, MdWbSunny } from "react-icons/md";
import { MdMyLocation } from "react-icons/md";
import SearchBox from "./SearchBox";
import axios from "axios";

type NavbarProps = {};

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY;

function Navbar({}: NavbarProps) {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const [suggestion, setSuggestion] = useState<string[]>([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  async function handleInputChange(value: string) {
    setCity(value);
    if (value.length >= 3) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/find?q=${value}&appid=${API_KEY}`
        );

        const suggestion = response.data.list.map((item: any) => item.name);
        setSuggestion(suggestion);
        setError("");
        setShowSuggestion(true);
      } catch (error) {
        setSuggestion([]);
        setShowSuggestion(false);
      }
    } else {
      setSuggestion([]);
      setShowSuggestion(false);
    }
  }

  function handleSuggestionClick(value: string) {
    setCity(value);
    setShowSuggestion(false);
  }

  function handleOnSubmitSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (suggestion.length == 0) {
      setError("Localização não encontrada");
    } else {
      setError("");
      setShowSuggestion(false);
    }
  }

  return (
    <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white">
      <div className="h-[5rem] w-full flex justify-between items-center max-w-7xl px-3 mx-auto">
        <p className="flex items-center justify-center gap-2">
          <h2 className="text-gray-500 text-3xl">Weather </h2>
          <MdWbSunny className="text-3xl mt-1 text-yellow-300" />
        </p>

        <section className="flex gap-2 items-center">
          <MdMyLocation className="text-2xl text-gray-400 hover:opacity-80 cursor-pointer" />
          <MdOutlineLocationOn className="text-3xl" />
          <p className="text-slate-900/80 text-sm">Localização</p>
          <div className="relative">
            <SearchBox
              value={city}
              onSubmit={handleOnSubmitSearch}
              onChange={(e) => {
                handleInputChange(e.target.value);
              }}
            />
            <SuggestionBox
              {...{ showSuggestion, suggestion, handleSuggestionClick, error }}
            />
          </div>
        </section>
      </div>
    </nav>
  );
}

export default Navbar;

type SuggestionBoxProps = {
  showSuggestion: boolean;
  suggestion: string[];
  handleSuggestionClick: (item: string) => void;
  error: string;
};

function SuggestionBox({
  showSuggestion,
  suggestion,
  handleSuggestionClick,
  error,
}: SuggestionBoxProps) {
  return (
    <>
      {((showSuggestion && suggestion.length > 1) || error) && (
        <ul className="mb-4 bg-white absolute border top-[3rem] left-0 border-gray-300 rounded-md min-w-[13rem] flex flex-col gap-1 py-2 px-2">
          {error && suggestion.length < 1 && (
            <li className="text-red-500 p-1">{error}</li>
          )}
          {suggestion.map((item, i) => (
            <li
              key={i}
              onClick={() => handleSuggestionClick(item)}
              className="cursor-pointer p-1 rounded hover:bg-gray-200"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

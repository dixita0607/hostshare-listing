"use client";

import { City } from "country-state-city";
import uniqBy from "lodash-es/uniqBy";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const FILTERS = {
  LOCATION: "LOCATION",
  CHECK_IN: "CHECK_IN",
  CHECK_OUT: "CHECK_OUT",
  NUMBER_OF_PEOPLE: "NUMBER_OF_PEOPLE",
};

const Search = () => {
  const router = useRouter();
  const listOfCities = uniqBy(City.getCitiesOfCountry("US"), "name");

  const searchParams = useSearchParams();
  const [selectedCity, setSelectedCity] = useState(
    searchParams.get("city") || ""
  );

  const [currentFilter, setCurrentFilter] = useState(FILTERS.LOCATION);

  const handleSelectLocation = (e) => {
    setSelectedCity(e.target.value);
    router.replace(`/search-results?city=${e.target.value}`);
  };

  return (
    <div className="flex items-center justify-around border-2 border-gray-200 rounded-full cursor-pointer">
      {/* Location selector */}
      <div
        className={`rounded-full p-2 w-60 ${
          currentFilter === FILTERS.LOCATION ? "shadow-md bg-slate-50" : ""
        } `}
        onClick={() => setCurrentFilter(FILTERS.LOCATION)}
      >
        <label htmlFor="cities" className="font-semibold text-xs ml-3">
          Where
        </label>
        <select
          id="cities"
          name="cities"
          value={selectedCity}
          onChange={handleSelectLocation}
          placeholder="Search city..."
          className="rounded-md focus-visible:outline-none w-52 bg-transparent ml-2 text-sm"
        >
          <option hidden>Select city</option>
          {listOfCities?.map((city) => (
            <option value={city.name} key={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>

      {/* Date picker */}
      <div
        className={`rounded-full w-48	p-2 pt-5 flex flex-col justify-middle max-md:hidden ${
          currentFilter === FILTERS.CHECK_IN ? "shadow-md bg-slate-50" : ""
        }`}
        onClick={() => setCurrentFilter(FILTERS.CHECK_IN)}
      >
        <label htmlFor="from" className="font-semibold text-xs ml-2">
          Check in:
        </label>
        <input
          type="date"
          id="from"
          name="from"
          className="focus-visible:outline-none bg-transparent text-sm ml-2"
        />
      </div>
      <div
        className={`rounded-full w-48 p-2 pt-5 flex flex-col justify-middle max-md:hidden ${
          currentFilter === FILTERS.CHECK_OUT ? "shadow-md bg-slate-50" : ""
        }`}
        onClick={() => setCurrentFilter(FILTERS.CHECK_OUT)}
      >
        <label htmlFor="to" className="font-semibold text-xs ml-2">
          Check out:
        </label>
        <input
          type="date"
          id="to"
          name="to"
          className="focus-visible:outline-none bg-transparent text-sm ml-2"
        />
      </div>

      {/* Number of people */}
      <div
        className={`rounded-full w-40	p-2 max-md:hidden ${
          currentFilter === FILTERS.NUMBER_OF_PEOPLE
            ? "shadow-md bg-slate-50"
            : ""
        }`}
        onClick={() => setCurrentFilter(FILTERS.NUMBER_OF_PEOPLE)}
      >
        <label htmlFor="numberOfPeople" className="font-semibold text-xs ml-3">
          People
        </label>
        <input
          type="number"
          id="numberOfPeople"
          name="numberOfPeople"
          placeholder="Enter number"
          className="focus-visible:outline-none bg-transparent text-sm w-32 ml-3"
        />
      </div>
    </div>
  );
};

export default Search;

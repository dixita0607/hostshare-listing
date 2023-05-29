"use client";

import { City } from "country-state-city";
import uniqBy from "lodash-es/uniqBy";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Search = () => {
  const router = useRouter();
  const listOfCities = uniqBy(City.getCitiesOfCountry("US"), "name");

  const searchParams = useSearchParams();
  const [selectedCity, setSelectedCity] = useState(
    searchParams.get("city") || ""
  );

  const handleSelectLocation = (e) => {
    setSelectedCity(e.target.value);
    router.replace(`/search-results?city=${e.target.value}`);
  };

  return (
    <div className="flex">
      {/* Location selector */}
      <div>
        <select
          id="cities"
          name="cities"
          value={selectedCity}
          onChange={handleSelectLocation}
          className="p-2 rounded-md focus-visible:outline-none"
        >
          {listOfCities?.map((city) => (
            <option value={city.name} key={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>

      {/* Date picker */}
      {/* <div>
        <div>Date Range</div>
        <div>
          <label htmlFor="from">From:</label>
          <input type="date" id="from" name="from" />
        </div>
        <div>
          <label htmlFor="to">To:</label>
          <input type="date" id="to" name="to" />
        </div>
      </div> */}

      {/* Number of people */}
      {/* <div>
        <label htmlFor="numberOfPeople">Number of People</label>
        <input type="number" id="numberOfPeople" name="numberOfPeople" />
      </div> */}
    </div>
  );
};

export default Search;

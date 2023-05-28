import { City } from "country-state-city";
import uniqBy from "lodash-es/uniqBy";

const Search = () => {
  const listOfCities = uniqBy(City.getCitiesOfCountry("US"), "name");

  return (
    <div className="flex">
      {/* Location selector */}
      <div>
        <label htmlFor="cities">Select a city:</label>
        <select id="cities" name="cities">
          {listOfCities?.map((city) => (
            <option value={city.name} key={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>

      {/* Date picker */}
      <div>
        <div>Date Range</div>
        <div>
          <label htmlFor="from">From:</label>
          <input type="date" id="from" name="from" />
        </div>
        <div>
          <label htmlFor="to">To:</label>
          <input type="date" id="to" name="to" />
        </div>
      </div>

      {/* Number of people */}
      <div>
        <label htmlFor="numberOfPeople">Number of People</label>
        <input type="number" id="numberOfPeople" name="numberOfPeople" />
      </div>
    </div>
  );
};

export default Search;

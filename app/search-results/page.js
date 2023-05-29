import ListingCard from "../components/ListingCard";
import { fetchListingsByCity } from "../../apis/listings";

const SearchResults = async ({ searchParams }) => {
  const listingByCity = await fetchListingsByCity(searchParams.city);

  return (
    <div className="p-8 flex flex-wrap justify-evenly">
      {listingByCity.map((listItem, index) => {
        return <ListingCard key={index.toString()} details={listItem.info} />;
      })}
    </div>
  );
};

export default SearchResults;

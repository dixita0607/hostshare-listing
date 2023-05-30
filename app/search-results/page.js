import ListingCard from "../components/ListingCard";

const getListingsByCity = async (city) => {
  const res = await fetch(`${process.env.HOST}/api/listings?city=${city}`, {
    cache: "no-store",
  });
  return res.json();
};

const SearchResults = async ({ searchParams }) => {
  const listingByCity = await getListingsByCity(searchParams.city);

  return (
    <div className="p-8 flex flex-wrap justify-evenly">
      {listingByCity?.data?.map((listItem, index) => {
        return <ListingCard key={index.toString()} details={listItem.info} />;
      })}
    </div>
  );
};

export default SearchResults;

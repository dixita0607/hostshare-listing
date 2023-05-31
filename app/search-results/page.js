import ListingCard from "../components/ListingCard";

const getListingsByCity = async (city) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/listings/search`,
    {
      method: "POST",
      body: JSON.stringify({
        city,
      }),
      cache: "no-store",
    }
  );
  return res.json();
};

const SearchResults = async ({ searchParams }) => {
  const listingByCity = await getListingsByCity(searchParams.city);

  return (
    <div className="flex flex-col">
      <div className="p-8 flex flex-wrap justify-evenly space-x-2 space-y-8">
        {listingByCity?.data?.map((listItem, index) => {
          return <ListingCard key={index.toString()} details={listItem.info} />;
        })}
      </div>
    </div>
  );
};

export default SearchResults;

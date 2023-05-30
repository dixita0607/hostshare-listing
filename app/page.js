import ListingCard from "./components/ListingCard";

const fetchAllListings = async () => {
  const res = await fetch(`${process.env.HOST}/api/listings`, {
    cache: "no-store",
  });
  return res.json();
};

const Home = async () => {
  const listings = await fetchAllListings();

  return (
    <div className="flex flex-col">
      <div className="p-5 pl-32 pr-32 flex flex-wrap justify-evenly">
        {/* TODO: Add category wise list */}
        {listings?.data?.map((listItem, index) => {
          return <ListingCard key={index.toString} details={listItem.info} />;
        })}
      </div>
    </div>
  );
};

export default Home;

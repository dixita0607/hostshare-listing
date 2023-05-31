import ListingCard from "./components/ListingCard";

const fetchAllListings = async () => {
  const res = await fetch(
    `://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/listings`,
    {
      cache: "no-store",
    }
  );
  return res.json();
};

const Home = async () => {
  const listings = await fetchAllListings();
  return (
    <div className="flex flex-col">
      <div className="p-5 flex flex-wrap justify-evenly space-x-2 space-y-8">
        {/* TODO: Add category wise list */}
        {listings?.data?.map((listItem, index) => {
          return <ListingCard key={index.toString} details={listItem.info} />;
        })}
      </div>
    </div>
  );
};

export default Home;

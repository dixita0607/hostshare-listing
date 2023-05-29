import ListingCard from "./components/ListingCard";
import { fetchAllListings } from "../apis/listings";

const Home = async () => {
  const listings = await fetchAllListings();

  return (
    <div className="flex flex-col">
      <div className="p-5 pl-32 pr-32 flex flex-wrap justify-evenly">
        {/* TODO: Add category wise list */}
        {listings.map((listItem, index) => {
          return <ListingCard key={index.toString} details={listItem.info} />;
        })}
      </div>
    </div>
  );
};

export default Home;

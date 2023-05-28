import allListings from "./data/listing-data";
import ListingCard from "./components/ListingCard";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Content */}
      <div className="p-8 flex flex-wrap justify-evenly">
        {/* TODO: Add category wise list */}
        {allListings.data.map((listItem, index) => {
          return <ListingCard key={index.toString} details={listItem.info} />;
        })}
      </div>
    </div>
  );
}

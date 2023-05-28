import allListings from "./data/listing-data";
import ListingCard from "./components/ListingCard";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />

      {/* Content */}
      <div className="p-8 flex flex-wrap justify-evenly">
        {/* TODO: Add category wise list */}
        {allListings.data.map((listItem) => {
          return <ListingCard key={listItem.info.id} details={listItem.info} />;
        })}
      </div>
    </div>
  );
}

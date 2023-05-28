import Image from "next/image";
import Search from "./components/Search";
import allListings from "./data/listing-data";
import ListingCard from "./components/ListingCard";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="flex align-middle justify-between p-8">
        <Image
          src="/images/logo-with-name.png"
          width={200}
          height={200}
          alt="Hostshare Logo with name"
        />
        <Search />
        <div>Profile and Menu</div>
      </div>

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

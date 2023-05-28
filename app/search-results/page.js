"use client";

import { useSearchParams } from "next/navigation";
import allListings from "../data/listing-data";
import ListingCard from "../components/ListingCard";

const getListingFilteredByCity = (city) =>
  allListings.data.filter((listing) => listing.info.location.city === city);

export default function SearchResults() {
  const searchParams = useSearchParams();
  const selectedCity = searchParams.get("city");

  return (
    <div className="p-8 flex flex-wrap justify-evenly">
      {getListingFilteredByCity(selectedCity).map((listItem, index) => {
        return <ListingCard key={index.toString()} details={listItem.info} />;
      })}
    </div>
  );
}

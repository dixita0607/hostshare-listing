import allListings from "../data/listing-data";

// TODO: Do a fetch API call.

// TODO: Manage Pagination.
const fetchAllListings = async () => allListings.data;

const fetchListingById = async (listingId) =>
  allListings.data.find((house) => house.info.id === listingId)?.info;

// TODO: This APIs should support other filters too
const fetchListingsByCity = async (city) =>
  allListings.data.filter((listing) => listing.info.location.city === city);

module.exports = {
  fetchAllListings,
  fetchListingById,
  fetchListingsByCity,
};

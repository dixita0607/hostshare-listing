import allListings from "../data/listing-data";

const fetchAllCategories = async () => allListings.categories;

module.exports = {
  fetchAllCategories,
};

import allListings from "../../../data/listing-data";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city");

  let listings = allListings.data;
  if (city) {
    listings = allListings.data.filter(
      (listing) => listing.info.location.city === city
    );
  }

  return NextResponse.json({ data: listings });
}

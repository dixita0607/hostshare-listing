import allListings from "../../../../data/listing-data";
import { NextResponse } from "next/server";

export async function POST(request) {
  const req = await request.json();
  let listings = allListings;
  if (req.city) {
    listings = allListings.data.filter(
      (listing) => listing.info.location.city === req.city
    );
  }

  return NextResponse.json({ data: listings });
}

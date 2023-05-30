import allListings from "../../../data/listing-data";
import { NextResponse } from "next/server";

export async function GET(_, { params: { listingId } }) {
  return NextResponse.json(
    allListings.data.find((house) => house.info.id === listingId)?.info
  );
}

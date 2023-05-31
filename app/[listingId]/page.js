import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { GrGallery } from "react-icons/gr";

const getListingDetails = async (listingId) => {
  const res = await fetch(`${process.env.HOST}/api/${listingId}`, {
    cache: "no-store",
  });
  return res.json();
};

const ListingDetails = async ({ params }) => {
  const listingDetails = await getListingDetails(params.listingId);

  return (
    <div className="flex flex-col px-32 py-5">
      {/* Title */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-medium">{listingDetails.title}</h1>
        <div className="flex items-center text-gray-700 text-xs font-medium space-x-2">
          <div className="flex items-center">
            <AiFillStar />
            <span>{listingDetails.ratings.guestSatisfactionOverall}</span>
          </div>
          <div className="underline">
            {listingDetails.visibleReviewCount} reviews
          </div>
          <div className="underline">
            {listingDetails.location.city},{" "}
            {listingDetails.location.country.title}
          </div>
        </div>
      </div>
      {/* Images */}
      <div className="flex items-center justify-center flex-wrap mt-2 relative">
        {listingDetails.images.data
          ?.filter((image) => image.type !== "avatar" && image.type !== "main")
          ?.slice(0, 8)
          ?.map((image) => (
            <div key={image.url} className="p-1 m-1">
              <Image
                width={280}
                height={240}
                alt="Interior"
                src={image.url}
                className="h-60  min-h-60 object-cover rounded-md"
              />
            </div>
          ))}
        <button
          type="button"
          className="absolute flex items-center right-14 bottom-4 bg-white p-2 rounded-md text-xs border-black border-2"
        >
          <GrGallery />
          <span className="ml-1">Show all photos</span>
        </button>
      </div>
      {/* Host info */}
      <div className="flex items-center justify-between mt-3">
        <h1 className="text-xl font-medium">
          A {listingDetails.type} hosted by {listingDetails.host?.name}
        </h1>
        <div className="ml-3">
          <Image
            src={listingDetails.host?.avatar.url}
            width={50}
            height={50}
            alt="Host"
            className="rounded-full"
          />
        </div>
      </div>

      {/* TODO: Render this in markdown or html */}
      <div className="mt-3">
        <h1 className="text-xl font-medium">About this place</h1>
        <div title={listingDetails.description} className="text-sm mt-1">
          {listingDetails.description?.slice(0, 500)}...
        </div>
      </div>

      {/* Amenities */}
      <div className="mt-3">
        <h1 className="text-xl font-medium">What this place offers</h1>
        <div className="flex flex-wrap items-center">
          {listingDetails.amenities.data?.map((amenity) => (
            <div
              key={amenity.name}
              className={`border-black border-2 rounded-md p-2 m-1 ${
                !amenity.available
                  ? "line-through text-gray-600 border-slate-600"
                  : ""
              }`}
            >
              {amenity.title}
            </div>
          ))}
        </div>
      </div>

      {/* TODO: Location map */}

      {/* Reserve */}
      {/* TODO: Design whole card */}
      <div className="flex flex-col fixed right-0 p-4 bg-white border-zinc-300 border-2 shadow-lg rounded-md w-80">
        <div className="flex align-center justify-between">
          <div>Price:</div>
          <div>
            <span className="font-semibold">
              {listingDetails.currency.symbol}
              {listingDetails.price}{" "}
            </span>
            night
          </div>
        </div>
        <div className="flex align-center justify-between">
          <div>People: </div>
          <div>2</div>
        </div>
        <div className="flex align-center justify-between">
          <div>Check-in:</div>
          <div> 2nd June, 2023</div>
        </div>
        <div className="flex align-center justify-between">
          <div>Check-out:</div>
          <div>6nd June, 2023</div>
        </div>
        <div className="flex align-center justify-between">
          <div>Total nights:</div>
          <div>4 nights</div>
        </div>
        <div className="flex align-center justify-between">
          <div>Total:</div>
          <div className="font-semibold">
            {listingDetails.currency.symbol}
            {4 * listingDetails.price}
          </div>
        </div>
        <button
          type="button"
          className="bg-primary p-2 mt-3 rounded-md text-white"
        >
          Reserve
        </button>
      </div>
    </div>
  );
};

export default ListingDetails;
